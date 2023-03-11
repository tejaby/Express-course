const express = require("express");
const morgan = require("morgan");
const path = require("path");
const connectDB = require("./db");
require("ejs");

connectDB();

const app = express();

const homeRoutes = require("./routes/home");
const userRoutes = require("./routes/users");
const postsRoutes = require("./routes/posts");

app.use(morgan("dev"));

app.set("appName", "Express Course");
app.set("port", 3000);
// se agrega el motor de plantilla
app.set("view engine", "ejs");
// se estable los views
app.set("views", path.join(__dirname, "views"));
// para importar se utiliza <%- include("")%>

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// app.get("/", (req, res) => {
//   res.sendFile("./public/index.html", {
//     root: __dirname,
//   });
// });

// Routing: distintas rutas

// app.get("/about", (req, res) => {
//   res.send("acerca de");
// });

// app.get("/contact", (req, res) => {
//   res.send("contactar");
// });

// app.use((req, res) => {
//     res.status(404).send("not found")
// })

// Method http

// app.get("/product", (req, res) => {
//   res.send("obteniendo producto");
// });

// app.post("/product", (req, res) => {
//   res.send("creando producto");
// });

// app.put("/product", (req, res) => {
//   res.send("actualizando producto");
// });

// app.delete("/product", (req, res) => {
//   res.send("eliminando producto");
// });

// app.patch("/product", (req, res) => {
//   res.send("actualizando parte de producto");
// });

// Responde http

// app.get("/", (req, res) => {
//   res.send("welcome");
// });

// app.get("/archivo", (req, res) => {
//   res.sendFile("./src/img.jpg", {
//     root: __dirname,
//   });
// });

// app.get("/user", (req, res) => {
//   res.json({
//     id: 1,
//     user: "yostin",
//   });
// });

// // enviar codigo de estado
// app.get("/isAlive", (req, res) => {
//   res.sendStatus(204);
// });

// Request body
// metodos para que express pueda procesar la info que le envia el cliente

// app.use(express.text());
// app.use(express.json());
// // entida los datos que vengan de un form
// app.use(express.urlencoded({extended: false}))

// app.post("/user", (req, res) => {
//   console.log(req.body);
//   res.send("creando nuevo usuario");
// });

// Request Params
// : se agrega una nombre de parametro
// los parametros se reciben en formato string

// app.get("/user/:username", (req, res) => {
//   res.send(`hello ${req.params.username}`);
// });

// // cambiar tipo de dato a int

// app.get("/add/:x/:y", (req, res) => {
//   const result = parseInt(req.params.x) + parseInt(req.params.y);
//   res.send(`La suma es: ${result}`);

//   // otra forma seria usando la destructuracion de js ya que es un objeto.
//   const { x, y } = req.params;
//   res.send(`La sumama es ${parseInt(x) + parseInt(y)}`);
// });

// app.get("/username/:user/photo", (req, res) => {
//   if (req.params.user === "teja") {
//     return res.sendFile("./src/img.jpg", {
//       root: __dirname,
//     });
//   }
//   res.send("usario no permitido");
// });

// // los parametro pueden ir no necesariamente uno despues del otro.
// app.get("/user/:user/state/:state", (req, res) => {
//   res.send(`El usuario ${req.params.user} se encuentra ${req.params.state}`);
// });

// Queries

// ? significa un query o consulta para agregar inf extra para hacer una operacion adicional.
// para agregar varias queries se agre un &
// este recibe un objeto.
// url no puede llevar espacios % este significa un espacio

// app.get("/search", (req, res) => {
//   if (req.query.q === "js books") {
//     res.send("libros de javascript")
//   } else{
//     res.send("libros normales")
//   }
//   console.log(req.query.q)
// })

// Middlware,
// funcion que se ejecuta antes de ir a la ruta
// se utiliza use ya que funciona para todas la rutas
// se tiene que agrear la funcion next para que continue cuando haya finalizado a la ruta deseada

// app.use((req, res, next) => {
//   console.log("paso por el middlewere");
//   console.log(`route: ${req.url} method: ${req.method}`);
//   next();
// });

// app.get("/profile", (req, res) => {
//   res.send("profile page");
// });

//Middlewares
// el orden de los middlewares importan ya que unas interfieren con el flujo.

// app.use((req, res, siguiente) => {
//   console.log(`route: ${req.url}, method: ${req.method}`);
//   siguiente();
// });

// app.get("/", (req, res) => {
//   res.send("home page");
// });

// app.use((req, res, next) => {
//   if (req.query.email === "yostinteja@gmail.com") {
//     next();
//   } else {
//     res.send("no autorizado");
//   }
// });

// app.get("/dashboard", (req, res) => {
//   res.send("dashboard page");
// });

// Express Settings

// settings
// app.set("appName", "Express Course");
// app.set("port", 3000);
// app.set("case sensitive routing", true);

// // middlewares
// app.use(express.json());

// // routes
// app.get("/", (req, res) => {
//   res.send("welcome");
// });

// app.get("/about", (req, res) => {
//   res.send("welcome");
// });

// Static Files

// app.get("/archivo.txt", (req, res) => {
//   res.send("este no es un archivo de la carpte public");
// });

// app.get("/", (req, res) => {
//   res.send("home");
// });

// app.get("/about", (req, res) => {
//   res.send("about");
// });

// console.log(__dirname);

// // normalmente se agrega al final. primero se procesan rutas y luego la carpeta public
// // app.use(express.static("./public"));
// // se puede agrear un prefijo a la carpeta public

// app.use("/public", express.static(path.join(__dirname, "public")));
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Express Router

// usando modulo Router
// app.use(homeRoutes);
// // con funciones pasando app como parametro
// userRoutes(app);

// Templetes Engine

app.use(homeRoutes);
userRoutes(app);
app.use(postsRoutes);

app.listen(3000);
console.log(`server ${app.get("appName")} on port ${app.get("port")}`);
