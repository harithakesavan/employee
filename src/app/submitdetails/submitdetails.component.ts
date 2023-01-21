import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submitdetails',
  templateUrl: './submitdetails.component.html',
  styleUrls: ['./submitdetails.component.css']
})
export class SubmitdetailsComponent implements OnInit {
  public detailsform!:FormGroup
  public mob:any
  public gender:string=""
  @ViewChild('fullname') fullnameKey!:ElementRef
  @ViewChild('role') roleKey!:ElementRef
 @ViewChild('date') dateKey!:ElementRef
 @ViewChild('address') addressKey!:ElementRef
 @ViewChild('mobiless') mobilessKey!:ElementRef
 @ViewChild('gen')genKey!:ElementRef







  constructor(private router:Router,private formbuilder:FormBuilder,private http:HttpClient) { }
  get mobilessControls(){
    return (<FormArray>this.detailsform.get('mobiless')).controls;
  }

  ngOnInit(): void {
    this.detailsform=this.formbuilder.group({
       fullname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
   role:['',Validators.required],
    date:['',Validators.required],
   gen:['',Validators.required],
    address:['',Validators.required],
    mobiless:new FormArray([])


    })


  }
  submit(){
    if(this.detailsform.valid){
      this.mob=(this.detailsform.value.mobiless);
      this.gender=(this.detailsform.value.gen);
    
      localStorage.setItem("mob",this.mob);
      localStorage.setItem("gender",JSON.stringify(this.gender));
      localStorage.setItem("fullname",this.fullnameKey.nativeElement.value);

localStorage.setItem("role",this.roleKey.nativeElement.value);
localStorage.setItem("date",this.dateKey.nativeElement.value);
localStorage.setItem("address",this.addressKey.nativeElement.value);

localStorage.setItem('gen',this.genKey.nativeElement.value);
console.log(this.detailsform.value);






this.router.navigateByUrl('displaydetails')


alert("success")
    }
    else{
      alert("invalid form")
    }
  }
  addnum(){
    const control=new FormControl(null,[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10)]);
(<FormArray>this.detailsform.get('mobiless')).push(control);

  }

}
