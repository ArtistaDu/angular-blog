import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-might-like-cards',
  templateUrl: './might-like-cards.component.html',
  styleUrls: ['./might-like-cards.component.scss']
})
export class MightLikeCardsComponent implements OnInit {
  @Input() title!: string
  @Input() cardDescription!: string
  @Input() imgUrl!: string



  constructor() { }

  ngOnInit(): void {
  }

}
