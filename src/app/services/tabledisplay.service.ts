import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabledisplayService {

  constructor() { }

  getTableData(){
    //call to the api to load intial data
    return fetch('https://api.tzstats.com/tables/op?columns=row_id,time,type,sender,volume&receiver=tz1gfArv665EUkSg2ojMBzcbfwuPxAvqPvjo&type=transaction&limit=10').then(response => response.json());
  }

  updateTableData(cursordata){
    //call api to update table using cursor
    return fetch('https://api.tzstats.com/tables/op?columns=row_id,time,type,sender,volume&receiver=tz1gfArv665EUkSg2ojMBzcbfwuPxAvqPvjo&type=transaction&limit=10&cursor.lte='+cursordata);
  }
}
