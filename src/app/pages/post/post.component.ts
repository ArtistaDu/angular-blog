import { ViewportScroller } from '@angular/common';
import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { articles } from 'src/app/data/data';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  private id: string | null = '0'
  img: string = ''
  author: string = ''
  title: string = ''
  averageTime: string = ''
  postContent: string = ''


  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private vps:ViewportScroller
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;}
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get('id')
      )

      this.setValues(this.id)
      this.vps.scrollToPosition([0, 0]);
  }



  setValues(id: string | null) {
    const result = articles.filter(article => article.id == id)
    console.log(result)

    this.author = result[0].author
    this.title = result[0].title
    this.img = result[0].imgPost
    this.postContent = result[0].postContent
    this.postContent = result[0].postContent
    this.averageTime = result[0].averageTime
  }

}
