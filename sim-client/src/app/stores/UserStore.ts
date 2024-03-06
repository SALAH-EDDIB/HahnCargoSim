
import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { history } from "../..";
import { User, UserFormValues } from "../models/User";
import { store } from "./Store";
import { redirect } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
interface DecodedToken {
    name: string;
    
  }

  const getUserNameFromToken = (token: string): DecodedToken | null => {
    try {
      const decoded: any = jwtDecode(token);

      const decodedToken: DecodedToken = {
        name: decoded.unique_name,
       
      };
      return decodedToken;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  };
  

export default class UserStore {
    
    user: User | null = null;
    loading = false;
    lodingInitiale = false;
    constructor() {
        makeAutoObservable(this)
    }

    get isLoggedIn() {
  

        return !!this.user;

    }






    login = async (creds: UserFormValues) => {
        
        
        try {
            const user = await agent.Account.login(creds);
            store.commonStore.setToken(user.token);
            runInAction(() => {
                this.user = user;
            });

            history.push('/dashboard');
            
        } catch (error) {
            throw error;
        }
    }


    getUser = async (token : string) => {
        try{
            
            const username = getUserNameFromToken(token);
            runInAction(() => {
                this.user = {userName : username!.name , token : token };
            });

        } catch (error) {
            console.log(error);
            
        }
    }


    logout = () => {
        store.commonStore.setToken(null);
        window.localStorage.removeItem('jwt');
        this.user = null;
        history.push('/Login');
    }

    

  

}