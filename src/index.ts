import express from 'express';

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}/api`);
});

export default app;
