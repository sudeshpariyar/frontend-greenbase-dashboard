import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
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
export class SideNavbarComponent implements OnInit, AfterViewInit {
  constructor() {}
  navItems: SideNavBarItems[] = navItemsData;
  smallSideNavbar!: boolean;

  ngOnInit(): void {
    this.detectScreenSize();
  }
  @HostListener('window:resize', [])
  private onResize() {
    this.detectScreenSize();
  }

  ngAfterViewInit() {
    this.detectScreenSize();
  }

  private detectScreenSize() {
    if (window.innerWidth < 769) {
      this.smallSideNavbar = true;
    } else this.smallSideNavbar = false;
  }
}
