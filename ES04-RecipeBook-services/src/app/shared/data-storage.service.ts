import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataStorageService {
  private URL = "http://localhost:3000";
  constructor(private httpClient: HttpClient) {

  }

  public sendGetRequest(resource: string) {
    return this.httpClient.get(this.URL + resource);
  }

  //body --> record da aggiungere
  public sendPostRequest(resource: string, body: any) {
    return this.httpClient.post(this.URL + resource, body);
  }

  //body --> campi del record da modificare
  public sendPatchRequest(resource: string, body: any) {
    return this.httpClient.patch(this.URL + resource, body);
  }

  //body --> intero record da sostituire al record attuale
  public sendPutRequest(resource: string, body: any) {
    return this.httpClient.put(this.URL + resource, body);
  }

  //Cancella il record corrente
  public sendDeleteRequest(resource: string, body: any) {
    return this.httpClient.delete(this.URL + resource);
  }
}