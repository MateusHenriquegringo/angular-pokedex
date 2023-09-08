import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  constructor(private service:ApiService){
  }

  listaDeInfos!:Array<any>

  ngOnInit(): void {
    this.service.getPokemons()
    .then(data => {
      this.listaDeInfos = data
      console.log(this.listaDeInfos)
    } )
  }

}
