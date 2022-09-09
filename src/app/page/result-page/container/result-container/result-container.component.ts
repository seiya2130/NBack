import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Setting } from 'src/app/model/setting.model';
import { SettingService } from 'src/app/service/setting.service';

@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.scss']
})
export class ResultContainerComponent implements OnInit {

  constructor(
    private settingService : SettingService
    ) { }
  @Output() event = new EventEmitter<string>();
  @Input() correctAnswerCount!: number;

  setting$!: Observable<Setting>;
  forwardButtonText = "同じ設定でスタート";
  backButtonText = "設定に戻る";

  ngOnInit(): void {
    this.setting$ = this.settingService.getSetting().asObservable();
  }

  navigatePlayPage(): void {
    this.event.emit("play");
  }

  navigateSettingPage(): void {
    this.event.emit("setting");
  }

}
