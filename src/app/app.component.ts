import { Component, OnInit } from '@angular/core';
import { RouterEvent } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend-gb-task';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/dashboard']);
  }
}
