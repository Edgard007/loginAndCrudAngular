import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// ==> Interfaces
import { Empleado } from '../../intefraces/empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  constructor(private httpClient: HttpClient) {}

  get() {
    return new Promise((resolve, reject) => {
      this.httpClient.get('assets/fakeApi.json').subscribe(
        (res: any) => {
          const employees: Array<Empleado> = res?.employees || [];

          resolve({
            ok: employees.length > 0,
            msg: employees.length > 0 ? 'Éxito' : 'Error',
            data: employees,
          });
        },
        (er) => {
          console.error('|| ==> Error Get Data Employees <== ||', er);
          reject(er);
        }
      );
    });
  }

  post(data: Empleado) {
    return new Promise((resolve, reject) => {
      this.httpClient.post('assets/fakeApi.json', data).subscribe(
        (res: any) => {
          console.log('RESULT', res);
        },
        (er) => {
          console.error('|| ==> Error saving employee data <== ||', er);
          reject(er);
        }
      );
    });
  }
}
