import Router from './router';
import Server from './server';
import { Observable } from 'rxjs';

import * as http from 'http';
import * as https from 'https';
export default {
  /**
   * All the class type references can be accessble using this.
   */
  Router,
  Server,


  /**
   * creating server http options
   */
  createServer: (secure?: boolean, options?: http.ServerOptions | https.ServerOptions): Server => {
    return new Server(secure, options);
  },
};
