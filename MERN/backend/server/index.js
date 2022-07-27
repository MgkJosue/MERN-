import {connectDB} from './database.js'
import {PORT} from './config.js'
import app from './app.js'

connectDB()
app.listen(PORT)
console.log('Server is running on port', PORT)
