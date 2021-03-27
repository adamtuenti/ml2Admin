import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Locales } from '../models/locales';

@Injectable({
  providedIn: 'root'
})
export class LocalesService {

  private localesCollection: AngularFirestoreCollection <Locales>;
  private locales: Observable<Locales[]>;

  constructor(private firestore: AngularFirestore) {
    this.localesCollection = firestore.collection('Locales'); //, ref => ref.where("Nombre", "==", "Celulares")
    this.locales = this.localesCollection.snapshotChanges().pipe(map(
      actions =>{
        return actions.map( a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })
      }
    ))
   }
  getLocales(){
    return this.locales;
  }

  getLocal(id:string){
    return this.localesCollection.doc<Locales>(id).valueChanges();
  }

  addLocal(locales:Locales){
    return this.localesCollection.add({...locales});
  } 

  updateLocal(id:string, locales:Locales){
    return this.localesCollection.doc(id).update({...locales});
  }

  removeLocal(id:string){
    return this.localesCollection.doc(id).delete();
 }

}