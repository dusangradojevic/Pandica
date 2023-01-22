import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.initLoggedUser();

    this.currentPage = localStorage.getItem('currentPage');
  }

  user: User = null;
  notifications: Array<string> = new Array();
  currentPage: string = '';

  goToLogin() {
    localStorage.setItem('currentPage', 'login');
    this.router.navigate(['login']);
  }

  goToRegistration() {
    localStorage.setItem('currentPage', 'register');
    this.router.navigate(['register']);
  }

  toHomePage() {
    if (localStorage.getItem('loggedUser') != null) {
      const userType = JSON.parse(localStorage.getItem('loggedUser')).type;
      this.router.navigate([userType]);
    } else {
      this.router.navigate(['']);
    }
  }

  logout() {
    localStorage.removeItem('loggedUser');
    this.router.navigate(['']);
  }

  goToUserProfile() {
    this.router.navigate(['userProfile']);
  }

  goToSearch() {
    this.router.navigate(['readerSearch']);
  }

  goToRentedBooks() {
    this.router.navigate(['rentedBooks']);
  }

  goToRentHistory() {
    this.router.navigate(['rentHistory']);
  }

  initLoggedUser() {
    this.user = null;
    if (localStorage.getItem('loggedUser') != null) {
      this.user = JSON.parse(localStorage.getItem('loggedUser'));

      const dataUser = {
        id: this.user.id,
      };
      this.userService.getUserById(dataUser).subscribe((res: any) => {
        if (res.message == 'Ok') {
          localStorage.setItem('loggedUser', JSON.stringify(res.user));
          this.user = res.user;
        }
      });
    }
  }
}
