import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-principal',
  templateUrl: './card-principal.component.html',
  styleUrls: ['./card-principal.component.scss']
})


export class CardPrincipalComponent implements OnInit {
  @Input() title!: string
  @Input() cardDescription!: string
  @Input() averageTime!: string
  @Input() author!: string
  @Input() imgUrl!: string


  constructor() { }

  ngOnInit(): void {
  }

}
