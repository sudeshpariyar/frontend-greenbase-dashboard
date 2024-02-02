import { Component, OnInit, ViewChild } from '@angular/core';

export interface Transaction {
  name: string;
  date: number;
  amount: number;
  status: string;
}
const TRANSACTION_DATA: Transaction[] = [
  { amount: 184.5, name: 'Jimmy H.', date: 1.0079, status: 'Paid' },
  { amount: 24.55, name: 'Eric C.', date: 4.0026, status: 'Pending' },
  { amount: 354.2, name: 'Adam J.', date: 6.941, status: 'Paid' },
  { amount: 44.65, name: 'David G.', date: 9.0122, status: 'Pending' },
  { amount: 54.5, name: 'John L.', date: 10.811, status: 'Paid' },
  { amount: 645.2, name: 'Dimbag D.', date: 12.0107, status: 'Paid' },
];

@Component({
  selector: 'app-recent-transaction',
  templateUrl: './recent-transaction.component.html',
  styleUrls: ['./recent-transaction.component.scss'],
})
export class RecentTransactionComponent implements OnInit {
  constructor() {}
  displayedColumns: string[] = ['name', 'date', 'amount', 'status'];
  dataSource = TRANSACTION_DATA;

  ngOnInit(): void {}
}
