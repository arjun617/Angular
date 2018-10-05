import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-div-bottom-right",
  templateUrl: "./div-bottom-right.component.html",
  styleUrls: ["./div-bottom-right.component.css"]
})
export class DivBottomRightComponent implements OnInit {
  FirstName: string;
  LastName: string;
  Contact: string;
  NewPass: string;
  dates: string[];
  months: string[];
  years: string[];
  gender:string[];
  constructor() {
    this.FirstName = "First name";
    this.LastName = "Surname";
    this.Contact = "Mobile number or email address";
    this.NewPass = "New Password";
    this.gender=["Male","Female","Other"];
    this.dates = Array.from(new Array(31), (val, index) => index + 1).map(
      String
    );
    this.months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    this.years=Array.from(new Array(114), (x,i) => i + 1905).map(String)
  }



  ngOnInit() {}
}
