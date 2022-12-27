import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {
 public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }

  sendIsLoginValue(data){
this.isUserLoggedIn=data
  }

  getIsLoginValue(){
    return this.isUserLoggedIn
  }
}
