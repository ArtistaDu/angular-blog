import { IArticleList } from './../../data/data';
import { Component, Input, OnInit } from '@angular/core';
import { articles } from 'src/app/data/data';



@Component({
  selector: 'app-card-principal',
  templateUrl: './card-principal.component.html',
  styleUrls: ['./card-principal.component.scss']
})


export class CardPrincipalComponent implements OnInit {
  @Input() id: string = '0'
  article!: IArticleList[]

  constructor() { }

  ngOnInit(): void {
    this.article = articles
  }

}
