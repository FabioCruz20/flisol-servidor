const mongoose = require('mongoose');


const ClientSchema = new mongoose.Schema({
  name: String,
  phone: String,
  observation: String,
  address: String
});

const CourseSchema = new mongoose.Schema({
  nome: String,
  dataConclusao: Date,
  duracao: Number
});

const EmployeeSchema = new mongoose.Schema({
  name: String
  //courses: [CourseSchema]
});

const ProjectSchema = new mongoose.Schema({
  description: String,
  startDate: Date,
  endDate: Date,
  budget: {
    type: Number,
    min: 0
  },
  client: ClientSchema,
  employees: [EmployeeSchema]
});

Project = mongoose.model('project', ProjectSchema);

module.exports = Project;
