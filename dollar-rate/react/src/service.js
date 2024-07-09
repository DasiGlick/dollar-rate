import axios from 'axios';

const base_url = process.env.BASE_URL;

async function getAllData() {
    const rows = await axios.get(`${base_url}/gat-all-rates`);
    return rows;
}

async function getByAverage(avg) {
    const res = await axios.get(`${base_url}/get-by-average/${avg}`);
    return res;
}

async function getAverageByMonth(month) {
    const res = await axios.get(`${base_url}/get-average-by-month/${month}`);
    return res;
}

async function getLast() {
    const last = await axios.get(`${base_url}/get-last`);
    return last;
}

async function getLast3() {
    const last3 = await axios.get(`${base_url}/get-last-3`);
    return last3;
}

export {
    getAllData, 
    getByAverage,
    getAverageByMonth,
    getLast,
    getLast3,
}
