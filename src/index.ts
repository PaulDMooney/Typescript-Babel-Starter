import { formatResponse } from '$sample/sample';
import express from 'express';

const app: express.Application = express();

app.get('/', (req, res) => {
  res.send(formatResponse({value:req.ip}))
} );

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});
