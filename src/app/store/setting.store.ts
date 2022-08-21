import { BehaviorSubject, Subject } from "rxjs";
import { Setting } from "../model/setting.model";

export class SettingStore {
  constructor() {}

  setting$ = new BehaviorSubject<Setting>({
    nBackCount: 1,
    questionCount: 5,
    isLetter: true,
    isAudio: false,
    isPlace: false,
    isColor: false,
    isShape: false
  });
}
