const { Personal } = require('./personal.class');
const createModel = require('../../models/personal.model');
const hooks = require('./personal.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"],
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use('/personal', new Personal(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('personal');

  service.hooks(hooks);
};