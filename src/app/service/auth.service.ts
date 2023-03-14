import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  
  constructor(private http:HttpClient) { }
  apiurl=' http://localhost:3000/posts';
  GetAll(){
    return this.http.get(this.apiurl)
  }
  GetBycode(code:any){
    return this.http.get(this.apiurl+'/'+code)
  }
  Proceedregister(inputdata: any){
    return this.http.post(this.apiurl, inputdata)
  }
  Updateuser(code: any, inputdata: any){
    return this.http.put(this.apiurl+'/'+ code, inputdata);
  }
  IsloggedIn(){
    return localStorage.getItem('username')!=null;
  }
  GetuserRole(){
    return localStorage.getItem('userrole')!=null?localStorage.getItem('userrole')?.toString:'';
  }
  GetChartinfo(){
    return this.http.get("http://localhost:3000/posts");
  }

}
