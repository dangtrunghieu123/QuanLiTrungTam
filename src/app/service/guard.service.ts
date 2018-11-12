import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{
  _isAdmin:boolean = false;
  CheckAddmin(){
    let isAdmin = localStorage.getItem("userAdmin");
    if(isAdmin == null){
      this._isAdmin = false;
    }
    else{
      this._isAdmin = true;
    }
  }
  canActivate(
    route:ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ){
    if(this._isAdmin){
      return true;
    }
    else{
      alert("Please Login!");
      this.router.navigate(['/admin']);
    }
  }
  constructor(private router: Router) { }
}
