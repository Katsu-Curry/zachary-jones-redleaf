import { Component, OnInit } from '@angular/core';
import { OrderSummary, DataAccessService } from 'src/app/services/data-service/data-access.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public data: OrderSummary[] = [];
  
  constructor(private dataService: DataAccessService) {}

  async loadData() {
    this.dataService.orders$.subscribe((data) => {this.data = data as OrderSummary[]});
  }

  ngOnInit(): void {
    this.loadData();
  }

}
