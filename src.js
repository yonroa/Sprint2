const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/emission-measurement/ranges_parameters', (req, res) => {
    res.json([...ranges_parameters]);
});

app.post('/api/emission-measurement/ranges_parameters', (req, res) => {
    const nuevoRango = req.body;
    ranges_parameters.push(nuevoRango)
    res.json(ranges_parameters);
});

app.get('/api/emission-measurement/limits', (req, res) => {
    res.json({limits});
});


module.exports = app;
// app.listen(3000, () => {console.log("Funcionando...")});