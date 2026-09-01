const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
    env: {
      urlEvshop: process.env.URL_EVSHOP,
      UrlReqres: process.env.URL_REQRES, // diambil dari .env
      apiKey: process.env.API_KEY // diambil dari .env
    },
    
    // HANYA ADA SATU FUNGSI INI SEKARANG
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});