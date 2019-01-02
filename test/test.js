const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
const app = require('../app');

const {
    correct_details,
    correct_details2,
    empty_details,
    invalid_inputs,
    correct_optional_inputs

} = require('../test/meetuptestdata/create_meetup');

chai.use(chaiHttp);

describe('Meetups', () => {
 
    describe('POST /meetups', () => {
      it('it should return 400 if required fields are empty or missing', async () => {
        const res = await chai.request(app)
          .post('/api/v1/meetups')
          .send(empty_details);

        expect(res).to.have.status(400)
        expect(res.body).to.have.property('error');
      });
  
      it('it should return 400 if input fields contain invalid input data', async () => {
        const res = await chai.request(app)
          .post('/api/v1/meetups')
          .send(invalid_inputs);
  
        expect(res).to.have.status(400);
        expect(res.body).to.have.property('error');
      });
  
      it('should return 201 if meetup is created successfully', async () => {
        const res = await chai.request(app)
          .post('/api/v1/meetups')
          .send(correct_details);
  
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('data');
      });
  
      it('should create meetup with appropriate id', async () => {
        const res = await chai.request(app)
          .post('/api/v1/meetups')
          .send(correct_details2);
  
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('data');
      });
  
      it('should create meetup without optional fields', async () => {
        const res = await chai.request(app)
          .post('/api/v1/meetups')
          .send(correct_optional_inputs);
  
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('data');
      });
    });
    
  });