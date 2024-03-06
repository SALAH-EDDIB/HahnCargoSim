import axios, { AxiosResponse  } from 'axios';

import { User, UserFormValues } from '../models/User';
import { store } from '../stores/Store';





axios.defaults.baseURL = 'https://localhost:44338';

//this peace of code makes sure that we send our token with every request
axios.interceptors.request.use(config => {
    const token = store.commonStore.token;
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
})





const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody)
}



const Account = {
    
    login: (user: UserFormValues) => requests.post<User>('/User/Login', user),
    

}

const agent = {
   
    Account,
    
}

export default agent;

