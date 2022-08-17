import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forward-button',
  templateUrl: './forward-button.component.html',
  styleUrls: ['./forward-button.component.scss']
})
export class ForwardButtonComponent implements OnInit {

  constructor() { }
  @Input() buttonText: string = "";

  ngOnInit(): void {
  }

}
