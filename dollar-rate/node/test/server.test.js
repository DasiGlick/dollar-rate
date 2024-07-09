const request = require('supertest');
const server = require('./src/server');

describe('test the api requests', () => {
    let newItem;

    it('should get all data', async () => {
        const response = await request(server).get('/get-all-rates');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([newItem]);
    });

    it('should get row by id', async () => {
        const response = await request(server).get(`/get-by-id/${newItem.id}`);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(newItem);
    });

    it('should get row by average', async () => {
        const response = await request(server).get(`/get-by-average/${newItem.average}`);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(newItem);
    });

    it('should get row by month', async () => {
        const response = await request(server).get(`/get-by-month/${newItem.month}`);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(newItem);
    });

    it('should get last row', async () => {
        const response = await request(server).get('/get-last');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(newItem);
    });

    it('should get 3 last rows', async () => {
        const response = await request(server).get('/get-last-3');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([newItem]);
    });

    it('should get data from the api', async () => {
        const response = await request(server).get('/api');
        expect(response.status).toBe(200);
    });
})
