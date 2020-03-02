import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { User, constructor } from 'firebase';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SkillService } from 'src/app/services/skill.service';
import { AuthService } from 'src/app/services/auth.service';
import { async } from 'rxjs/internal/scheduler/async';
import { UserCredential } from 'src/app/models/user-credential';
import { University } from 'src/app/models/university';
//import { UnivModalComponent } from 'src/app/components/univ-modal/univ-modal.component';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase/app';
//import { Facebook } from '@ionic-native/facebook/ngx';
import { Platform } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // tslint:disable-next-line:member-ordering
  authService: AuthService;
  // tslint:disable-next-line:member-ordering
  public userCredential: UserCredential;
  // tslint:disable-next-line:member-ordering
  router: Router;
  // tslint:disable-next-line:member-ordering
  public alert: string = null;
  // tslint:disable-next-line: member-ordering
  public user: User;
  // tslint:disable-next-line: member-ordering
 // public error: AuthError;
  // tslint:disable-next-line: member-ordering
  //public university: University;
  // tslint:disable-next-line:member-ordering
  private skillService: SkillService;
  // tslint:disable-next-line:member-ordering
  validationsForm: FormGroup;
  // tslint:disable-next-line: member-ordering
  afDB: AngularFireDatabase;
  // tslint:disable-next-line:member-ordering
  toastController: ToastController;
  // tslint:disable-next-line:member-ordering
  public afAuth: AngularFireAuth;
  loginData: any;
   // tslint:disable-next-line:member-ordering
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
    }
  // tslint:disable-next-line:max-line-length
  constructor(authService: AuthService, router: Router, skillService: SkillService, public modalController: ModalController, public formBuilder: FormBuilder)
   {  this.skillService = skillService;
      this.authService = authService;
      // this.user = authService.user;
      this.userCredential = new UserCredential();
      this.router = router;
     // this.university = null;
  }
  
ngOnInit() {
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

  async login() {
    const toastLog = await this.toastController.create({
      message: 'Ravi de terevoir !!',
      duration: 2000,
      position: 'top'
    });
    toastLog.present();
    this.afAuth.auth.signInWithEmailAndPassword(this.loginData.email, this.loginData.password)
    .then(auth => {
      console.log('utilisateur connecté');
    })
    .catch(err => {
      console.log('Erreur: ' + err);
      this.errorMail();
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
