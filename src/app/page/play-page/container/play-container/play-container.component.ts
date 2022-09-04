import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Setting } from 'src/app/model/setting.model';
import { SettingService } from 'src/app/service/setting.service';

@Component({
  selector: 'app-play-container',
  templateUrl: './play-container.component.html',
  styleUrls: ['./play-container.component.scss']
})
export class PlayContainerComponent implements OnInit {

  constructor(
    private settingService: SettingService
  ) { }
  setting$!: Observable<Setting>;

  ngOnInit(): void {
    this.setting$ = this.settingService.getSetting().asObservable();
  }

}
