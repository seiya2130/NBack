import { Component, Input, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Setting } from '../../../../model/setting.model';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit , Setting {

  constructor() {
  }

  @Input() setting$?: Observable<Setting>;

  nBackCount!: number;
  questionCount!: number;
  isLetter!: boolean;
  isAudio!: boolean;
  isPlace!: boolean;
  isColor!: boolean;
  isShape!: boolean;

  ngOnInit(): void {
    this.setting$?.subscribe(x =>{
      this.nBackCount = x.nBackCount;
      this.questionCount = x.questionCount;
      this.isLetter = x.isLetter;
      this.isAudio = x.isAudio;
      this.isPlace = x.isPlace
      this.isColor = x.isColor;
      this.isShape = x.isShape;
    });
  }
}
