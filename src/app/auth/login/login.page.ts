import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  afDG: any;
  loginData = {
    email: '',
    password: '',
    pseudo: '',
    Age: '',
  };

  constructor(
    public afDB: AngularFireDatabase,
    public toastController: ToastController,
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  add() {
    this.afDG.list('User/').push({
      pseudo: '',
      Age: '',
    });
  }

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
}
