import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  private apiURL = environment.serverIP;
  constructor(private http: HttpClient) {}

  dummyMsg(msg: string): Observable<any> {
    return new Observable((observer) => {
      this.http
        .post(this.apiURL + '/dummy', { msg: msg })
        .subscribe((response) => {
          let data: any = response;
          if (data.status == 'ok') {
            observer.next({ status: 'ok' });
            observer.complete();
          }
        });
    });
  }
}
