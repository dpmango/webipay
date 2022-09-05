import { api, endpoints } from '@api';

export default {
  getPaymentFake: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === '1') {
          resolve({
            bankName: 'SBI',
            branchName: 'ADB BARWALA',
            accountType: 'Savings Account',
            accountNumber: '3025766',
            accountHolder: 'Testing Name',
            amount: '6000.00 JPY',
          });
        } else if (id === '2') {
          resolve({
            bankName: 'SBI 2',
            branchName: 'ADB BARWALA',
            accountType: 'Savings Account',
            accountNumber: '3025766',
            accountHolder: 'Testing Name',
            amount: '6010.00 JPY',
          });
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
