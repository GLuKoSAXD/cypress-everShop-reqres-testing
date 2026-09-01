**Cypress Test & Allure Report** 🤖🗃️
Dokumen ini menjelaskan cara menjalankan Cypress test dengan Allure, generate hasil Allure Report, dan membuka report melalui web browser.

1. Menjalankan Cypress Test dengan Allure
Gunakan salah satu command berikut untuk menjalankan test dengan integrasi Allure.

**Menjalankan Cypress dalam Interactive Mode**
npx cypress open --env allure=true
Command ini akan membuka Cypress Test Runner, sehingga test dapat dipilih dan dijalankan secara manual.

**Menjalankan Cypress dalam Headless Mode**
Untuk menjalankan test tertentu:
npx cypress run --spec "cypress/e2e/TC01/everShop.cy.js" --env allure=true

Untuk **menjalankan beberapa test atau seluruh test dalam directory tertentu:**
npx cypress run --spec "cypress/e2e/**" --env allure=true
Ganti **cypress/e2e/**** dengan path atau pattern directory/script yang ingin dijalankan.

Parameter:
--spec digunakan untuk menentukan test script yang ingin dijalankan.
--env allure=true mengaktifkan pembuatan Allure test results.

2. Generate Allure Report
Setelah Cypress test selesai dijalankan, hasil test akan tersimpan di directory:
allure-results

**Generate report** menggunakan command berikut:
npx allure-commandline generate allure-results --clean -o allure-report

Penjelasan:
allure-results → directory yang berisi hasil test dari Cypress.
--clean → menghapus report sebelumnya sebelum membuat report baru.
-o allure-report → menentukan directory output untuk hasil report.

Setelah proses selesai, report akan tersedia di:

allure-report

3. Membuka Allure Report
Untuk **membuka report di web browser**, jalankan:
npx allure-commandline open allure-report
Command tersebut akan menjalankan local web server dan membuka Allure Report di browser.

**Quick Start** 🚀🚀🚀
Jika ingin menjalankan test, generate report, dan membukanya secara berurutan:

# 1. Run Cypress test
npx cypress run --spec "cypress/e2e/**" --env allure=true

# 2. Generate Allure report
npx allure-commandline generate allure-results --clean -o allure-report

# 3. Open Allure report
npx allure-commandline open allure-report

Flow
Cypress Test
     │
     ▼
allure-results
     │
     ▼
Generate Allure Report
     │
     ▼
allure-report
     │
     ▼
Open Allure Report
