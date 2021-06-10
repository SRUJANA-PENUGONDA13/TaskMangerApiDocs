const express = require('express')
const app = express()

const path = require('path')
const fs   = require('fs')
const swaggerUi = require('swagger-ui-express')
const YAML = require('js-yaml')
const port = process.env.PORT

const swaggerDirectoryPath = path.join(__dirname,'/docs/swagger.yaml')
app.use(express.static(swaggerDirectoryPath))
const swaggerDocument = YAML.load(fs.readFileSync(swaggerDirectoryPath, 'utf8'))

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(port, ()=>{
    console.log('Server is started');
})