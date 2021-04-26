import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAnime } from '../Interfaces/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
   apiLink: string = "http://localhost:5000/api";

  constructor(private http:HttpClient) { 

  }
  
  getAllAnime():Observable<IAnime>
  {
    return this.http.get<IAnime>(this.apiLink);
  }
}
