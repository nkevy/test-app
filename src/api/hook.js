import axios from 'axios';

export default async function sendPost(url='',data={}){
        let resp;
        try{
                const api = await axios.post(url,data);
                resp = await api.json();
                console.log(api.ok);
                if (api.ok){
                        return resp;
                }       
                throw new Error(api.statusText);
        }catch(err){
                return Promise.reject(err.message ? err.message : resp);
        }       
}       

