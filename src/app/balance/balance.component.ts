import { Component, OnInit } from '@angular/core';
import {NgForm,FormBuilder,Validators, FormGroup, FormArray } from '@angular/forms';

import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  ontractService: any;
  showMsg: boolean = false;
  dataget=[];
  dataUrl='';
  errorMessage = '';
  constructor(private http: HttpClient,private formBuilder: FormBuilder ){}
  // constructor() {}
  
  balanceForm:FormGroup
  ngOnInit() {
  this.balanceForm = this.formBuilder.group({
  
   
    // id: ['', [Validators.required]]
    accounts: this.formBuilder.array([
      this.formBuilder.control('')
  ]),
  
  ids: this.formBuilder.array([
    this.formBuilder.control('')
  ]),
 

})
}

get accounts() {
  return this.balanceForm.get('accounts') as FormArray;
}
addAccount() {
  this.accounts.push(this.formBuilder.control(''));
}


get ids() {
  return this.balanceForm.get('ids') as FormArray;
}
addId() {
  this.ids.push(this.formBuilder.control(''));
}
showdata=''
errormsg=false
showhide=false

onSubmit(){

    const formData = new FormData();
     
  
    // formData.append('accounts',this.transferFormMultipleReceipient.get('receiver').value);

    formData.append('accounts',this.balanceForm.get('ids').value);


    // formData.append('file', this.verifyForm.get('fileSource').value);
  
    console.log("govind",this.balanceForm)


     const headers = {'Content-Type': 'application/json'} 
    
  const body=JSON.stringify(this.balanceForm.value);

     this.http.post('http://localhost:1869/api/v1/erc/balanceOFBatch', body,{headers})

      .subscribe(res => {
            console.log("ressss",res['result'].value);
            // this.showdata  = res['result'].filedata.fileData
            if(res['result'].value!=null){
              //  alert('valid ! '+ res['result'].filedata.fileData);
              this.errormsg=false
              this.showhide=true
             this.showdata  = res['result'].value
            
            }else{
              // alert('Invalid ! ' +' '+'{ }');
              this.showhide=false
              this.errormsg=true
             
            }
            

            // alert("submit suceessfully"+ res['result'].value) ;    // let showdata = res['result'].filedata.fileData
      

      })

  }



}
