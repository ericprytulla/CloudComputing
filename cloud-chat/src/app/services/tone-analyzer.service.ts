import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ToneAnalyzerService {
  private apiUrl: string = "/tone";
  private mood: number = 10;
  private max: number = 10;
  private min: number = 0;
  headers = new HttpHeaders();

  constructor(private http: HttpClient) {
  }

  getTone(msg: string) {
    this.headers = this.headers.set('Accept','application/json');
    this.headers = this.headers.set('Content-Type','application/json');
    this.headers = this.headers.set('mode','cors');
    return new Promise(resolve => {
      this.http.post(this.apiUrl, {'texts': [msg]}, {headers: this.headers}).subscribe((resp: any) => {
        switch (resp.mood) {
          case 'happy':
            if (this.mood < this.max) {
              this.mood++;
            }
            break;
          case 'unhappy':
            if (this.mood > this.min) {
              this.mood--;
            }
            break;
        }
        resolve(resp.mood);
      });
    });
  }

  get ConversationMood(): number {
    return this.mood;
  }

}
