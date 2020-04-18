import { OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { User  } from 'src/app/models/user';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SkillService } from 'src/app/services/skill.service';
import { AuthService } from 'src/app/services/auth.service';
import { async } from 'rxjs/internal/scheduler/async';
import { UserCredential } from 'src/app/models/user-credential';
import { University } from 'src/app/models/university';
//import { UnivModalComponent } from 'src/app/components/univ-modal/univ-modal.component';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Platform } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { Component } from '@angular/core';


// @Component({
  // template: `
    // <form (ngSubmit)="logForm()">
      // <ion-item>
        // <ion-label>Todo</ion-label>
        // <ion-input type="text" [(ngModel)]="todo.title" name="title"></ion-input>
      // </ion-item>
      // <ion-item>
        // <ion-label>Description</ion-label>
        // <ion-textarea [(ngModel)]="todo.description" name="description"></ion-textarea>
      // </ion-item>
      // <button ion-button type="submit" block>Add Todo</button>
    // </form>
  // `,
// })
// export class FormsPage {
  // private todo: FormGroup;
// 
  // constructor( private formBuilder: FormBuilder ) {
    // this.todo = this.formBuilder.group({
      // title: ['', Validators.required],
      // description: [''],
    // });
  // }
  // logForm() {
    // console.log(this.todo.value);
  // }
// }

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginData = {
    email: '',
    password: ''
  };
  providerFb: firebase.auth.FacebookAuthProvider;
         authService: AuthService;
  public userCredential: UserCredential;
         router: Router;
  public alert: string = null;
  public user: User;
  public error: AuthError;
  //public university: University;
  //private skillService: SkillService;
  validationsForm: FormGroup;
  afDB: AngularFireDatabase;
  validationMessages = {
    // tslint:disable-next-line: object-literal-key-quotes
    // Email types and messages error
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    // tslint:disable-next-line: object-literal-key-quotes
    // Password types and messages error
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ],
    };
  formBuilder: any;

  constructor(
        // authService: AuthService, 
        router: Router,
        public toastController: ToastController,
        public afAuth: AngularFireAuth,
        private fb: Facebook,
        public platform: Platform
        // public modalController: ModalController, 
        // public formBuilder: FormBuilder
    )
                                    {
                                      //  this.skillService = skillService;
                                      // this.authService = AuthService;
                                        this.providerFb = new firebase.auth.FacebookAuthProvider();
                                        this.user = AuthService.user;
                                        this.userCredential = new UserCredential();
                                        this.router = this.router;
                                    // this.university = null;
  }

ngOnInit() {
    this.facebookLogin();
    this.validationsForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    password: new FormControl('', Validators.compose([
      Validators.required,
      // validators deactivate for this first phase of projet
      Validators.minLength(5),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
    ]))
  });
}
  // tslint:disable-next-line:align

// add() {
//     this.afDG.list('User/').push({
//       pseudo: '',
//       Age: '',
//     });
//   }

  // async login() {
    // const toastLog = await this.toastController.create({
      // message: 'Ravi de terevoir !!',
      // duration: 2000,
      // position: 'top'
    // });
    // toastLog.present();
    // this.afAuth.auth.signInWithEmailAndPassword(this.loginData.email, this.loginData.password)
    // .then(auth => {
      // console.log('utilisateur connecté');
    // })
    // .catch(err => {
      // console.log('Erreur: ' + err);
      // this.errorMail();
    // });
  // }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.loginData.email, this.loginData.password)
    .then(auth => {
      console.log('utilisateur connecté');
    })
    .catch(err => {
      console.log('Erreur: ' + err);
      this.errorMail();
    });
  }


  facebookLogin() {
    if (this.platform.is('cordova')) {
      console.log('PLateforme cordova');
      this.facebookCordova();
    } else {
      console.log('PLateforme Web');
      this.facebookWeb();
    }
}
facebookCordova() {
  this.fb.login(['email']).then( (response) => {
      const facebookCredential = firebase.auth.FacebookAuthProvider
          .credential(response.authResponse.accessToken);
      firebase.auth().signInWithCredential(facebookCredential)
      .then((success) => {
          console.log('Info Facebook: ' + JSON.stringify(success));
          this.afDB.object('Users/' + success.user.uid).set({
            displayName: success.user.displayName,
            photoURL: success.user.photoURL
          });
      }).catch((error) => {
          console.log('Erreur: ' + JSON.stringify(error));
      });
  }).catch((error) => { console.log(error); });
}

facebookWeb() {
  this.afAuth.auth
    .signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then((success) => {
      console.log('Info Facebook: ' + JSON.stringify(success));
      this.afDB.object('Users/' + success.user.uid).set({
            displayName: success.user.displayName,
            photoURL: success.user.photoURL
          });
    }).catch((error) => {
      console.log('Erreur: ' + JSON.stringify(error));
    });
}

  async errorMail() {
    const toast = await this.toastController.create({
      message: 'Email ou mot de passe incorrect',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  async signUp() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.loginData.email, this.loginData.password)
    .then(auth => {
      console.log('utilisateur créer');
    })
    .catch(err => {
      console.log('Erreur: ' + err);
      this.errorMail();
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
