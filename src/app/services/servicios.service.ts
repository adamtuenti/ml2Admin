import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Servicios } from '../models/servicios';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private serviciosCollection: AngularFirestoreCollection <Servicios>;
  private servicios: Observable<Servicios[]>;

  constructor(private firestore: AngularFirestore) {
    this.serviciosCollection = firestore.collection('Servicios'); //, ref => ref.where("Nombre", "==", "Celulares")
    this.servicios = this.serviciosCollection.snapshotChanges().pipe(map(
      actions =>{
        return actions.map( a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })
      }
    ))
  }
  
  getServicios(){
    return this.servicios;
  }


  getServicio(id:string){
    return this.serviciosCollection.doc<Servicios>(id).valueChanges();
  }

  addServicio(servicios:Servicios){
    return this.serviciosCollection.add({...servicios});
  }

  updateServicio(id:string, servicios:Servicios){
    return this.serviciosCollection.doc(id).update({...servicios});
  }


  removeServicio(id:string){
    return this.serviciosCollection.doc(id).delete();
  }

}
