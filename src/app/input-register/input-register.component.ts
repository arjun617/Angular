import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-register',
  templateUrl: './input-register.component.html',
  styleUrls: ['./input-register.component.css']
})
export class InputRegisterComponent implements OnInit {
  @Input() place:string
  constructor() { }

  ngOnInit() {
  }

}
