import bodyparser from 'body-parser';
import morgan from 'morgan';

export default app => {
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: false}));
    app.use(morgan('dev'));
};