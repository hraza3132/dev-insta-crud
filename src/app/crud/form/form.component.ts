import { Component, Input, OnInit ,Output, EventEmitter} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder, private crudService : CrudService,) { }
  @Input() nameId : any;
  @Output() selectedAddress = new EventEmitter();
  isParent: boolean = true;
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    email: [''],
    birthDate: [''],
    avtar: [''],
    country: [''],
  });

  ngOnInit(): void {
    console.log("hello ", this.nameId);
    if(this.nameId){
      this.updateuser()
    }
  }

  getSingleuser(id:any){
    this.crudService.getSingleUser(id).subscribe((res : any) =>{

      this.profileForm.patchValue(res);
    
    })
  }

  updateuser(){
    let data = this.profileForm.value;
    let id = this.nameId;
    this.crudService.updateUser(id, data).subscribe((res : any) => {
      this.profileForm.patchValue(res);
     
      // window.history.back();
    })
  }

  addUser(): void{
    this.selectedAddress.emit(this.isParent);
    let data = this.profileForm.value
    this.crudService.postUser(data).subscribe((res)=>{
     
      
      
    })
  }


  back(){
    this.selectedAddress.emit(this.isParent);
  }

}
