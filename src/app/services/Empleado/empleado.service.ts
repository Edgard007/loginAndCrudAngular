import { Injectable } from '@angular/core';

// ==> Interfaces
import { Empleado } from '../../intefraces/empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  constructor() {}

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
      // ==> Obtener Data
      const dataSave = (await localStorage.getItem('empleados')) || '';
      const dataParse = dataSave ? JSON.parse(dataSave) : [];

      const newData = [...dataParse, data];
      await localStorage.removeItem('empleados'); // ==> Eliminar
      await localStorage.setItem('empleados', JSON.stringify(newData)); // ==> Reemplazar

      return Promise.resolve({ ok: true });
    } catch (er) {
      console.error('|| ==> Error saving employee data <== ||', er);
    }
  }

  async delete(data: Empleado): Promise<any> {
    try {
      console.log('DELETE');
      // ==> Obtener Data
      const dataSave = (await localStorage.getItem('empleados')) || '';
      const dataParse: Array<Empleado> = dataSave ? JSON.parse(dataSave) : [];

      const filter = dataParse && dataParse.filter((el) => el?.id !== data?.id);

      await localStorage.removeItem('empleados'); // ==> Eliminar
      await localStorage.setItem('empleados', JSON.stringify(filter)); // ==> Reemplazar

      return Promise.resolve({ ok: true });
    } catch (er) {
      console.error('|| ==> Error Delete employee data <== ||', er);
    }
  }
}
