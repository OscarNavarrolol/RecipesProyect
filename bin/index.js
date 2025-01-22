const app = require('../app');

app.set("port", process.env.PORT || 8000);

// Iniciar el servidor
app.listen(app.get('port'), () => {
    console.log(`Server running on localhost:${app.get('port')}`);
});