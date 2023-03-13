import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable( {providedIn: 'root'} )
export class LocalStorageService {

 constructor() {}

  setItem(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Error remove to localStorage', e);
    }

  }

  getItem(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key) as string) ;
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }
}
