import { Component, OnInit } from '@angular/core';

// ==> Interface
import { Empleado } from '../../intefraces/empleado';
import { GlobalService } from '../../services/global/global.service';

// ==> Services
import { EmpleadoService } from '../../services/Empleado/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent implements OnInit {
  // ==> Variables
  public dataEmpleados!: Array<Empleado>;

  constructor(
    private service: EmpleadoService,
    private global: GlobalService
  ) {}

  ngOnInit(): void {
    // ==> Obtener data
    this.obtainData();
  }

  async obtainData() {
    const result: any = await this.service.get();
    const { ok, data } = result;

    // ==> Verificar petición
    if (ok) {
      this.dataEmpleados = data;
    } else {
      this.global.createNotification(
        'error',
        'Error',
        'Error when obtaining employees'
      );
    }
  }
}
