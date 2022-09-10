const express = require("express");
const path = require("path");

const app = express();
const port = 3000;


const mainRouter = require("./routes/main")


/* Recursos estaticos */
app.use(express.static(path.resolve(__dirname , "public")))


/* seteo motor de plantilla */
app.set("views" , path.resolve(__dirname , "views"))
app.set("view engine" , "ejs")



/* app.get("/" , (req,res) => res.sendFile(path.resolve(__dirname , "views","home.html"))) */
app.use("/" , mainRouter)



app.listen(port , () => console.log(`servidor corriendo en el puerto http://localhost:${port}`))