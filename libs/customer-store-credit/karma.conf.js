baseConfiguration = require('../../tools/karma/karma.conf');

module.exports = function (config) {
  baseConfiguration(config);
  config.set({
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../../coverage/libs/customer-store-credit'),
    },
    restartOnFileChange: true
  });
};
