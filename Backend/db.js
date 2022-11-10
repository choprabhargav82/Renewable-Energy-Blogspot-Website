const mongoose = require('mongoose')
const db = "mongodb+srv://aryan:aryan@cluster0.2pv1xml.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connection Successful");
}).catch((err) => {
    console.log(err);
    console.log("No connection");
})