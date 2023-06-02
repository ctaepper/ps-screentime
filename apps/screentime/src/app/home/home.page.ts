import { Component } from '@angular/core';
import { KeepAwake } from '@capacitor-community/keep-awake';

@Component({
  selector: 'ps-screentime-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {
    KeepAwake.isSupported().then((result) => {
      console.log({result})
      if (result.isSupported) {
        KeepAwake.keepAwake();
      }
    });
  }
}
