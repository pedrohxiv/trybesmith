import express from 'express';

import productsRouter from './routers/products.router';
import usersRouter from './routers/users.router';
import ordersRouter from './routers/orders.router';
import loginRouter from './routers/login.router';

import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);
app.use('/login', loginRouter);

app.use(errorHandler);

export default app;
