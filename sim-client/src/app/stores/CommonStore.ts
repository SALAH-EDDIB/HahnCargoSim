import { makeAutoObservable, reaction } from "mobx";

import { ServerError } from './../models/ServerError';

export default class CommonStore  {
   error: ServerError | null = null;
   token: string | null = window.localStorage.getItem('jwt');
   appLoaded = false;

    constructor(){
        makeAutoObservable(this);
        reaction(
            () => this.token,
            token => {
                if(token) {
                    window.localStorage.setItem('jwt', token)
                } else {
                    window.localStorage.removeItem('jwt');
                }
            }
        )
    }

    setServerError = (error: ServerError) => {
        this.error = error;
    }


    setToken = (token: string | null) => {
        this.token = token;
    }

    setApploaded = () => {
        this.appLoaded = true;
    }






    

}
