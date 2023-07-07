import {Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  public selectedIndex = 0;
  onChange(index: number) {
    this.selectedIndex = index;
  }
}
