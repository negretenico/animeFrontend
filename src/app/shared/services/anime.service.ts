import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAnime } from '../Interfaces/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
   animeLink: string = "http://localhost:5000/api/anime";

  constructor(private http:HttpClient) { 

  }
  
  getAllAnime():Observable<IAnime>
  {
    return this.http.get<IAnime>(this.animeLink);
  }
}
