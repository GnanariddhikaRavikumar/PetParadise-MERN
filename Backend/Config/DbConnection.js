const mongoose = require('mongoose');

const DBconnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB Connected");
    } catch (err) {
        console.log("DB Connection Failed:", err);
    }
}

module.exports= DBconnect;
