const Resort = require('../../models/resort');

module.exports = {
  index
}

async function index(req, res) {
  // find all resort documents
  // TODO: find the doc title that = the searched resort
  const resorts = Resort.find({}).exec();
  console.log(resorts);
  res.json(resorts)
}