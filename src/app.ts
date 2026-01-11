// import Logging from './helpers/logging';

// Logging.info('info');
// Logging.warn('warn');
// Logging.error('error');
// Logging.log('log or success');

// import { add } from '@src/math/add';

// console.log('Server', add(5, 2));

import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 8000;

// Handling '/' Request
app.get('/', (_req: Request, res: Response) => {
  res.send(`server is running on the port! ${PORT}` );
});

// Server setup
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


module.exports = app;
 