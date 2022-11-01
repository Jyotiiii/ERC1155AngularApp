import { Component } from '@angular/core';
import {NgForm,FormBuilder,Validators, FormGroup, FormArray } from '@angular/forms';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
//   ontractService: any;
//   showMsg: boolean = false;
//   dataget=[];
//   dataUrl='';
//   errorMessage = '';
//   constructor(private formBuilder: FormBuilder ,private fileUploadService: FileUploadService){}
//   // constructor() {}
  
//   userForm:FormGroup
//   ngOnInit() {
//   this.userForm = this.formBuilder.group({
//     // landName: ['', [Validators.required]],
//     // address: ['',[Validators.required]],
//     // size: ['', [Validators.required]],
//     account: [''],

//     file: ['', [Validators.required]],
//     // id: ['', [Validators.required]]
  
//   names: this.formBuilder.array([
//     this.formBuilder.control('')
//   ]),
//   addresses: this.formBuilder.array([
//     this.formBuilder.control('')
//   ]),
//   ids: this.formBuilder.array([
//     this.formBuilder.control('')
//   ]),
//   descriptions: this.formBuilder.array([
//     this.formBuilder.control('')
//   ]),
//   values: this.formBuilder.array([
//     this.formBuilder.control('')
//   ]),
//   sizes: this.formBuilder.array([
//     this.formBuilder.control('')
//   ])

// })
// }
// get names() {
//   return this.userForm.get('names') as FormArray;
// }
// addName() {
//   this.names.push(this.formBuilder.control(''));
// }

// get addresses() {
//   return this.userForm.get('addresses') as FormArray;
// }
// addAddress() {
//   this.addresses.push(this.formBuilder.control(''));
// }

// get ids() {
//   return this.userForm.get('ids') as FormArray;
// }
// addId() {
//   this.ids.push(this.formBuilder.control(''));
// }
// get descriptions() {
//   return this.userForm.get('descriptions') as FormArray;
// }
// addDescription() {
//   this.descriptions.push(this.formBuilder.control(''));
// }
// get values() {
//   return this.userForm.get('values') as FormArray;
// }
// addValue() {
//   this.values.push(this.formBuilder.control(''));
// }
// get sizes() {
//   return this.userForm.get('sizes') as FormArray;
// }
// addSize() {
//   this.sizes.push(this.formBuilder.control(''));
// }
// onSubmit(){
//   console.log("onsubmit",this.userForm)
//   this.fileUploadService.addland(this.userForm).subscribe(
//     (data: any) => {
//       console.log("successfully submit",data);
//     }
//   );
//   if(this.userForm.valid){
//     alert('User form is valid!!')
//   } else {
//     alert('User form is not valid!!')
//   }
// }

// // Variable to store shortLink from api response
// shortLink: string = "";
// loading: boolean = false; // Flag variable
// file: File = null as any; // Variable to store file

// // Inject service




// // On file Select
// onChange(event:any) {
//   this.file = event.target.files[0];
// }
// fetchData() {
//   this.fileUploadService.getdata(this.dataget)
//   .subscribe({
//     next: (data:any)=> 
//     this.dataget =data,
//     error:(error:any) => this.errorMessage = error
//  });
// }
// // OnClick of button Upload
// onUpload(data) {
//   // http://localhost:1869/api/v1/ticket/ipfsUpload
//   // alert("Entered Email id : " + data.name)
  
//   this.loading = !this.loading;
//   console.log(this.file);
//   this.fileUploadService.upload(this.file,data).subscribe(
//     (event: any) => {
//       if (typeof (event) === 'object') {

//         // Short link via api response
//         this.shortLink = event.link;

//         this.loading = false; // Flag variable
//         this.showMsg=true;
//       }
//     }
//   );
//   this.fileUploadService.getdata(this.dataget).subscribe({
//     next:(data:any) => {
//       this.fetchData();
//       //this.reset();
//       this.dataUrl = data.result[33].URL;
//       console.log(this.dataUrl)},
//       error:(error:any) => this.errorMessage = error
//   })
// }
// powers = [];



}
