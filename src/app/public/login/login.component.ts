import { Component, OnInit } from '@angular/core';

// Forms
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// ==> Services
import { LoginService } from '../../services/Login/login.service';

// ==> NG Zorro
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // Form variable
  public loginForm!: FormGroup; // Para logerarse

  constructor(
    private fb: FormBuilder,
    private services: LoginService,
    private notification: NzNotificationService
  ) {}

  ngOnInit(): void {
    // Inicializando Form
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      pass: ['', Validators.required],
    });
  }

  login() {
    const valid = this.loginForm.valid;

    if (valid) {
      console.log('INICIAR SESION');
    } else {
      this.createNotification(
        'error',
        'Error',
        'Por favor, complete el formulario'
      );
    }
  }

  createNotification(type: string, titule: string, msg: string): void {
    this.notification.create(type, titule, msg);
  }
}
