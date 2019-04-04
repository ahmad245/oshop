import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from './models/appUser';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
  user$:Observable<firebase.User>;

  constructor(
    private afAuth:AngularFireAuth,
    private router:ActivatedRoute,
    private serviceUser:UserService)
    {
    this.user$=  afAuth.authState;
  }

  login()
  {
    var url=this.router.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem("returnUrl",url);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  
  logout()
  {
    this.afAuth.auth.signOut();
  }

  get appUser$():Observable<AppUser>
  {
    
    return this.user$.switchMap(user=>
      {
        if(user)
       return this.serviceUser.getUer(user.uid);
        else
        return Observable.of(null);
      })
  }

}






