
const neo4j = require('neo4j-driver');

const URI = 'neo4j+s://bd623dae.databases.neo4j.io'
const USER = 'neo4j'
const PASSWORD = 'pLFBxUg-32G75LMeqptlPmMU1BWtmGPrr4_SLm2FCgs'


const driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD));
  


const session  = driver.session();

//clear data base
// session.run(`
//   MATCH (u:User )
//   DETACH DELETE u
// `)

module.exports = {
  driver
}
