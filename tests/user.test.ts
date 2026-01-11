// import  request from 'supertest'
// import app from "../src/app"

// Connect to the MongoDB database before all tests
beforeAll(async () => {
});

// Clean up the database and close the connection after all tests
afterAll(async () => {
});

const add = (a: number,b: number) => {
    return a+b;
}

describe('User API', () => {

    
it("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});
//   it('should create a user', async () => {
//     const response = await request(app).post('/users').send({
//       name: 'John Doe',
//       email: 'john@example.com',
//     });
//     expect(response.status).toBe(201);
//     expect(response.body.name).toBe('John Doe');
//     expect(response.body.email).toBe('john@example.com');
//   });

})
