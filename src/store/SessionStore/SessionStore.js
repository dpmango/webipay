import { makeAutoObservable, runInAction } from 'mobx';
import sessionApi from '@api/session';

export default class SessionStore {
  id = null;
  merchant = null;
  option = null;

  constructor() {
    makeAutoObservable(this);
  }

  async setMerchant(id) {
    const res = await sessionApi.getMerchantFake(id);

    if (res) {
      runInAction(() => {
        this.id = id;
        this.merchant = res.merchant;
      });
    }
  }
}
