import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})




export class ListComponent implements OnInit {

  

  userList:any = [];
  isId:boolean = false;
  nameId:any = null
  
  constructor(public crudService: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.getAllPeople()
  }

  getAllPeople(){
    this.crudService.getPeople().subscribe((res :any) => {
     
      this.userList = res['users'];
      
    })
  }

  editName(id:any){
    this.nameId = id
    this.isId = true
  }

  addUser(){
  
    this.isId = true;
   
  }

  addressChangeEventHandler($event: any) {
    
    this.isId = false
  }
}

