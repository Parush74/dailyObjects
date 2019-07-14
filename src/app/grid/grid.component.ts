import { Component, OnInit, HostListener } from '@angular/core';
import { GridService } from './grid.service';
import { environment } from 'src/environments/environment';
import { Endpoints } from '../endpoints';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  baseUriImage = environment.imageApi;
  innerWidth;
  data;
  columns;
  limitedStock= Endpoints.limitedStock;
  start = 0;
  constructor(private gridService: GridService) { }

  ngOnInit() {
    this.setColumns(window.innerWidth);
    this.fetchDetails();
  }

  fetchDetails() {
    this.gridService.getList(this.start).subscribe(response => {
      if (this.data) {
        this.data.data.push(...response['data']);
      }
      else
        this.data = response;
        console.log(this.data)
    })
  }


  //making grid responsive
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setColumns(window.innerWidth);
  }

  //setting columns according to window size
  setColumns(width) {
    if (width > 1024)
      this.columns = 5;
    else if (width > 760)
      this.columns = 3;
    else
      this.columns = 1;
  }

  onScrollDown() {
    if (this.data.count > this.data.data.length) {
      this.start = this.data.data.length;
      this.fetchDetails();
    }
  }
}