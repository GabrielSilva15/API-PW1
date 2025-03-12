import express from 'express';
import cors from 'cors';
import routesUser from './routes/user.routes';
import routesLogin from './routes/auth.routes';
import routesEvent from './routes/event.routes';
import routesConvidado from './routes/convidado.routes';
import routesFornecedoresEvento from './routes/fornecedorEvento.routes';
import routesFornecedores from './routes/fornecedores.routes';

const app = express();

app.use(cors());
app.use(express.json());


app.use(routesUser);
app.use(routesLogin);
app.use(routesEvent);
app.use(routesFornecedores);
app.use(routesConvidado);
app.use(routesFornecedoresEvento);

export default app;