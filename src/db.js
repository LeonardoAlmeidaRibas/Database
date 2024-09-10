const mongoose = require("mongoose")

const mongoDB = "localhost:27017"

async function main() {
    await mongoose.connect(mongoDB)
}

main()
    .then(() => console.log("Conectado"))
    .catch(err => console.log(err))

module.exports = mongoose;
