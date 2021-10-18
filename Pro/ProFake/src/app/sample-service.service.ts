import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';    
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';  
import 'rxjs/add/operator/toPromise';  
import 'rxjs/add/observable/throw'; 
import { map } from 'rxjs/operators';
import 'rxjs/Rx';
import { Observable } from 'rxjs' 
import { Observer } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class SampleServiceService {

  
  private headers = new Headers({ 'Content-Type': 'application/json' });  
  _baseUrl: string = ''; 

  constructor(private http: HttpClient) {  
    this._baseUrl = "https://jsonplaceholder.typicode.com/";  
  } 

  public GetAllRecords() {  
    return this.http.get(this._baseUrl + 'posts')  
  }  

  public GetAllAlbums() {  
    return this.http.get(this._baseUrl + 'albums')  
  } 
  public GetAllComment() {  
    return this.http.get(this._baseUrl + 'comments')  
  }  

  public GetAllPhotos() {  
    return this.http.get(this._baseUrl + 'albums/1/photos')
  }
  // To provide error description   
  private handleError(error: Response | any) {  
    console.error(error.message || error);  
    return Observable.throw(error.status);  
  }

}
