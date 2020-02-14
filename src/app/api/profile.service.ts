import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    
  ) {

   }uploadImage(image: string, userId: string): any {
      // Implementation
    }
  
    getImage(userId: string, imageId: string): any {
      // Implementation
    }

    private generateUUID(): string {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }


}
