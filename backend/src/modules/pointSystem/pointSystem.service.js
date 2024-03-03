const { closeConexction, driver } = require('../../conection');
const { UserService } = require('../user/user.service');
const { v4: uuidv4 } = require('uuid');
const {
  dateFormated,
  dateWithoutHours
} = require('../../share/utils')


class PointSystemService {

  constructor() {
    this.userService = new UserService()
  }

  async create(registration) {
    const session = driver.session({ database: "neo4j" });
    const user = await this.userService.findUserByRegistration(registration)

    if (!user) {
      throw new Error('user do not exists');
    }

    const [
      pointAlreadCreated,
      pointCreatedWithoutFinish
    ] = await Promise.all([
      this.getPointUserDayle(user.id),
      this.getPointCreatedWithoutFinished(user.id)
    ])


    const shouldUpdatePoint = (pointAlreadCreated && pointCreatedWithoutFinish)
    const poiAlreadCreatedToThisUser = (pointAlreadCreated && !pointCreatedWithoutFinish)

    if (shouldUpdatePoint) {
      return await this.finishPoint(registration)
    }

    if (poiAlreadCreatedToThisUser) {
      throw new Error('point dayle alread created to this User')
    }

    const result = await session.run(`
    CREATE(p:Point 
      {
        id: '${uuidv4()}',
        userId: '${user.id}',
        date: '${dateWithoutHours()}',
        dateEntry: '${dateFormated()}', 
        dateExit: 'NULL'
      })
    return p limit 1`);

    const pointCreate = result.records[0]._fields[0].properties;

    await session.run(`
      MATCH (u:User {id: '${user.id}'}), 
      (p:Point {id: '${pointCreate.id}'})
      CREATE (u)-[:BOUGHT]->(p);
    `);

    await session.close()

    return pointCreate;
  }


  async getPointUserDayle(userId) {
    const session = driver.session({ database: "neo4j" });
    const result = await session.run(`
      MATCH (u:User {id: '${userId}'} )-[:BOUGHT]->(p:Point {date: '${dateWithoutHours()}'} )
      RETURN u, p;
    `);

    const points = result && result.records.length > 0 ? result.records.map(fild => fild._fields) : null;

    await session.close()

    return points;
  }


  async getPointCreatedWithoutFinished(userId) {
    const session = driver.session({ database: "neo4j" });
    const result = await session.run(`
      MATCH (u:User)-[:BOUGHT]->(p:Point )
      WHERE u.id = $userId AND p.date = $date and p.dateExit = $exit
      RETURN u, p;
    `, {
      userId: userId,
      date: dateWithoutHours(),
      exit: 'NULL'
    });

    const points = result && result.records.length > 0 ? result.records.map(fild => fild._fields) : null;

    await session.close()

    return points;
  }


  async getPointByDay() {
    const session = driver.session({ database: "neo4j" });
    const result = await session.run(`
      MATCH (p:Point {date: '${dateWithoutHours}', } ) return p
    `);

    const points = result.records.map(fild => fild._fields[0].properties);
    await session.close()
    return points;

  }


  async finishPoint(registration) {
    const session = driver.session({ database: "neo4j" });
    const user = await this.userService.findUserByRegistration(registration);

    if (!user) {
      throw new Error('user doesnt exiss')
    }

    const result = await session.run(`
      MATCH (u:User )-[:BOUGHT]->(p:Point )
      WHERE u.id = '${user.id}' AND p.date = '${dateWithoutHours()}'
      SET p.dateExit = '${dateFormated()}'
      RETURN u, p;
    `);

    const point = result && result.records.length > 0 ? result.records.map(fild => fild._fields) : null;

    await session.close()

    return point;

  }

  async list() {
    const session = driver.session({ database: "neo4j" });

    const result = await session.run(`
      MATCH (u:User )-[:BOUGHT]->(p:Point  )
      RETURN u.name, u.id, u.email,
      p.id, p.date, p.dateEntry, p.dateExit `);

    const allRecordesPointWithUser = result.records.map(value => value._fields)

    const pointAndUser = allRecordesPointWithUser.map(value => {

      const [userName, userId, userEmail, pointId, pointDate, pointEntry, pointExit] = value;

      return {
        userName: userName,
        userId: userId,
        userEmail: userEmail,
        pointId: pointId,
        pointDate: pointDate,
        pointEntry: pointEntry,
        pointExit: pointExit
      }
    });

    return pointAndUser
  }



}

module.exports = {
  PointSystemService
} 