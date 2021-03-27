import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pagos } from '../models/pagos';

@Injectable({
  providedIn: 'root'
})
export class PagoService {
  private PagosCollection: AngularFirestoreCollection <Pagos>;
  private Pagos: Observable<Pagos[]>;

  constructor(firestore: AngularFirestore) {
    this.PagosCollection = firestore.collection('Pago');
    this.Pagos= this.PagosCollection.snapshotChanges().pipe(map(
      actions =>{
        return actions.map( a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })
      }
    ))
   }
  getPagos(){
    return this.Pagos;
  }
  
  getPago(id:string){
    return this.PagosCollection.doc<Pagos>(id).valueChanges();
  }

  addPagos(id:string, Pagos:Pagos){
    return this.PagosCollection.doc(id).set({...Pagos});
  }

  updatePagos(id:string, Pagos:Pagos){
    return this.PagosCollection.doc(id).update({...Pagos});
  }

  removePagos(id:string){
    return this.PagosCollection.doc(id).delete();
 }
}
