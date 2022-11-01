import { Component, OnInit } from '@angular/core';
import {NgForm,FormBuilder,Validators, FormGroup, FormArray } from '@angular/forms';

import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-transfer-from-multiple-receipient',
  templateUrl: './transfer-from-multiple-receipient.component.html',
  styleUrls: ['./transfer-from-multiple-receipient.component.css']
})
export class TransferFromMultipleReceipientComponent implements OnInit {

 
  ontractService: any;
  showMsg: boolean = false;
  dataget=[];
  dataUrl='';
  errorMessage = '';
  constructor(private http: HttpClient,private formBuilder: FormBuilder ){}
  // constructor() {}
  
  transferFormMultipleReceipient:FormGroup
  ngOnInit() {
  this.transferFormMultipleReceipient = this.formBuilder.group({
    // landName: ['', [Validators.required]],
    // address: ['',[Validators.required]],
    // size: ['', [Validators.required]],
    sender: [''],
    // receiver: [''],

   
    // id: ['', [Validators.required]]
  receiver: this.formBuilder.array([
      this.formBuilder.control('')
  ]),
  
  ids: this.formBuilder.array([
    this.formBuilder.control('')
  ]),
  values: this.formBuilder.array([
    this.formBuilder.control('')
  ])

})
}

get receiver() {
  return this.transferFormMultipleReceipient.get('receiver') as FormArray;
}
addReceiver() {
  this.receiver.push(this.formBuilder.control(''));
}


get ids() {
  return this.transferFormMultipleReceipient.get('ids') as FormArray;
}
addId() {
  this.ids.push(this.formBuilder.control(''));
}

get values() {
  return this.transferFormMultipleReceipient.get('values') as FormArray;
}
addValue() {
  this.values.push(this.formBuilder.control(''));
}

onSubmit(){

    const formData = new FormData();
     
  
    formData.append('sender',this.transferFormMultipleReceipient.get('receiver').value);

    formData.append('sender',this.transferFormMultipleReceipient.get('ids').value);

    formData.append('sender',this.transferFormMultipleReceipient.get('values').value);

    // formData.append('file', this.verifyForm.get('fileSource').value);
  
    console.log("govind",this.transferFormMultipleReceipient)


     const headers = {'Content-Type': 'application/json'} 
    
  const body=JSON.stringify(this.transferFormMultipleReceipient.value);

     this.http.post('http://localhost:1869/api/v1/erc/batchTransferFromMultiRecipient', body,{headers})

      .subscribe(res => {
            alert("transfer suceessfully")  ;    // let showdata = res['result'].filedata.fileData
      

      })

  }


}
