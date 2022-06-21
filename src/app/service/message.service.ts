import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private toastController: ToastController
  ) { }

  async sucess(message: string){
    const toast = await this.toastController.create({
      message,
      color: 'success',
      position: 'top',
      duration: 3000,
      buttons: [
        {
          icon: 'close',
          side: 'end',
        }
      ]
    });
    toast.present();
  }

  async error(message: string, handler: () => void){
    const toast = await this.toastController.create({
      message,
      color: 'danger',
      position: 'top',
      buttons: [
        {
          icon: 'refresh',
          side: 'start',
          handler: () => handler(),
        },
        {
          side: 'end',
          icon: 'close'
        },
      ],
    });
    toast.present();
  }
}
