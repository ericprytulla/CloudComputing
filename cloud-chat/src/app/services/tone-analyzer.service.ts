import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ToneAnalyzerService {
  private apiUrl: string = "https://sharp-payne.eu-de.mybluemix.net/tone";
  headers = new HttpHeaders();

  constructor(private http: HttpClient) {


  }

  getTone(msg: string) {
    this.headers = this.headers.set('Accept','application/json');
    this.headers = this.headers.set('Content-Type','application/json');
    this.headers = this.headers.set('mode','cors');
    console.log(JSON.stringify(this.headers));
    this.http.post(this.apiUrl, {'texts': [msg]}, {headers: this.headers}).subscribe((resp)=> {
        console.log(JSON.stringify(resp));
    });
  }

}
