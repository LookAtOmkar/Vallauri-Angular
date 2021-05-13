import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private URL = "http://localhost:3000";
  constructor(private httpClient: HttpClient) { }
  
  public sendGetRequest(endpoint: string) {
   return this.httpClient.get(this.URL + endpoint);
  }

  // body = record da aggiungere
  public sendPostRequest(endpoint: string, body: any) {
    return this.httpClient.post(this.URL + endpoint, body);
  }

  // body = campi del record da modificare
  public sendPatchRequest(endpoint: string, body: any) {
    return this.httpClient.patch(this.URL + endpoint, body);
  }

  // body = intero record da sostituire al record attuale
  public sendPutRequest(endpoint: string, body: any) {
    return this.httpClient.put(this.URL + endpoint, body);
  }

  // Cancella il record corrente
  public sendDeleteRequest(endpoint: string, body: any) { 
    return this.httpClient.delete(this.URL + endpoint);
  }
}
