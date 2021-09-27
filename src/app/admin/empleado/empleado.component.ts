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
  public filtrosForm!: FormGroup;

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

  async validForm() {
    const valid = this.empleadoForm.valid;

    if (valid) {
      const dataForm = this.empleadoForm.value;

      const result: any = await this.service.post(dataForm);

      const { ok } = result;

      if (ok) {
        const exito = 'Información guardada correctamente';
        this.global.createNotification('success', 'Éxito', exito);
        this.obtainData();
        this.inicializeForm();
        this.showModal = false;
      } else {
        const error = 'Error al guardar registro, intente más tarde';
        this.global.createNotification('error', 'Error', error);
        this.inicializeForm();
        this.showModal = false;
      }
    } else {
      this.global.createNotification(
        'error',
        'Error',
        'Por favor, complete el formulario'
      );
    }
  }
}
