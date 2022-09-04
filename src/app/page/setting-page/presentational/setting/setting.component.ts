import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Setting } from '../../../../model/setting.model';
import { ErrorDialogComponent } from '../../../../ui/gui/dialog/error-dialog/error-dialog.component';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit , Setting {

  constructor(private dialog: MatDialog) {
  }

  @Input() setting$?: Observable<Setting>;
  @Output() event = new EventEmitter<Setting>();

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

    let errorMessageList: string[] = [];

    if (this.nBackCount == undefined || this.nBackCount <= 0)
    {
      errorMessageList.push("Nバックカウントは1以上の値を設定してください");
    }

    if (this.questionCount == undefined || this.questionCount <= 0)
    {
      errorMessageList.push("問題数は1以上の値を設定してください");
    }

    const booleanSettingList: boolean[] = [
      this.isLetter,
      this.isAudio,
      this.isPlace,
      this.isColor,
      this.isShape,
    ]

    const enableSettingCount: number = booleanSettingList.filter(x => x == true).length;

    if(enableSettingCount <= 0){
      errorMessageList.push("文字・音声・場所・色・形は最低でも1つ有効にしてください");
    }

    if(errorMessageList.length > 0){
      this.dialog.open(ErrorDialogComponent, {
        data: errorMessageList
      });

      return;
    }

    const setting: Setting = {
      nBackCount: this.nBackCount,
      questionCount: this.questionCount,
      isLetter: this.isLetter,
      isAudio: this.isAudio,
      isPlace: this.isPlace,
      isColor: this.isColor,
      isShape: this.isShape
    }

    this.event.emit(setting);
  }
}
