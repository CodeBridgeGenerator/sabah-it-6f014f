
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
name: faker.lorem.sentence(1),
employeeid: faker.lorem.sentence(1),
dob: faker.lorem.sentence(1),
gender: faker.lorem.sentence(1),
phone: faker.lorem.sentence(1),
email: faker.internet.email(),
address: faker.lorem.sentence(1),
employment: faker.lorem.sentence(1),
hire: faker.lorem.sentence(1),
terminationdate: faker.lorem.sentence(1),
title: faker.lorem.sentence(1),
department: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
