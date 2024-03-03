
const neo4j = require('neo4j-driver');


const driver = neo4j.driver('bolt://3.216.27.176:7687',
  neo4j.auth.basic('neo4j', 'master-vibrations-retrievals'),
  {/* encrypted: 'ENCRYPTION_OFF' */ });

driver.session({ database: "neo4j" });

// s.run(`
//   MATCH (u:User )
//   DETACH DELETE u
// `)

// session.run(query, params)
//   .then((result) => {
//     console.log('result', result);
//     result.records.forEach((record) => {
//         console.log(record.get('ip'));
//     });
//     session.close();
//     driver.close();
//   })
//   .catch((error) => {
//     console.error(error);
//   });



module.exports = {
  driver
}
