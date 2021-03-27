import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { CategoriasLocales } from '../models/categoriasLocales';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  private categoriasCollection: AngularFirestoreCollection <CategoriasLocales>;
  private categorias: Observable<CategoriasLocales[]>;

  constructor(private firestore: AngularFirestore) {
    this.categoriasCollection = firestore.collection('CategoriasLocales', ref => ref.orderBy("Nombre", "asc"));
    this.categorias = this.categoriasCollection.snapshotChanges().pipe(map(
      actions =>{
        return actions.map( a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })
      }
    ))
   }
  getCategorias(){
    return this.categorias;
  }



}