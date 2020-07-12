import { Component, OnInit } from '@angular/core';
import {TabledisplayService} from '../../services/tabledisplay.service';
import { IPageInfo } from 'ngx-virtual-scroller';



@Component({
  selector: 'app-tabledisplay',
  templateUrl: './tabledisplay.component.html',
  styleUrls: ['./tabledisplay.component.css']
})
export class TabledisplayComponent implements OnInit {
  //data variable to get back the request from the api
  tableData:any;

  //javascript array to hold the  reply from the api with javascript objects
  tableasObject:any = [];

  //object used to push key value conversion into array of objects. 
  pushArray:any = {};

  constructor(private tabledisplayService: TabledisplayService) { }

  loading: boolean;


  ngOnInit(): void {
    this.tabledisplayService.getTableData().then(data=>{
        this.tableData = data; // bring in data from api
        for(let i=0; i<this.tableData.length; i++){
              //data comes back without key names in key value pair
              this.pushArray= {
                transaction:this.tableData[i][2],
                amount:this.tableData[i][4],
                date: this.tableData[i][1],
                address:this.tableData[i][3],
              }

              this.tableasObject.push(this.pushArray);

              //upadate state with values to use for cursor........

       }
       console.log(this.tableasObject);
    })
  }

  //method to update the scroll view
  fetchMore(event: IPageInfo) {
    if (event.endIndex !== this.tableasObject.length-1) return;
    this.loading = true;
    console.log(this.tableasObject[this.tableasObject.length][0]);
    //when at end of the situation load newer or older data
    this.tabledisplayService.updateTableData(this.tableasObject[this.tableasObject.length][0]).then(data => {
      this.tableData = data; // bring in data from api
      for(let i=0; i<this.tableData.length; i++){
        //data comes back without key names in key value pair
        this.pushArray= {
          transaction:this.tableData[i][2],
          amount:this.tableData[i][4],
          date: this.tableData[i][1],
          address:this.tableData[i][3],
        }

        this.tableasObject.push(this.pushArray);

      }
      this.loading = false;
  }, () => this.loading = false);
  
  }

  
 


}
