const multer = require('multer');
const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage })
const { OpenAI } = require('openai');
const fs = require("fs");
const path = require("path");
const { getPreguntaGrabacionPorArtista } = require('../db/questions.db');
const { emitEvent } = require('../services/socket.service');
const { sendEmailWithTemplate } = require('../services/brevo.service');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});


const sendAudio = [
  upload.single("audio"),
  async (req, res) => {
    const idArtist = req.query.idArtist || req.body.idArtist;
    const userEmail = req.query.emailUser || req.body.emailUser;
    const userName = req.query.nameUser || req.body.nameUser;
    const artist = req.query.artist || req.body.artist;

    console.log("Datos recibidos:", {
      idArtist,userEmail, userName, artist
    });
    

    if (!idArtist) {
      return res.status(400).json({ error: "idArtist es requerido." });
    }

    // Obtener la letra correcta de la canción
    const pregunta = await getPreguntaGrabacionPorArtista(idArtist);
    if (!pregunta) {
      return res.status(404).json({ error: "No se encontró pregunta para ese artista." });
    }

    const originalLyrics = pregunta.respuestaCorrecta;

    if (!req.file) {
      return res.status(400).send("No se recibió ningún archivo.");
    }

    try {
      // Guardar temporalmente el archivo
      const tempFilePath = path.join(__dirname, "temp-" + Date.now() + ".webm");
      fs.writeFileSync(tempFilePath, req.file.buffer);

      emitEvent("verifying-user", { 
        message: "Verificando"
      });

      // Transcripción con Whisper
      const transcription = await openai.audio.transcriptions.create({
        model: "whisper-1",
        file: fs.createReadStream(tempFilePath),
        response_format: "text"
      });

      fs.unlinkSync(tempFilePath); // eliminar archivo temporal
      
      // Comparar con ChatGPT (usar función de similitud)
      const similarityResponse = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: "Actúa como un jurado amigable en un concurso de canto.Compara la letra original de una canción con una versión cantada y transcrita automáticamente.Evalúa si la persona entendió la letra general, aunque haya cambiado o omitido algunas palabras,usado sinónimos o cometido errores comunes de canto (- errores comunes de pronunciación,- repeticiones o pequeñas omisiones,- palabras similares,- cambios leves en el orden.).No seas estricto. Sé comprensivo. Imagina que estás evaluando a alguien que canta de memoria con entusiasmo, no a un robot perfecto.Devuelve solo un número del 0 al 100 que represente qué tan bien logró transmitir la letra en general. No incluyas símbolos ni explicaciones. Ejemplo de respuesta: 86"
          },
          {
            role: "user",
            content: `Letra original:\n${originalLyrics}\n\nLetra cantada (transcripción):\n${transcription}\n\n¿En qué porcentaje se parecen? Solo devuelve el número sin símbolo, por ejemplo: 78`
          }
        ],
        temperature: 0
      });

      const porcentaje = Number(similarityResponse.choices[0].message.content.trim());

      res.status(200).json({
        message: "Comparación completada",
        porcentaje: Number(porcentaje),
        transcripcion: transcription
      });

      emitEvent("result-canto", { 
        porcentaje,
        esPerfecto: porcentaje >= 65,
      });

      if (porcentaje === 65) {
        await sendEmailWithTemplate(userEmail, userName, artist)
      }


    } catch (error) {
      console.error("Error al procesar el audio:", error?.response?.data || error);
      res.status(500).json({ error: "Error al procesar el audio." });
    }
  }
];


module.exports = {
  sendAudio
};