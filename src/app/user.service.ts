import { AppUser } from './models/appUser';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class UserService {

 constructor(private db:AngularFireDatabase)
 {}
 save(user:firebase.User)
 {
   this.db.object('/users/'+user.uid).update(
     {
       name:user.displayName,
       email:user.email
     });
 }
 getUer(uid:string):FirebaseObjectObservable<AppUser>
 {
  return this.db.object('/users/'+uid);
 }
  

}


// constructor(private db:AngularFireDatabase) 
// { }
// save(user:firebase.User)
// {
//   this.db.object('/users/'+user.uid).update(
//     {
//       name:user.displayName,
//       email:user.email
//     });
// }
// getUer(uid:string):FirebaseObjectObservable<AppUser>
// {
  
// return  this.db.object('/users/'+uid);
// }