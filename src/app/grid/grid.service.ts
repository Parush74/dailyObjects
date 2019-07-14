import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Endpoints } from '../endpoints';


@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor(private http:HttpClient) { }

  getList(start){
    return this.http.get(environment.api+Endpoints.fetchDetails+start);
  }

}
