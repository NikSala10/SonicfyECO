import { makeRequest2 } from "../app.js";

export default function renderScreen1() {
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
    </div>
      `;

  const nameInput = document.getElementById("name")
  const emailInput = document.getElementById("email")
  const btnRegister = document.getElementById("register").addEventListener("click", registerUser);

  async function registerUser() {
    const messageBox = document.getElementById("messageBox");
    messageBox.textContent = "";

    try {

    const body = {
      name: nameInput.value,
      email: emailInput.value,
    };

    const response = await makeRequest2("/register", "POST", body);

    if (response.success) {
      messageBox.style.color = "green";
      messageBox.textContent = "¡Registro exitoso!";
    } else {
      messageBox.style.color = "red";
      messageBox.textContent = "Error: " + (response.message || "Intenta de nuevo.");
    }

    console.log("response", response);
  } catch (error) {
    console.error("Error en el registro:", error);
    messageBox.style.color = "red";
    messageBox.textContent = "Ocurrió un error al registrarse.";
  }
  }
}
