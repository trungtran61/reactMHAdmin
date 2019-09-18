import TippingExceptionsReportStore from './tippingExceptionsReportStore';
import UserStore from './userStore';
import { createContext } from 'react';
import { configure } from 'mobx';

configure({enforceActions: 'always'});

export class RootStore {
    tippingExceptionsReportStore: TippingExceptionsReportStore;
    userStore: UserStore;

  
    constructor() {
        this.tippingExceptionsReportStore = new TippingExceptionsReportStore(this);
        this.userStore = new UserStore(this);
    }    
}

export const RootStoreContext = createContext(new RootStore());