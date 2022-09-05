import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Setting } from 'src/app/model/setting.model';
import { Question } from '../../../../model/question.model';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  constructor() { }
  @Input() setting$!: Observable<Setting>;
  questionCount = 0;
  currentQuestion!: Question;
  isLetter!: boolean;
  isAudio!: boolean;

  questionList!: Question[];

  ngOnInit(): void {
    this.setting$.subscribe(x =>{

      this.isLetter = x.isLetter;
      this.isAudio = x.isAudio;

      const interval = setInterval(() =>{

        if(this.questionCount >= 1){
          //回答を記録(ボタンの状態を取得、ボタンをリセット)

        }

        this.countUp();

        // 問題作成
        const question: Question = {
          letter: x.isLetter ? this.GetRandomLetter() : "",
        };

        //問題表示
        this.currentQuestion = question;

        //問題保存
        this.questionList.push(question);

        if(this.questionCount >= x.questionCount){
          clearInterval(interval);
          //回答結果集計
        }}, 3000);
      });
  }

  countUp(): void {
    this.questionCount++;
  }

  GetRandomLetter(): string {
    const letterList = [
      "A" , "B", "C", "D", "E", "F", "G",
      "H", "I", "J", "K", "L", "M", "N",
      "O", "P", "Q", "R", "S", "T", "U",
      "V", "W", "X", "Y", "Z"
    ]

    return letterList[Math.floor(Math.random() * letterList.length)];
  }
}
