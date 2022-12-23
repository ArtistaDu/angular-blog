import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { articles, IArticleList } from 'src/app/data/data';

@Component({
  selector: 'app-container-recommendations',
  templateUrl: './container-recommendations.component.html',
  styleUrls: ['./container-recommendations.component.scss']
})
export class ContainerRecommendationsComponent implements OnInit {

  constructor(private route: Router) { }

  articles!: IArticleList[];

  ngOnInit(): void {
    this.articles = articles.slice(4,7)
  }

  routePost(id: string) {
    this.route.navigateByUrl(`/post/${id}`);
  }
}
