import { action, observable} from 'mobx';
import { createContext } from 'react';
import { ITippingExceptionDates, ITippingException } from '../models/tippingexception';
import agent from '../api/agent';

class MHAdminReportsStore {
    @observable tippingExceptionDates: ITippingExceptionDates = {fromDate:'01/01/2000', toDate:'01/01/2000'}; 
    @observable isSubmitting = false;  
    @observable recordCount = 0;   
    @observable tippingExceptions: ITippingException[] = [];
         
    @action getTippingExceptions = async () => {
       this.isSubmitting = true;
    
       try {           
        const tippingExceptions = await agent.TippingExceptions.list(this.tippingExceptionDates);
        this.tippingExceptions = tippingExceptions;
        this.recordCount = tippingExceptions.length;
        this.isSubmitting = false;
      } catch (error) {
        this.isSubmitting = false;
        console.log(error);
      }
    }    
}

export default createContext(new MHAdminReportsStore())