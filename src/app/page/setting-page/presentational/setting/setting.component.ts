import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Setting } from '../../../../model/setting.model';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  constructor() { }

  @Input() setting$?: Observable<Setting>;

  ngOnInit(): void {
    this.setting$?.subscribe(x => console.log(x));
  }

}
