import { Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild(SettingComponent)
  settingComponent!: SettingComponent;

  setting$?: Observable<Setting>;

  constructor(
    private SettingService: SettingService
  ) {

  }

  forwardButtonText: string = "スタート";
  ngOnInit(): void {
    this.setting$ = this.SettingService.getSetting().asObservable();
  }

  submit(): void {
    this.settingComponent.start();
  }

}
