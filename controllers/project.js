const Project = require('../models/project.js');

exports.getProjects = (req, res, next) => {
  Project.find({}).then(projects => {
    res.send(projects);
  })
}

exports.getProject = (req, res, next) => {
  //console.log(req.params);
  let id = req.params['id'];
  Project.findById(id).then(project => {
    res.send(project);
  }).catch(error => {
    console.log('Error retrieving project.');
  })
  //Project.findById(req)
}

exports.createProject = (req, res, next) => {
  const project = new Project(req.body);
  project.save().then(result => {
    res.send(result);
  }).catch(error => {
    console.log(error);
  })
   //console.log(project);
  //res.send({message: 1})
}

exports.updateProject = (req, res, next) => {
  Project.findByIdAndUpdate({_id: req.body['_id']}, req.body).then(result => {
    res.send(result);
  }).catch(error => {
    console.log(error);
  })
}


exports.deleteProject = (req, res, next) => {
  let id = req.params['_id'];
  Project.findByIdAndRemove(id).then(result => {
    res.send(result);
  }).catch(error => {
    console.log(error);
  })
}
