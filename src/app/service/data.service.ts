import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private messageSource = new BehaviorSubject("default message");
  currentMessage = this.messageSource.asObservable();

  private jsonData = new BehaviorSubject({});
  jsonTableData = this.jsonData.asObservable();


  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  changeJSONData(jData: any) {
    this.jsonData.next(jData);
  }
}
