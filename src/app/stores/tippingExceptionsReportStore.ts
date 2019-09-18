import { action, observable, runInAction} from 'mobx';
import { ITippingExceptionDates, ITippingException } from '../models/tippingexception';
import agent from '../api/agent';
import { RootStore }  from './rootStore';

export default class TippingExceptionsReportStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore; 
    }

    @observable tippingExceptionDates: ITippingExceptionDates = {fromDate:'01/01/2000', toDate:'01/01/2000'}; 
    @observable isSubmitting = false;  
    @observable recordCount = 0;   
    @observable tippingExceptions: ITippingException[] = [];
         
    @action getTippingExceptions = async () => {
       this.isSubmitting = true;
    
       try {           
        const tippingExceptions = await agent.TippingExceptions.list(this.tippingExceptionDates);
        runInAction('getting report',() => {
            this.tippingExceptions = tippingExceptions;
            this.recordCount = tippingExceptions.length;
            this.isSubmitting = false;
        });       
       
      } catch (error) {
        runInAction('getting report error',() => {
            this.isSubmitting = false;
            console.log(error);
        });
      }
    }
    
    @action setTippingExceptionDates = (fromDate: string, toDate: string) => {
        this.tippingExceptionDates.fromDate = fromDate;
        this.tippingExceptionDates.toDate = toDate;
    }

    @action setTippingExceptionFromDate = (date: string) => {
        this.tippingExceptionDates.fromDate = date;        
    }

    @action setTippingExceptionToDate = (date: string) => {
        this.tippingExceptionDates.toDate = date;
    }
}

//export default createContext(new TippingExceptionsReportStore())