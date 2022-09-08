import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
      });
  }

  navigatePage(page: string): void {

    switch(page){
      case "setting":
        this.router.navigate([ 'setting' ]);
        break;
      case "play":
        this.router.navigate([ 'play' ]);
        break;
    }

  }
}
