import express from 'express';
import taskRoutes from './routes/task.routes';
import connection from './db/connection'
import "./db/models/tasks.model"
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())
app.use('/tasks', taskRoutes);
connection.authenticate().then(() => {console.log('Conectado')})
.catch((error) => {console.log(error)})
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
