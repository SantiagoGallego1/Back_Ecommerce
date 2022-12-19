const mongoose = require("mongoose");

const conectarDB = async () => {
    try{
        const connection = await mongoose.connect(
            "mongodb+srv://rexternal:fredyfred000@cluster0.stnkvmq.mongodb.net/ecommerce",{
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            const url = `${connection.connection.host}:${connection.connection.port}`;
            console.log(`MongoDB conectado en :${url}`);
    }catch(error){
        console.log(`error:${error.message}`);
        process.exit(1);
    }
};
module.exports = conectarDB;