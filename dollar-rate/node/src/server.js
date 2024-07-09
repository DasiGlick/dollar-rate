const express = require("express");
const cors = require("cors");
const { getById, getAll, getByAverage, getLast3, getLast, getAverageByMonth } = require("./serverMongo");
const { getDataFromApi } = require("./updateDB");
const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/get-all-rates", async (req, res) => {
    let response = await getAll();
    res.json(response);
});

app.get("/get-by-id/:id", async (req, res) => {
    const id = req.params.id;
    let response = await getById(id);
    res.json(response);
});

app.get("/get-by-average/:avg", async (req, res) => {
    const avg = req.params.avg;
    let response = await getByAverage(avg);
    res.json(response);
});

app.get("/get-average-by-month/:month", async (req, res) => {
    const month = req.params.month;
    let response = await getAverageByMonth(month);
    res.json(response);
})

app.get("/get-last", async (req, res)=> {
    let response = await getLast();
    res.json(response);
})

app.get("/get-last-3", async (req, res) => {
    let response = await getLast3();
    res.json(response);
});

app.get("/api", (req, res) => {
    let response = getDataFromApi();
    res.send(response);
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})
