import { Component, OnInit } from '@angular/core';
import {TabledisplayService} from '../../services/tabledisplay.service';

@Component({
  selector: 'app-tabledisplay',
  templateUrl: './tabledisplay.component.html',
  styleUrls: ['./tabledisplay.component.css']
})
export class TabledisplayComponent implements OnInit {

  tableData:any;

  constructor(private tabledisplayService: TabledisplayService) { }

  ngOnInit(): void {
    this.tabledisplayService.getTableData().then(data=>{
        this.tableData = data;
        console.log(this.tableData);
    })
  }

}
