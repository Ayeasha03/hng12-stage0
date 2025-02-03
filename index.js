const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

app.get("/", (req, res) => {
    res.json({
        email: "oyinaishat3@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url:"https://github.com/Ayeasha03/hng12-stage0.git"
    });
});
app.use((req, res) => {
    res.status(404).json({ 
        error: "Page not found", 
        message: "The requested URL was not found on the server."
    });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);  
});
