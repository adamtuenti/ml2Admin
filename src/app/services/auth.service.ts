import { Injectable } from '@angular/core';
import { FirebaseAuth } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { rejects } from 'assert';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { UsuarioService } from './usuario.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,
              private firestore: AngularFirestore,
              private usuarioService: UsuarioService) { }
  loginUser(email:string, password:string):Promise<firebase.auth.UserCredential>{
    
    return new Promise ((resolve, reject)=>{ 
      firebase.auth().signInWithEmailAndPassword(email, password).then( res=>{ 
      resolve(res);   
      }).catch(err => reject(err))
    })
  }

  resetPassword(email:string):Promise<void>{
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logOutUser(){
     firebase.auth().signOut().then(
      ()=> 
      (localStorage.clear(),
      this.router.navigateByUrl("/login"))
    );
  }

}