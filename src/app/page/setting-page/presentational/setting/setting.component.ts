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
  questionCountList = [...Array(25)].map((_, i) => i + 1);

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

  start(): void {
    this.validateSeting();
  }

  validateSeting(): void {

    let isError = false;

    if (this.nBackCount == undefined || this.nBackCount <= 0)
    {
      isError = true;
    }

    if (this.questionCount == undefined || this.questionCount <= 0)
    {
      isError = true;
    }

    const booleanSettingList: boolean[] = [
      this.isLetter,
      this.isAudio,
      this.isPlace,
      this.isColor,
      this.isShape,
    ]

    const trueCount: number = booleanSettingList.filter(x => x == true).length;

    if(trueCount <= 0){
      isError = true;
    }

    if(isError){
      console.log("エラー")
    }
  }
}
