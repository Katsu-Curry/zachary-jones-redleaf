import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { DataAccessService, OrderSummary } from 'src/app/data-access.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public data: OrderSummary[] = [];
  
  constructor(private dataService: DataAccessService, private authService: AuthenticationService) {}

  async loadData() {
    this.dataService.orders$.subscribe(data => {
      this.data = data as OrderSummary[];
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

}
