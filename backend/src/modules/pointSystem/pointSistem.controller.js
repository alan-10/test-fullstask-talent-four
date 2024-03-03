class PointSystemController {
  constructor(pointService) {
    this.pointService = pointService
  }

  async create(req, res, next) {

    try {
      const { registration } = req.body
      const pointcreated = await this.pointService.create(registration);

      res.json(201, pointcreated)
    } catch (error) {
      console.log('error', { message: error.message });
      res.status(400, error)
      next()
    }
  }


  async allPoints(req, res, next) {
    try {
      const points = await this.pointService.list()
      res.json(points)
    } catch (error) {
      console.log('error', error);
      res.status(400, { message: error.message })
      next()
    }

  }


  async finishPoint(req, res, next) {
    const {
      registration
    } = req.body

    try {
      await this.pointService.finishPoint(registration);
      res.json(200,)

    } catch (error) {
      console.log('error', error);
      res.status(400, { message: error.message })
      next()
    }



  }

}


module.exports = {
  PointSystemController
}