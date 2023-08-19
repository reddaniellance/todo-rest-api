const express = require("express");
const config = require('./config');
const app = express();
const todoRouter = require("./routes/todo");

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.get("/", (req, res) => {
    res.send('Todo REST API');
});

app.use("/todo-items", todoRouter);
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});

app.listen(config.port, () => {
    console.log(`Application now running on http://localhost:${config.port}`);
});