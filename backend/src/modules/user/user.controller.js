
class UserController {

  constructor(userService) {
    this.userService = userService
  }

  async getUsers(req, res, next) {
    try {
      const users = await this.userService.findAllUser()
      return res.json(users)
    } catch (error) {
      res.json(400, { message: error.message })
      next()
    }
  }

  async getUserById(req, res, next) {
    try {
      const { id } = req.params;
      const users = await this.userService.findUserById(id);
      return res.json(users)
    } catch (error) {
      res.json(400, { message: error.message })
      next()
    }
  }


  async create(req, res, next) {
    try {
      const { name, email } = req.body
      const user = await this.userService.create({ name, email })
      res.json(201, user)
    } catch (error) {
      res.json(400, { message: error.message })
      next()
    }
  }


  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await this.userService.deleteUserById(id)
      res.json(204)
    } catch (error) {
      res.json(400, { message: error.message })
      next()
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { email, name } = req.body
      const user = await this.userService.update({ name, email, id })

      res.json(200, user)
    } catch (error) {
      console.log('error', error);
      res.json(400, { message: error.message })
      next()
    }

  }



}


module.exports = {
  UserController
}