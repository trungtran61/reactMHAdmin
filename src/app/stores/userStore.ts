import { observable, computed, action, runInAction} from 'mobx';
import { createContext } from 'react';
import { IUser } from '../models/user';
import agent from '../api/agent';
import { RootStore } from './rootStore';

export default class UserStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore; 
    }

    @observable user: IUser | null = null;
    @computed get isLoggedIn() {return !!this.user}

    @action login = async () => {
        try {
            const user = await agent.User.login();
            runInAction(() => {
                this.user = user;
            }) 
            console.log(user);           
        } 
        catch (error) {
            console.log(error)
        }
    }
}