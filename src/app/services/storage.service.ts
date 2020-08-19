import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getData(dataKey: string): any {
    return JSON.parse(localStorage.getItem(dataKey))
  }

  setData(dataKey: string, data: any) {
    localStorage.setItem(dataKey, JSON.stringify(data))
  }

}
