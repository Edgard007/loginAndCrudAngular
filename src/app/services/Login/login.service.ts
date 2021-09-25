import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  loginWithUserAndPass(user: string, password: string) {
    try {
      this.httpClient.get('assets/fakeApi.json').subscribe((res) => {
        console.log('RES', res);
      });
    } catch (e) {
      console.error('||==> Error loginWithUserAndPass <== ||', e);
    }
  }
}
