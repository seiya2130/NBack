import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.scss']
})
export class ResultContainerComponent implements OnInit {

  constructor() { }
  @Output() event = new EventEmitter<number>();

  buttonText = "同じ設定でスタート";
  ngOnInit(): void {
  }

  navigatePlayPage(): void {
    this.event.emit();
  }

}
