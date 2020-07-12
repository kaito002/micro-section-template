const path = require("path");
const express = require("express");
const cors = require("cors");
const { PORT } = require("./config/Environment");
const app = express();

app.use(cors());

app.use(express.static(path.resolve(__dirname, "..", "dist/")))

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "dist/index.html"));
});

app.get("/micro-section", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "dist/main.bundle.js"));
})

const onServerStarted = () => {
    console.log(`Server is running on port ::${PORT}`);
}

app.listen(PORT, onServerStarted);