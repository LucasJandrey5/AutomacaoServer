const express = require("express");
const app = express();
const port = 8000;

const URL = "http://192.168.1.115";

app.get("/test", async (req, res) => {
  try {
    const result = await fetch(URL + "/online");

    console.log(result);
  } catch (e) {
    console.log(e);
  }

  return res.json({
    error: false,
    message: "OK",
  });
});

app.get("/StatusLed", async (req, res) => {
  const response = await fetch(URL + "/Status");
  const status = await response.json();

  console.log(status);

  return res.json({
    error: false,
    messagem: "OK",
  });
});

app.get("/SwitchLed", async (req, res) => {
  const response = await fetch(URL + "/Status");
  const status = await response.json();

  console.log(status);

  if (
    status.status == "off"
      ? await fetch(URL + "/Ligar")
      : await fetch(URL + "/Desligar")
  )
    return res.json({
      error: false,
      messagem: "OK",
    });
});

app.listen(port, () => {
  console.log("Servidor iniciado com sucesso!");
});
