import { Component, OnInit } from '@angular/core';

// ==> NG Zorro
import { NzButtonSize } from 'ng-zorro-antd/button';

// Forms
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  public size: NzButtonSize = 'large';

  public empleadoForm!: FormGroup;

  public dataEmpleados!: Array<Empleado>;
  public showModal: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: EmpleadoService,
    private global: GlobalService
  ) {}

  ngOnInit(): void {
    // ==> Inicializando Form
    this.inicializeForm();

    // ==> Obtener data
    this.obtainData();
  }

  /**
   * Inicializando Form
   */
  inicializeForm() {
    this.empleadoForm = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
    });
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

  validForm() {
    const valid = this.empleadoForm.valid;

    if (valid) {
      const dataForm = this.empleadoForm.value;
      console.log("dataForm", dataForm);

      this.service.post(dataForm);
    } else {
      this.global.createNotification(
        'error',
        'Error',
        'Por favor, complete el formulario'
      );
    }
  }
}
