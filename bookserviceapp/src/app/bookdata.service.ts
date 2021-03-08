import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Localbook } from './localbook';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { RemoteBook } from './remotebook';

@Injectable({
  providedIn: 'root'
})
export class BookdataService {

  //local url
  localurl:string = './assets/booklist.json';

  //remote url
  remoteurl:string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpservice: HttpClient) {

  }

  myData() {
    return 'This is the data from my DataService !';
  }

  // Get Local books
  GetLocalBooks(): Observable<Localbook> {
    return this.httpservice.get<Localbook>(this.localurl)
    .pipe( retry(1), catchError(this.myerrorhandler));
  }

  // GET Remote books
  GetRemoteBooks(): Observable<RemoteBook> {
    return this.httpservice.get<RemoteBook>(this.remoteurl)
    .pipe( retry(1), catchError(this.myerrorhandler))
  }

  // Error handling
  myerrorhandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
