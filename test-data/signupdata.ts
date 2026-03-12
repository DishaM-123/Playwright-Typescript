import { faker } from '@faker-js/faker';

export const signupData = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 8 }) + '@1',
    company: faker.company.name(),
    address1: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode('######'),
    phone: faker.phone.number({ style: 'national' }),
    day: '21',
    month: '9',
    year: '1987' 

};