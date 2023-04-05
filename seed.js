require('dotenv').config();
require('./config/database');

// Add the models to seed
const Resort = require('./models/resort');

(
  async function () {
    // Delete the existing documents
    await Resort.deleteMany({});
    const resorts = await Resort.create([
      {
        name: 'Sick Pow City',
        city: 'Seattle',
        state: 'WA',
        conditions: 'Rain',
        temperature: 33,
        snowDepth: 105,
      }
    ]);

    console.log(resorts);
    process.exit();
  }
)();