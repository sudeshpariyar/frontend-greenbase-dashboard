import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { SidenavIndividualComponent } from './side-navbar/sidenav-individual/sidenav-individual.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BodyHeaderComponent } from './shared/body-header/body-header.component';
import { CustomCardComponent } from './shared/custom-card/custom-card.component';
import { DashboardSummaryComponent } from './dashboard/dashboard-summary/dashboard-summary.component';
import { MatDividerModule } from '@angular/material/divider';
import { CustomDataDisplayComponent } from './shared/custom-data-display/custom-data-display.component';
import { RecentTransactionComponent } from './dashboard/recent-transaction/recent-transaction.component';
import { TopProductByUnitComponent } from './dashboard/top-product-by-unit/top-product-by-unit.component';
import { MatTableModule } from '@angular/material/table';
import { StatusHighlightDirective } from './directives/status-highlight.directive';
import { OrderOverTimeChartComponent } from './dashboard/order-over-time-chart/order-over-time-chart.component';
import { LastSevenDaySalesChartComponent } from './dashboard/last-seven-day-sales-chart/last-seven-day-sales-chart.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavbarComponent,
    SidenavIndividualComponent,
    DashboardComponent,
    BodyHeaderComponent,
    CustomCardComponent,
    DashboardSummaryComponent,
    CustomDataDisplayComponent,
    RecentTransactionComponent,
    TopProductByUnitComponent,
    StatusHighlightDirective,
    OrderOverTimeChartComponent,
    LastSevenDaySalesChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule,
    MatDividerModule,
    MatTableModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
