import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// ==> Interfaces
import { Empleado } from '../../intefraces/empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  constructor(private httpClient: HttpClient) {}

  async get(): Promise<any> {
    try {
      const empleados: any = localStorage.getItem('empleados') || '';
      const dataParse = empleados ? JSON.parse(empleados) : [];

      return Promise.resolve({ ok: true, data: dataParse });
    } catch (er) {
      console.error('|| ==> Error Get Data Employees <== ||', er);
    }
  }

  async post(data: Empleado): Promise<any> {
    try {
      const dataSave = (await localStorage.getItem('empleados')) || '';
      const dataParse = dataSave ? JSON.parse(dataSave) : [];

      const newData = [...dataParse, data];
      await localStorage.removeItem('empleados');
      await localStorage.setItem('empleados', JSON.stringify(newData));

      return Promise.resolve({ ok: true });
    } catch (er) {
      console.error('|| ==> Error saving employee data <== ||', er);
    }
  }
}
