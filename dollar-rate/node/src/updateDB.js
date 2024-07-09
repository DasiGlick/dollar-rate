const nodeCron = require("node-cron");
const axios = require("axios");
const { insertNewMonth, getLast } = require("./serverMongo");
const { updateArrays } = require("../../react/src/components/partC");

const url_api = process.env.URL_API;

async function getDataFromApi() {
    const res = await axios.get(`${url_api}`);
    console.log(res);
    return res;
}

const job = nodeCron.schedule("0 0 0 1 * *", function updateDB() {
    try {
        let currentId = getLast().id + 1;
        let currentDate = new Date().toLocaleDateString();
        let currentAverage = getDataFromApi();
        insertNewMonth(currentId, currentDate, currentAverage);
        updateArrays();
    } catch (error) {
        console.error(error);
    }
    
});

job.start();

module.exports = {
    getDataFromApi,
}
