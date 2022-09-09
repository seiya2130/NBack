import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Setting } from 'src/app/model/setting.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor() { }
  @Input() setting$!: Observable<Setting>;
  @Input() correctAnswerCount!: number;

  questionCount!: number;

  ngOnInit(): void {
    this.setting$.subscribe(x => {
      this.questionCount = x.questionCount;
    });
  }

}
