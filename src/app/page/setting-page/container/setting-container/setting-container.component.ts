import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { SettingService } from '../../../../service/setting.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Setting } from '../../../../model/setting.model';
import { SettingComponent } from '../../presentational/setting/setting.component';

@Component({
  selector: 'app-setting-container',
  templateUrl: './setting-container.component.html',
  styleUrls: ['./setting-container.component.scss']
})
export class SettingContainerComponent implements OnInit {

  @ViewChild(SettingComponent) settingComponent!: SettingComponent;
  @Output() event = new EventEmitter<String>();

  setting$!: Observable<Setting>;

  constructor(
    private settingService: SettingService
  ) {

  }

  forwardButtonText: string = "スタート";
  ngOnInit(): void {
    this.setting$ = this.settingService.getSetting().asObservable();
  }

  startPlay(setting: Setting) :void {
    this.settingService.setSetting(setting);
    this.navigatePlayPage();
  }

  submit(): void {
    this.settingComponent.start();
  }

  navigatePlayPage(): void {
    this.event.emit();
  }

}
