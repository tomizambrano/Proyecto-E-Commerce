document.getElementById("btn").addEventListener("click", () => {

  var username = document.getElementById("emailinput").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "") {
      alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
  } else {
      localStorage.setItem("logeado", true);
      location.replace("index.html");
  }
});