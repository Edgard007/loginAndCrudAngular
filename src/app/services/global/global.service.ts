import { Injectable } from '@angular/core';

// ==> NG Zorro
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor(private notification: NzNotificationService) {}

  createNotification(type: string, titule: string, msg: string): void {
    this.notification.create(type, titule, msg);
  }
}
