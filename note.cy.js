const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
    env: {
      urlEvshop: process.env.URL_EVSHOP,
      UrlReqres: process.env.URL_REQRES,
      apiKey: process.env.API_KEY
    },
    
    // HAPUS SALAH SATU, lalu gabungkan jadi satu seperti ini:
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});