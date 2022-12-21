import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-cards-secundarios',
  templateUrl: './cards-secundarios.component.html',
  styleUrls: ['./cards-secundarios.component.scss']
})


export class CardsSecundariosComponent implements OnInit {
  @Input() title!: string
  @Input() averageTime!: string
  @Input() author!: string



  // title!: string
  // averageTime!: string

  constructor() { }

  ngOnInit(): void {

  }

}
