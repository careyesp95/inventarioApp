const server = require('./src/app.js');
const { conn, Process } = require('./src/db.js');

// Syncing all the models at once.
let status = ['Entrada','Salida','Defectuoso','Optimo']

conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    status.forEach(async (i) => {
      await Process.findOrCreate({where:{name:i}})
    })
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});

// En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular acá


