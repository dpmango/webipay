import { makeAutoObservable, runInAction } from 'mobx';
import sessionApi from '@api/session';

export default class SessionStore {
  error = null;
  payId = null;
  paymentData = {};

  constructor() {
    makeAutoObservable(this);
  }

  async setPay(id) {
    if (id === null) {
      this.resetSession();
      return;
    }

    const res = await sessionApi.getPaymentFake(id).catch(() => {
      this.setError(true);
    });

    if (res) {
      runInAction(() => {
        this.payId = id;
        this.paymentData = { ...res };
      });
    }
  }

  setError(error) {
    this.error = error;
  }

  resetSession() {
    this.payId = null;
    this.error = null;
    this.paymentData = {};
  }
}
