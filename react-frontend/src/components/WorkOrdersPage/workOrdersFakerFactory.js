
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
requestid: faker.lorem.sentence(1),
assignedtouserid: faker.lorem.sentence(1),
startdate: faker.lorem.sentence(1),
enddate: faker.lorem.sentence(1),
status: faker.lorem.sentence(1),
notes: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
