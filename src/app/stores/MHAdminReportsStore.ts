import { action, observable} from 'mobx';
import { createContext } from 'react';
import { ITippingExceptionDates, ITippingException } from '../models/tippingexception';
import agent from '../api/agent';

class MHAdminReportsStore {
    @observable tippingExceptionDates: ITippingExceptionDates = {fromDate:'01/01/2000', toDate:'01/01/2000'}; 
    @observable isSubmitting = false;  
    @observable recordCount = 0;   
    @observable tippingExceptions: ITippingException[] = [];
         
    @action getTippingExceptions = () => {
       this.isSubmitting = true;
      
    agent.TippingExceptions.list(this.tippingExceptionDates)
      .then(tippingExceptions => {
        this.recordCount = tippingExceptions.length;
        this.tippingExceptions = tippingExceptions;       
      })
      .finally(() => this.isSubmitting = false);
    }
}

export default createContext(new MHAdminReportsStore())