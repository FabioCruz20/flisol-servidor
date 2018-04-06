const Project = require('../models/project.js');

exports.getProjects = (req, res, next) => {
  Project.find({}).then(projects => {
    res.json(projects);
  })
}
