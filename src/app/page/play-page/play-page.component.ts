import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play-page',
  templateUrl: './play-page.component.html',
  styleUrls: ['./play-page.component.scss']
})
export class PlayPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateResultPage(currentAnswerCount: number): void {
    this.router.navigate([ 'result' ], { queryParams: { currentAnswerCount: currentAnswerCount } });
  }

}
