const assert = require('assert');
const app = require('../../src/app');

describe('\'personal\' service', () => {
  it('registered the service', () => {
    const service = app.service('personal');

    assert.ok(service, 'Registered the service (personal)');
  });
});
