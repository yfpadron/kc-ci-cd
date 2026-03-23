const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// FIX 1: Seguridad. Oculta la cabecera 'X-Powered-By' para pasar el Security Hotspot
app.disable('x-powered-by');

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hola, Bootcamp! CI/CD funcionando.' });
});

// FIX 2: Cobertura. Le decimos al reporte que ignore el arranque del servidor, 
// ya que esto no se ejecuta durante los tests unitarios.
/* istanbul ignore next */
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;