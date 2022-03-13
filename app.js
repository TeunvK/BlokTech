const express = require("express");

const matchRouter = require("./routes/match");
const {
	engine
} = require("express-handlebars");
const PORT = process.env.PORT || 3000;
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();

connectDB();

app.engine("handlebars", engine({
	defaultLayout: "main",
	layoutsDir: __dirname + "/views/layouts",
	partialsDir: __dirname + "/views/partials"
}));
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use("/match", matchRouter);


app.use(express.static(__dirname + "/static"));

app.get("/", (req, res) => {
	res.render("login");
});



app.get("/about", (req, res) => {
	res.render("about", {
		person: {
			firstname: "Hans",
			lastname: "Anders",
		}
	});
});

app.get("*", (req, res) => {
	res.send("Error 404");
});

app.listen(PORT, () => {
	console.log(`App listening on localhost:${PORT}`);
});