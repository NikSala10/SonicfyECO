import { makeRequest2, navigateToTelefono } from "../app.js";


export default function renderScreenRegister() {
  const app = document.getElementById("app");
  app.innerHTML = `
      <div id="screen1">
        <img src="https://firebasestorage.googleapis.com/v0/b/algoritmosdatos2024-02.appspot.com/o/imagesPosts%2Flogo%20blanco.svg?alt=media&token=9ec390e9-766d-481f-85ee-2ed30a0e648f" alt="">
        <h1>Register</h1>
        <p>Fill in your details to continue. If you win, you'll receive your ticket in your registered email.</p>
        <input type="text" id="name" placeholder="Name" required>
        <input type="text" id="email" placeholder="Email" required>
        <button id="register">Create Account</button>
        <p>By continuing, you agree to the use of your data to enhance your experience on Sonicfy.</p>
        <div id="messageBox" style="margin-top: 10px; color: green;"></div>

      `;

  const nameInput = document.getElementById("name")
  const emailInput = document.getElementById("email")
  
  
  const btnRegister = document.getElementById("register").addEventListener("click", registerUser);

  function showModal(message, shouldRedirect = false, redirectPath = "/screen2", redirectData = {}) {
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100vw";
    modal.style.height = "100vh";
    modal.style.background = "rgba(0, 0, 0, 0.6)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.zIndex = "9999";
  
    // Contenido interno (solo <p> y botón)
    modal.innerHTML = `
      <div style="
        background: white;
        padding: 20px;
        border-radius: 12px;
        max-width: 90%;
        text-align: center;
      ">
        <p style="margin-bottom: 20px;">${message}</p>
        <button id="modal-ok-btn" style="
          padding: 10px 20px;
          background: #000;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 16px;
        ">OK</button>
      </div>
    `;
  
    document.body.appendChild(modal);
  
    // Evento para cerrar
    document.getElementById("modal-ok-btn").onclick = () => {
      modal.remove();
      if (shouldRedirect) {
        navigateToTelefono(redirectPath, redirectData);
      }
    };
  }

  async function registerUser() {
    const messageBox = document.getElementById("messageBox");
    messageBox.textContent = "";

    if (!nameInput.value || !emailInput.value) {
      messageBox.style.color = "red";
      messageBox.textContent = "Please fill in all fields.";
      return;
    }

    try {

    const body = {
      name: nameInput.value,
      email: emailInput.value,
    };

    const response = await makeRequest2("/register", "POST", body);

    if (response.success) {
      showModal(`Your registration has been successful.<br>Welcome ${nameInput.value}!`, true, "/screenStart",);
    } else {
      showModal("Your registration has been rejected, someone else is already participating, please try again in a few more minutes.");
    }

    console.log("response", response);
  } catch (error) {
    console.error("Error en el registro:", error);
    messageBox.style.color = "red";
    messageBox.textContent = "Ocurrió un error al registrarse.";
  }
  }
}
