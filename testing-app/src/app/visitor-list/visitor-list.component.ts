import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css'],
})
export class VisitorListComponent implements OnInit {
  users: any;

  visitorColumns: string[] = ['nik', 'name', 'birth_date', 'gender', 'address'];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.findUsers();
  }

  findUsers(): void {
    this.userService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.users = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
