
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
itemid: faker.lorem.sentence(1),
itemname: faker.lorem.sentence(1),
category: faker.lorem.sentence(1),
unitofmeasure: faker.lorem.sentence(1),
quantityonhand: faker.lorem.sentence(1),
minimumstocklevel: faker.lorem.sentence(1),
maximumstocklevel: faker.lorem.sentence(1),
reorderpoint: faker.lorem.sentence(1),
supplier: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
