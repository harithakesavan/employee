import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-displaydetails',
  templateUrl: './displaydetails.component.html',
  styleUrls: ['./displaydetails.component.css']
})
export class DisplaydetailsComponent implements OnInit {
  public name:string=""
  public address:string=""
  public date:string=""
  public role:string=""
  public mobile:any
  public gen:any
  public mobilenum:any


  constructor(private http:HttpClient,private formbuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.name=localStorage.getItem("fullname")!;
    this.address=localStorage.getItem("address")!;
    this.date=localStorage.getItem('date')!;
    this.role=localStorage.getItem('role')!;
    this.mobile=(localStorage.getItem(('mob')));
    this.gen=localStorage.getItem('gender');
    console.log(this.mobile);
    this.mobilenum=this.mobile.split(",")
    console.log(typeof(this.mobilenum));
    
 
    
    
    
    
   
    

  }

}
