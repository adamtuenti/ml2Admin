import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Variables } from '../models/variables';


@Injectable({
  providedIn: 'root'
})
export class VariablesService {

  private variablesCollection: AngularFirestoreCollection <Variables>;
  private variables: Observable<Variables[]>;

  constructor(private firestore: AngularFirestore) {
    this.variablesCollection = firestore.collection('VariablesGlobales'); //, ref => ref.where("Nombre", "==", "Celulares")
    this.variables = this.variablesCollection.snapshotChanges().pipe(map(
      actions =>{
        return actions.map( a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })
      }
    ))
  }
  
  getVariables(){
    return this.variables;
  }


  getVariable(id:string){
    return this.variablesCollection.doc<Variables>(id).valueChanges();
  }


}
