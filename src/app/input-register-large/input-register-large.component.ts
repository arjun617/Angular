import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-register-large',
  templateUrl: './input-register-large.component.html',
  styleUrls: ['./input-register-large.component.css']
})
export class InputRegisterLargeComponent implements OnInit {
  @Input() place:string;
  constructor() { }

  ngOnInit() {
  }

}
