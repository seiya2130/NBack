import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Setting } from 'src/app/model/setting.model';
import { Shape } from 'src/app/model/shape';
import { Question } from '../../../../model/question.model';
import { Answer } from '../../../../model/answer.model';

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
  currentAnswer: Answer = {
    isLetter: false,
    isAudio: false,
    isPlace: false,
    isColor: false,
    isShape: false
  };

  nbackCount!: number;
  isLetter!: boolean;
  isAudio!: boolean;
  isPlace!: boolean;
  isColor!: boolean;
  isShape!: boolean;

  questionList: Question[] = [];
  answerList: Answer[] = [];

  correctAnswerCount: number = 0;

  ngOnInit(): void {

    this.setting$.subscribe(x =>{

      this.nbackCount = x.nBackCount;
      this.isLetter = x.isLetter;
      this.isAudio = x.isAudio;
      this.isPlace = x.isPlace;
      this.isColor = x.isColor;
      this.isShape = x.isShape;

      const interval = setInterval(() =>{

        if(this.questionCount >= x.questionCount + this.nbackCount){
          clearInterval(interval);
          this.checkAnswer();
        }

        if(this.questionCount >= 1){
          this.answerList.push(this.currentAnswer);
          this.currentAnswer = {
            isLetter: false,
            isAudio: false,
            isPlace: false,
            isColor: false,
            isShape: false
          }
        }

        this.currentQuestion = {
          letter: x.isLetter ? this.getRandomLetter() : "",
          audio: "",
          place: "",
          color: "",
          shape: Shape.Square
        };

        this.questionList.push(this.currentQuestion);
        this.countUp();
        }, 3000);
      });
  }

  countUp(): void {
    this.questionCount++;
  }

  getRandomLetter(): string {
    const letterList = [
      "A" , "B", "C", "D", "E", "F", "G",
      "H", "I", "J", "K", "L", "M", "N",
      "O", "P", "Q", "R", "S", "T", "U",
      "V", "W", "X", "Y", "Z"
    ]

    return letterList[Math.floor(Math.random() * letterList.length)];
  }

  checkAnswer(): void {
    for(let i = 0; i < this.answerList.length; i++){
      //文字
      if((this.questionList[i].letter === this.questionList[i + this.nbackCount].letter) !== this.answerList[i].isLetter){
        continue;
      }

      this.correctAnswerCount++;
    }
    //結果ページ遷移
  }

}
