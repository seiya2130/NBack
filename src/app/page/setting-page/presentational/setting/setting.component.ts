import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  nbackCountList = [...Array(5)].map((_, i) => i + 1);

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
