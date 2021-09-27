import { Injectable } from '@angular/core';

// ==> NG Zorro
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor(private notification: NzNotificationService) {}

  /**
   * Funcion para crear Notificicacines
   * @param type <string> Tipo de Notificación
   * @param titule <string> Titulo de la Notificación
   * @param msg <string> Mensaje de la Notificación
   */
  createNotification(type: string, titule: string, msg: string): void {
    this.notification.create(type, titule, msg);
  }
}
