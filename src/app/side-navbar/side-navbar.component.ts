import { Component, OnInit } from '@angular/core';
import { navItemsData } from './sideNavbarData';

export interface SideNavBarItems {
  icon: string;
  label: string;
  value?: number;
  selected: boolean;
  category: string;
  navigateRoute?: string;
}

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss'],
})
export class SideNavbarComponent implements OnInit {
  constructor() {}
  navItems: SideNavBarItems[] = navItemsData;

  ngOnInit(): void {}
}
