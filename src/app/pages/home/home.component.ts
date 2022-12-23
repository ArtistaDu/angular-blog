import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { articles, IArticleList } from 'src/app/data/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articles!: IArticleList[];

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.articles = articles.slice(1, 4)
  }

  routePost(id: string) {
    this.route.navigateByUrl(`/post/${id}`);
  }

}
