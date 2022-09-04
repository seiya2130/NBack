import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Setting } from 'src/app/model/setting.model';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  constructor() { }
  @Input() setting$!: Observable<Setting>;
  questionCount = 0;

  ngOnInit(): void {
    this.setting$?.subscribe(x =>{

      //問題を作成

      //問題を表示

      const interval = setInterval(() =>{
        this.countUp();

        if(this.questionCount >= x.questionCount){
          clearInterval(interval);
        }}, 2500);
      });
  }

  countUp(): void {
    this.questionCount++;
  }
}
