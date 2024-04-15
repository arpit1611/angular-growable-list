import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {  

  constructor(private httpclient: HttpClient) {}

  getAuthorList(page: number): Observable<any> {
    return this.httpclient
      .get(`https://picsum.photos/v2/list?page=${page}`)
      .pipe();
  }

  //for single author details
  getAuthor(id: string): Observable<any> {
    return this.httpclient      
      .get(`https://picsum.photos/id/${id}/info`)
      .pipe();
  }  
}
