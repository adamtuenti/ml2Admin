import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Productos } from '../models/productos';
// import firebase from 'firebase/app';
// import 'firebase/firestore';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productosCollection: AngularFirestoreCollection <Productos>;
  private productos: Observable<Productos[]>;

  constructor(private firestore: AngularFirestore) {
    this.productosCollection = firestore.collection('Productos'); //, ref => ref.where("Nombre", "==", "Celulares")
    this.productos = this.productosCollection.snapshotChanges().pipe(map(
      actions =>{
        return actions.map( a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })
      }
    ))
   }
  getProductos(){
    return this.productos;
  }

  getProductosCategoria(categoria: string){
    
    return this.firestore.collection('Productos', ref => ref.where("Categoria", "==", "Celulares"));

  }


  getProducto(id:string){
    return this.productosCollection.doc<Productos>(id).valueChanges();
  }

  addProducto(productos:Productos){
    return this.productosCollection.add({...productos});
  } 

  updateProducto(id:string, productos:Productos){
    return this.productosCollection.doc(id).update({...productos});
  }

  removerProducto(id:string){
    return this.productosCollection.doc(id).delete();
 }

}