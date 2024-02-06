import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SideNavBarItems } from 'src/app/side-navbar/side-navbar.component';

@Component({
  selector: 'app-sidenav-individual',
  templateUrl: './sidenav-individual.component.html',
  styleUrls: ['./sidenav-individual.component.scss'],
})
export class SidenavIndividualComponent implements OnInit {
  @Input() navBarItems!: SideNavBarItems[];
  @Input() sideNavBarWidth!: boolean;
  handleNavSelect = (data: SideNavBarItems) => {
    this.navBarItems.forEach((element) => {
      if (element.label === data.label) element.selected = true;
      else element.selected = false;
    });
    this.router.navigate([data.navigateRoute]);
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
