import express from 'express';
import path from 'path';

const app = express();

app.set('port', 3000);

const root = path.resolve(__dirname, '../../client/dist');

app.use(express.static(root));

// app.get('/', (req, res) => {
//   res.send("Hello. I'm work!!! I'm strong!!!");
// });

app.listen(app.get('port'), () => {
  console.log(`Server is running at http://localhost:${app.get('port')}`);
});