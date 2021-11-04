import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  // seeds(server) {
  //   server.db.loadData({
  //     transactions: [
  //       {
  //         id: 1,
  //         title: 'Freelance website',
  //         type: 'deposit',
  //         category: 'Dev',
  //         amount: 3400,
  //         createdAt: new Date ('2021-11-10 09:00:00'),
  //       },
  //       {
  //         id: 2,
  //         title: 'Interent',
  //         type: 'withdraw',
  //         category: 'Casa',
  //         amount: 220,
  //         createdAt: new Date ('2021-11-5 14:00:00'),
  //       },
  //     ],
  //   })
  // },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
