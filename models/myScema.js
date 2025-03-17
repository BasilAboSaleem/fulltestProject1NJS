const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artSchema = new Schema({
    username : String
})


const dataTestProject1 = mongoose.model("dataTestProject1", artSchema )

module.exports = dataTestProject1;