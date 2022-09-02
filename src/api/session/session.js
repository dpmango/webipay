import { api, endpoints } from '@api';

export default {
  getMerchantFake: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === '1') {
          resolve({ merchant: 'Demo 1' });
        } else if (id === '2') {
          resolve({ merchant: 'Demo 2' });
        } else {
          reject('Not Found');
        }
      }, 500);
    });
  },

  create: async () => {
    return api.post(endpoints.session.create);
  },
  alive: async (req) => {
    /**
      @sessionId string
      @cartId string
    */
    return api.post(endpoints.session.alive, req);
  },
};
