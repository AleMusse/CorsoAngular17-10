import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ItunesService {

  constructor(private http: HttpClient) { }

  private apiRootUrl:string = 'https://itunes.apple.com/search?'

  makeRequest(request:string, limit:number):Observable<any> {
    return this.http.get(`${this.apiRootUrl}term=${request}&media=music&limit=${limit}`)
  }

}
