import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-header',
  templateUrl: './body-header.component.html',
  styleUrls: ['./body-header.component.scss'],
})
export class BodyHeaderComponent implements OnInit {
  @Input() bodyHeader!: string;
  @Input() buttonIcon!: string;
  @Input() buttonDescription!: string;
  constructor() {}

  ngOnInit(): void {}
}
