import * as Express from 'express';
import * as bodyparser from 'body-parser';
import { Routes } from './Routes';
import * as mongoose from 'mongoose';

class App {
  public app: Express.Application;
  public routes: Routes = new Routes();
  public mongoUrl: String =  'mongodb://localhost/TeamTimerDb';

  constructor() {
    this.app = Express();
    this.configureExpress();
    this.routes.routes(this.app);
    this.mongoSetUp();
  }

  /**
   * mongoSetUp
   */
  public mongoSetUp() {
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl);
  }

  /**
   * configureExpress
   */
  public configureExpress() {
    this.app.use(bodyparser.json());
    this.app.use(bodyparser.urlencoded({ extended: false }));
  }
}

export default new App().app
