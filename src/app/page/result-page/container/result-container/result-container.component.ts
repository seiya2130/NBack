import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.scss']
})
export class ResultContainerComponent implements OnInit {

  constructor() { }
  @Output() event = new EventEmitter<string>();

  forwardButtonText = "同じ設定でスタート";
  backButtonText = "設定に戻る";
  ngOnInit(): void {
  }

  navigatePlayPage(): void {
    this.event.emit("play");
  }

  navigateSettingPage(): void {
    this.event.emit("setting");
  }

}
