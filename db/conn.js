const mongoose = require("mongoose");

mongoose.connect( "mongodb+srv://mohit:mohit@cluster0.ecexu5b.mongodb.net/mohit ").then(() => {
    console.log(`connection successful`);
}).catch((e) =>{
    console.log(e);

})
