import TippingExceptionsReportStore from './tippingExceptionsReportStore';
import UserStore from './userStore';
import { createContext } from 'react';
import { configure } from 'mobx';
import CommonStore from './commonStore';

configure({enforceActions: 'always'});

export class RootStore {
    tippingExceptionsReportStore: TippingExceptionsReportStore;
    userStore: UserStore;
    commonStore: CommonStore;   
  
    constructor() {
        this.tippingExceptionsReportStore = new TippingExceptionsReportStore(this);
        this.userStore = new UserStore(this);
        this.commonStore = new CommonStore(this);
    }    
}

export const RootStoreContext = createContext(new RootStore());