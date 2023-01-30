import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-employee-tickets',
  templateUrl: './employee-tickets.component.html',
  styleUrls: ['./employee-tickets.component.css']
})
export class EmployeeTicketsComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllPending().subscribe((res: any) => {
      this.users = res.users;
    });
  }

  users: Array<User>;

  acceptUser(userId) {
    const data = {
      userId: userId,
    };
    this.userService.accept(data).subscribe((res: any) => {
      if (res.message == 'Ok') {
        alert('Uspesno prihvacen korisnik.');
      } else if (res.message == 'Error') alert('Greska.');
      window.location.reload();
    });
  }

  rejectUser(userId) {
    const data = {
      userId: userId,
    };
    this.userService.reject(data).subscribe((res: any) => {
      if (res.message == 'Ok') {
        alert('Uspesno odbijen korisnik.');
      } else if (res.message == 'Error') alert('Greska.');
      window.location.reload();
    });
  }
}
