import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Answer } from 'src/app/model/answer.model';
import { Question } from 'src/app/model/question.model';
import { Setting } from 'src/app/model/setting.model';
import { Shape } from 'src/app/model/shape';


@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  constructor() { }
  @Input() setting$!: Observable<Setting>;
  @Output() event = new EventEmitter<number>();

  currentQuestion!: Question;
  currentAnswer: Answer = {
    isLetter: false,
    isAudio: false,
    isPlace: false,
    isColor: false,
    isShape: false
  };

  nbackCount!: number;
  questionCount = 0;
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
      this.questionCount = Number(x.questionCount);
      this.isLetter = x.isLetter;
      this.isAudio = x.isAudio;
      this.isPlace = x.isPlace;
      this.isColor = x.isColor;
      this.isShape = x.isShape;

      const interval = setInterval(() =>{

        if(this.questionList.length >= this.questionCount + this.nbackCount){
          clearInterval(interval);
          this.checkAnswer();
        }

        if(this.questionList.length >= 1){
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
          audio: x.isAudio ? this.speechNumber() : "",
          place: "",
          color: "",
          shape: Shape.Square
        };

        this.questionList.push(this.currentQuestion);
        }, 3000);
      });
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

      if((this.questionList[i].audio === this.questionList[i + this.nbackCount].audio) !== this.answerList[i].isAudio){
        continue;
      }

      this.correctAnswerCount++;
    }

    this.navigateResultPage();
  }

  navigateResultPage(): void {
    this.event.emit(this.correctAnswerCount);
  }

  speechNumber(): string {
    if(this.questionList.length >= this.questionCount + this.nbackCount){ return "";}

    const uttr: SpeechSynthesisUtterance = new SpeechSynthesisUtterance();
    uttr.text = Math.floor(Math.random() * 10).toString();
    uttr.lang = "ja-JP";
    uttr.rate = 1;
    uttr.pitch = 1;
    uttr.volume = 1;

    window.speechSynthesis.speak(uttr);
    return uttr.text;
  };
}
