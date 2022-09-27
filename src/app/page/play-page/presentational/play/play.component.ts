import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { _MatSlideToggleRequiredValidatorModule } from '@angular/material/slide-toggle';
import { Observable } from 'rxjs';
import { Answer } from 'src/app/model/answer.model';
import { Question } from 'src/app/model/question.model';
import { Setting } from 'src/app/model/setting.model';
import { Shape } from 'src/app/model/shape';
import { Place } from '../../../../model/place';


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

  place: typeof Place = Place;

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
          letter: this.isLetter ? this.getRandomLetter() : "",
          audio: this.isAudio ? this.speechNumber() : "",
          place: this.isPlace? this.getPlace() : Place.Center,
          color: this.isColor ? this.getColor() : "black",
          shape: this.isShape ? this.getShape() : Shape.Square
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

      if(this.isLetter &&
        (this.questionList[i].letter === this.questionList[i + this.nbackCount].letter) !== this.answerList[i].isLetter){
        continue;
      }

      if(this.isAudio &&
        (this.questionList[i].audio === this.questionList[i + this.nbackCount].audio) !== this.answerList[i].isAudio){
        continue;
      }

      if(this.isColor &&
        (this.questionList[i].color === this.questionList[i + this.nbackCount].color) !== this.answerList[i].isColor){
        continue;
      }

      if(this.isShape &&
        (this.questionList[i].shape === this.questionList[i + this.nbackCount].shape) !== this.answerList[i].isShape){
        continue;
      }

      if(this.isPlace &&
        (this.questionList[i].place === this.questionList[i + this.nbackCount].place) !== this.answerList[i].isPlace){
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

  getShape(): Shape {

    // TODO ループで取得する
    let shapeList: number[] = [
      Shape.Circle,
      Shape.Square,
      Shape.Triangle
    ];

    const index = Math.floor(Math.random() * shapeList.length);

    return shapeList[index];
  }

  getColor(): string {

    let colorList: string[] = [
      "red",
      "blue",
      "green"
    ];

    const index = Math.floor(Math.random() * colorList.length);

    return colorList[index];
  }

  getPlace(): Place {
    let placeList: Place[] = [
      Place.UpperLeft,
      Place.TopCenter,
      Place.UpperRight,
      Place.Left,
      Place.Center,
      Place.Right,
      Place.BottomLeft,
      Place.BottomCenter,
      Place.BottomRight
    ];

    const index = Math.floor(Math.random() * placeList.length);

    return placeList[index];
  }
}
