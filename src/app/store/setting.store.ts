import { Subject } from "rxjs";
import { Setting } from "../model/setting.model";

export class SettingStore {
  constructor() {}

  state$ = new Subject<{ setting: Setting }>();
}
