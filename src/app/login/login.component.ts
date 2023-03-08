import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private title:Title) { 
  }

  /**
   * Set the title of component page
   */
  ngOnInit(): void {
    this.title.setTitle("Login");
  }

}
