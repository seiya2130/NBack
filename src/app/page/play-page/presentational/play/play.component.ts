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

  ngOnInit(): void {
    this.setting$?.subscribe(x =>{

      let count = 0;
      const countUp = () =>{
        console.log(count++);
      }

      const interval = setInterval(() =>{
        countUp();
        if(count >= x.questionCount){
          clearInterval(interval);
        }}, 2500);
      });
  }

}
