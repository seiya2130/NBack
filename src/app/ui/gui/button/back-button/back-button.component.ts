import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {

  constructor() { }
  @Input() buttonText: string = "";
  @Output() event = new EventEmitter<String>();

  ngOnInit(): void {
  }

  submit() : void{
    this.event.emit();
  }

}
