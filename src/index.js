require("dotenv").config();
const express = require("express");
const bot = require('./bottelegtam.js')
const cron = require("node-cron");
const axios = require("axios");
const app = express();
app.use(express.json());

app.get("/bot", async (req, res) => {
  return res.status(200).json({ mensagem: "servidor on papai" });
});

// cron.schedule("*/5 * * * *", () => {
//   axios
//     .get("/bot")
//     .then((response) => {
//       console.log("Solicitação de manutenção enviada com sucesso");
//     })
//     .catch((error) => {
//       console.error(
//         "Erro ao enviar a solicitação de manutenção:",
//         error.message
//       );
//     });
// });

bot()

app.listen(process.env.PORT, () => {
  console.log("Servidor rodando");
});



