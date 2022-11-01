import { Component, OnInit } from '@angular/core';
import {NgForm,FormBuilder,Validators, FormGroup, FormArray } from '@angular/forms';

import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})

// export class AppComponent  {
export class TransferComponent implements OnInit {

  ontractService: any;
  showMsg: boolean = false;
  dataget=[];
  dataUrl='';
  errorMessage = '';
  constructor(private http: HttpClient,private formBuilder: FormBuilder ){}
  // constructor() {}
  
  transferForm:FormGroup
  ngOnInit() {
  this.transferForm = this.formBuilder.group({
    // landName: ['', [Validators.required]],
    // address: ['',[Validators.required]],
    // size: ['', [Validators.required]],
    sender: [''],
    receiver: [''],

   
    // id: ['', [Validators.required]]
  
  ids: this.formBuilder.array([
    this.formBuilder.control('')
  ]),
  values: this.formBuilder.array([
    this.formBuilder.control('')
  ])

})
}


get ids() {
  return this.transferForm.get('ids') as FormArray;
}
addId() {
  this.ids.push(this.formBuilder.control(''));
}

get values() {
  return this.transferForm.get('values') as FormArray;
}
addValue() {
  this.values.push(this.formBuilder.control(''));
}

onSubmit(){

    const formData = new FormData();
     
  
    formData.append('sender',this.transferForm.get('receiver').value);

    formData.append('sender',this.transferForm.get('ids').value);

    formData.append('sender',this.transferForm.get('values').value);

    // formData.append('file', this.verifyForm.get('fileSource').value);
  
    console.log("govind",this.transferForm)


     const headers = {'Content-Type': 'application/json'} 
    
  const body=JSON.stringify(this.transferForm.value);

     this.http.post('http://localhost:1869/api/v1/erc/batchTransferFrom', body,{headers})

      .subscribe(res => {
            alert("transfer suceessfully")  ;    // let showdata = res['result'].filedata.fileData
      

      })

  }

}
// Variable to store shortLink from api response




// OnClick of button Upload

