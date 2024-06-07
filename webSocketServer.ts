import { createServer } from 'node:http';
import { WebSocketServer, WebSocket } from 'ws';
import { Express } from 'express';

const wholeThing = (app: Express) => {

  const httpServer = createServer(app);

  const wss = new WebSocketServer({
    server: httpServer,
  });

  wss.on('connection', (ws, request, client) => {

    console.log('connected', request, client);

    ws.on('error', console.error);
    ws.on('message', function message(data, isBinary) {
      wss.clients.forEach(function each(client) {
        console.log('client', client);
        if (client.readyState === WebSocket.OPEN) {
          client.send(data, { binary: isBinary });
        }
      });
    });
    // ws.on('message', (data) => {
    //   console.log(data.toString());
    //   ws.send(data.toString());
    // });
  });

  return httpServer;
};

export default wholeThing;
