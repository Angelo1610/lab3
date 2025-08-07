const express = require('express');
const app = express();
const PORT = process.env.PORT;

//endopoin
app.get('/', (req, res) => {
  res.send('Integracion continua funcionando correctamente');
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en el puerto ${PORT}`);
});