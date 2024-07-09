const sinon = require('sinon');
const serverMongo = require('../src/serverMongo');

const sandbox = sinon.createSandbox();
const stubFind = sandbox.stub();
const stubFindOneId = sandbox.stub();
const stubFindOneAverage = sandbox.stub();
const stubFindOneMonth = sandbox.stub();
const stubFindLast3 = sandbox.stub();
const stubFindOneLast = sandbox.stub();
const stubInsertOne = sandbox.stub();
const stubMongo = {
    find: stubFind,
    findOneId: stubFindOneId,
    findOneAverage: stubFindOneAverage,
    findOneMonth: stubFindOneMonth,
    findLast3: stubFindLast3,
    findOneLast: stubFindOneLast,
    insertOne: stubInsertOne
}

let method

function definedMethod(currentMethod) {
    method = currentMethod
}

describe("test the function of mongodb", () => {

    beforeEach(() => {
        
        sandbox.reset();
    })

    it("test get all data", () => {
        definedMethod(serverMongo.getAll());
        stubFind.resolves("return all data");
        const testCase = new TestCase(stubMongo);
        testCase(method);
    })

    it("test get data by id", () => {
        definedMethod(serverMongo.getById());
        stubFind.resolves("return data by id");
        const testCase = new TestCase(stubMongo);
        testCase(method);
    })

    it("test get data by average", () => {
        definedMethod(serverMongo.getByAverage());
        stubFind.resolves("return data by average");
        const testCase = new TestCase(stubMongo);
        testCase(method);
    })

    it("test get data by month", () => {
        definedMethod(serverMongo.getAverageByMonth());
        stubFind.resolves("return data by month");
        const testCase = new TestCase(stubMongo);
        testCase(method);
    })

    it("test get last 3 rows", () => {
        definedMethod(serverMongo.getLast3());
        stubFind.resolves("return last 3 rows of data");
        const testCase = new TestCase(stubMongo);
        testCase(method);
    })

    it("test get last row", () => {
        definedMethod(serverMongo.getLast());
        stubFind.resolves("return last row of data");
        const testCase = new TestCase(stubMongo);
        testCase(method);
    })

    it("test insert new one row", () => {
        definedMethod(serverMongo.insertNewMonth());
        stubFind.resolves("insert new one row of the current month");
        const testCase = new TestCase(stubMongo);
        testCase(method);
    })
})
