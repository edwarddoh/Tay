import Router from './router';
import Server from './server';

export default {
  /**
   * All the class type references can be accessble using this.
   */
  Router,
  Server,

  /**
   * Starting server using port and routers
   */
  startServer: (port: number, routers: Router[]) => {
    new Server(port, routers);
  },

};
