import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../../../service/setting.service';
import { Observable } from 'rxjs';
import { Setting } from '../../../../model/setting.model';

@Component({
  selector: 'app-setting-container',
  templateUrl: './setting-container.component.html',
  styleUrls: ['./setting-container.component.scss']
})
export class SettingContainerComponent implements OnInit {

  setting$?: Observable<Setting>;

  constructor(
    private SettingService: SettingService
  ) {

  }

  forwardButtonText: string = "スタート";
  ngOnInit(): void {
    this.setting$ = this.SettingService.getSetting().asObservable();
  }

  // Outputでsetする

}
