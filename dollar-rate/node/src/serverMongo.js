var { MongoClient } = require('mongodb')
const url = process.env.URL;
const db = process.env.DB;
const collection = process.env.COLLECTION;

async function getAll() {
    try {
        const client = await new MongoClient(url);
        const res = await client.db(`${db}`).collection(`${collection}`).find({}).toArray();
        return res;
    } catch (error) {
        console.log(error.message);
    }
}

async function getById(id) {
    try {
        const client = await new MongoClient(url);
        const res = await client.db(`${db}`).collection(`${collection}`).findOne({id: parseInt(id)});
        console.log(res);
        return res;
    } catch (error) {
        console.log(error.message);
    }
}

async function getByAverage(avg) {
    try {
        const client = await new MongoClient(url);
        const res = await client.db(`${db}`).collection(`${collection}`).findOne({average: parseFloat(avg)});
        return res;
    } catch (error) {
        console.log(error.message);
    }
}

async function getAverageByMonth(month) {
    try {
        const client = await new MongoClient(url);
        const res = await client.db(`${db}`).collection(`${collection}`).findOne({month: month});
        return res.average;
    } catch (error) {
        console.log(error.message);
    }
}

async function getLast() {
    try {
        const client = await new MongoClient(url);
        const res = await client.db(`${db}`).collection(`${collection}`).findOne().sort({id: -1});
        return res
    } catch (error) {
        console.log(error.message);
    }
}

async function getLast3() {
    try {
        const client = await new MongoClient(url);
        const res = await client.db(`${db}`).collection(`${collection}`).find({}).sort({id: -1}).limit(3, function (e, d) {});
        return res
    } catch (error) {
        console.log(error.message);
    }
}

async function insertNewMonth(currentId, currentMonth, currentAverage) {
    try {
        const client = await new MongoClient(url);
        const res = await client.db(`${db}`).collection(`${collection}`).insert({id: currentId, month: currentMonth, average: currentAverage});
        return res;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports={
    getById,
    getAll, 
    getByAverage,
    getAverageByMonth,
    getLast3,
    getLast,
    insertNewMonth,
}
