import express from 'express'

const app = express()

app.use(express.json())

const projects = []

// Checar se 'id' e 'title' são strings
app.post('/projects', (req, res) => {
  const { id, title } = req.body 

  const tasks = ['Teste']

  const project = { id, title, tasks }

  projects.push(project)

  return res.json(projects)
})

app.get('/projects', (req, res) => {
  return res.json(projects)
})

app.put('/projects/:index', (req, res) => {
  const { index } = req.params

  const { title } = req.body
  
  projects[index].title = title

  return res.json(projects[index]);
  
})

app.delete('/projects/:index', (req, res) => {
  const { index } = req.params

  console.log(projects[index]);
  
  projects.splice(index, 1)

  return res.send()
})

app.post('/projects/:index/tasks', (req, res) => {
  const { index } = req.params
  const { tasks } = req.body

  projects[index].tasks = [tasks]

  return res.json(projects[index])
})

app.listen(3333)
