import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WindowService } from '../services/window.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private router: Router, private windowsService: WindowService) {}

  open(url, windowName, params): any {
    this.windowsService.nativeWindow.open(url, windowName, params);
  }

  ngOnInit(): void {}

  changePage(path) {
    this.router.navigate(['/' + path]);
  }
}
