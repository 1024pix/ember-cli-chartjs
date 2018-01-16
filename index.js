'use strict';

module.exports = {
  name: 'ember-cli-chartjs',

  included: function included(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/chartjs/dist/Chart.js');
  }
};
