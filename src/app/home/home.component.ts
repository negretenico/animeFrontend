import { Component, OnInit } from '@angular/core';
import { IAnime } from '../shared/Interfaces/anime';
import { AnimeService } from '../shared/services/anime.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  animeList: IAnime[] =[]
  isReadMore = true

  constructor(private myService: AnimeService) { 

    this.myService.getAllAnime()
      .subscribe((res : any) => {
        this.animeList = res;
    })

  }

  ngOnInit(): void {
  }

  showText() {
     this.isReadMore = !this.isReadMore
  }
}
