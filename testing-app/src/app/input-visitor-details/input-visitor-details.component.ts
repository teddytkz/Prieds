import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.css'],
})
export class InputVisitorDetailsComponent implements OnInit {
  user = {
    nik: '',
    name: '',
    birth_date: '',
    gender: '',
    address: '',
  };
  submitted = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  saveUser(): void {
    const data = {
      nik: this.user.nik,
      nama: this.user.name,
      tanggal_lahir: this.user.birth_date,
      jenis_kelamin: this.user.gender,
      alamat: this.user.address,
    };

    this.userService.create(data).subscribe(
      (response) => {
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
