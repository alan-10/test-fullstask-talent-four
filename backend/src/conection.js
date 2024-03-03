
const neo4j = require('neo4j-driver');


const driver = neo4j.driver('bolt://3.216.27.176:7687',
  neo4j.auth.basic('neo4j', 'master-vibrations-retrievals'),
  {/* encrypted: 'ENCRYPTION_OFF' */ });

const session  = driver.session({ database: "neo4j" });

//clear data base
// session.run(`
//   MATCH (u:User )
//   DETACH DELETE u
// `)

module.exports = {
  driver
}
