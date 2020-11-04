import * as WebSocket from 'ws';
import * as https from 'https';
import * as http from 'http';
import * as url from 'url';

import { Observable, Subject } from 'rxjs';

import Router from '../router';

export default class Server {

  private readonly wss: WebSocket.Server;
  private readonly server: http.Server;
  constructor(secure?: boolean, options?: https.ServerOptions | http.ServerOptions, requestListener?: http.RequestListener) {
    if (secure) {
      this.server = https.createServer(options as https.ServerOptions, requestListener);
    } else {
      this.server = http.createServer(options as http.ServerOptions, requestListener);
    }

    this.wss = new WebSocket.Server({ server: this.server });
  }

  public listen(port?: number): this {
    this.server.listen(port);
    return this;
  }

}



