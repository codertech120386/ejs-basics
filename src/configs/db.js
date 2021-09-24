const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://dhaval123:secret_123@cluster0.7ynmx.mongodb.net/web11?retryWrites=true&w=majority")
}

module.exports = connect