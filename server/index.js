const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 8080;

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