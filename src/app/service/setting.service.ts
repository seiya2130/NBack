import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Setting } from '../model/setting.model';
import { SettingStore } from '../store/setting.store';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private settingScore: SettingStore) { }

  getSetting(): BehaviorSubject<Setting> {
    return this.settingScore.setting$;
  }

  setSetting(setting: Setting): void{
    this.settingScore.setting$.next(setting);
  }
}
