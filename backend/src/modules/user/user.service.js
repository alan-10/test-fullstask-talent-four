const { driver } = require('../../conection');
const { v4: uuidv4 } = require('uuid');


class UserService {

  constructor() {

  }

  async create({ name, email }) {
    const session = driver.session({ database: "neo4j" });

    const userAlreadExists = await this.findByEmail(email);

    if (userAlreadExists) {
      throw new Error('User alread Exists')
    }

    const result = await session.run(`
            CREATE(u:User 
              {
                id: '${uuidv4()}',
                name: '${name}',
                email: '${email}',
                registration: '${uuidv4()}'
              }) return u limit 1
            `);

    await session.close()

    const userCreated = result.records.length > 0 && result.records[0]._fields[0].properties
    return userCreated;
  }


  async findByEmail(email) {
    const session = driver.session({ database: "neo4j" });
    const result = await session.run(`MATCH(u:User) WHERE u.email = '${email}' return u limit 1`);
    const user = result && result.records.length > 0 && result.records[0]._fields;

    await session.close()
    return user;
  }

  async findAllUser() {
    const session = driver.session({ database: "neo4j" });
    const result = await session.run(`MATCH (u:User)  return u`)

    const users = result.records.map(fild => fild._fields[0].properties);

    await session.close()
    return users;
  }


  async findUserById(id) {
    const session = driver.session({ database: "neo4j" });

    const result = await session.run(`MATCH (u:User {id: '${id}'})  return  u  `)

    const user = result && result.records.length > 0 && result.records[0]._fields[0].properties;

    await session.close()

    return user;
  }


  async deleteUserById(id) {
    const session = driver.session({ database: "neo4j" });
    await session.run(`MATCH (u:User {id: '${id}'})  DELETE u`);

    await session.close()
    return true
  }

  async findUserByRegistration(registration) {
    const session = driver.session({ database: "neo4j" });
    
    const result = await session.run(`MATCH (u:User {registration: '${registration.trim()}'})  return  u  `);

    const user = result && result.records.length > 0 && result.records[0]._fields[0].properties;
    await session.close()
    return user;
  }

  async update({ name, email, id }) {
   
    const session = driver.session({ database: "neo4j" });

    const result = await session.run(`MATCH (u:User {id: '${id}'} )
    SET u.name = '${name}'
    SET u.email = '${email}'
     RETURN u`)

    const userUpdated = result && result.records.length > 0 && result.records[0]._fields[0].properties;

    await session.close()

    return userUpdated;
  }



}

module.exports = {
  UserService
}




