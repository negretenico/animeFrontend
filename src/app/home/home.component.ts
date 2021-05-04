import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  imageObjects: Object[] = []
  isReadMore = true

  constructor(private myService: AnimeService) { 

    this.myService.getAllAnime()
      .subscribe((res : any) => {
        this.animeList = res;
        this.animeList.forEach((anime)=> 
        {
          this.imageObjects.push({
            title:anime.Name,
            image: anime.ImageUrl,
            thumbImage:  anime.ImageUrl,})
        })
    })

  }

  ngOnInit(): void {
  }

  showText() {
     this.isReadMore = !this.isReadMore
  }

  goToLink(event: Object)
  {

    window.open(this.animeList[Number(event)].CrunchyRollUrl, "_blank");

    console.log(this.animeList[Number(event)]);
  }


}
