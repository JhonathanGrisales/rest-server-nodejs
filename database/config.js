const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
 
    });

    console.log('Conectado a base de datos correctamente');

  } catch (error) {
    console.log(error)
    throw new Error("Error al concetar la DB");
  }
};

module.exports = {
  dbConnection,
};
