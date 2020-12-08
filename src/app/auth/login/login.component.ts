import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../auth.component.scss']

})
export class LoginComponent {

  constructor(private router: Router) {
  }

  onSubmit(): void {
    this.router.navigateByUrl('profile');
  }

}
