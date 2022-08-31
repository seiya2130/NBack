import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-forward-button',
  templateUrl: './forward-button.component.html',
  styleUrls: ['./forward-button.component.scss']
})
export class ForwardButtonComponent implements OnInit {

  constructor() { }
  @Input() buttonText: string = "";
  @Output() event = new EventEmitter<String>();

  ngOnInit(): void {
  }

  submit() : void{
    this.event.emit();
  }
}
