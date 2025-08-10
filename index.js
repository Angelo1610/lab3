const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.send('Servidor activo: prueba de CI exitosa ');
});

app.get('/status', (_req, res) => {
  res.json({ status: 'ok', message: 'Servidor en funcionamiento' });
});


app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en el puerto ${PORT}`);
});
