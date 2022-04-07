import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { WorkshopDTO } from '../../Models/WorkshopDTO';
import { WorkshopFormService } from '../../Services/workshop-form.service';
import { WorkshopService } from '../../Services/workshop.service';
import { WorkshopApplicationDTO } from '../../Models/WorkshopApplicationDTO';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  model: NgbDateStruct;
  invalid! : boolean;
  AddWorkShop: FormGroup;
  WorkshopDTO: WorkshopDTO[] =[] ;
  WorkshopTitle: string;
  WorkshopApplicationDTO: WorkshopApplicationDTO;
  workshopApplicationID: string;
  //
  name: string;
  phone: string;
  age: number;
  dateOfBirth: string;
  fatherJob: string;
  address: string;
  workshopID: string;
  workshopTitle: string;
  previousExperience: string;


  constructor(fb : FormBuilder,
     private WorkshopFormService : WorkshopFormService ,
     private WorkshopService: WorkshopService) {

    const data = this.WorkshopApplicationDTO;
    if (data == null) {
      this.name = '';
      this.phone = '';
      this.age = 0;
      this.dateOfBirth = '';
      this.fatherJob = '';
      this.address = '';
      this.workshopID = '';
      this.previousExperience = '';
    }
    else
    {
      this.WorkshopApplicationDTO = data;
      this.name = data.name;
      this.phone = data.phone;
      this.age = data.age;
      this.dateOfBirth = data.dateOfBirth;
      this.fatherJob = data.fatherJob;
      this.address = data.address;
      this.workshopID = data.workshopID;
      this.previousExperience = data.previousExperience;
  }
  this.AddWorkShop = fb.group({
      Name : [this.name, [Validators.required,Validators.minLength(3)]],
      Fjob:  [this.fatherJob,Validators.required],
      email: [this.address,Validators.required],
      Phone: [this.phone,Validators.required],
      Age:   [this.age,Validators.required],
      Talent:[this.workshopID,Validators.required],
      DOB:   [this.dateOfBirth,Validators.required],
      PEX:   [this.previousExperience,Validators.required],
  });
  }

get f()
{
  return this.AddWorkShop.controls;
}


  GETWorkShopDATA() {
    this.WorkshopService.GetAll().subscribe((data)=> {
      this.WorkshopDTO = data;
      this.WorkshopTitle = data.title;
    })
  }

  ngOnInit(): void {
    this.GETWorkShopDATA();
  }


  saveData(): void {
    if (this.WorkshopApplicationDTO == null) {
        let NewData = {
          name : this.AddWorkShop.get('Name').value,
          phone: this.AddWorkShop.get('Phone').value,
          age: this.AddWorkShop.get('Age').value,
          dateOfBirth: this.AddWorkShop.get('DOB').value,
          fatherJob: this.AddWorkShop.get('Fjob').value,
          address: this.AddWorkShop.get('email').value,
          workshopID:this.AddWorkShop.controls['Talent'].value,
          previousExperience: this.AddWorkShop.get('PEX').value
        };
        this.WorkshopFormService.Create(NewData)
            .subscribe(
              response => {
                // this.dialogRef.close();
                window.alert("Send Your Form Succssfully, Thanks");
                this.AddWorkShop.controls['Name'].setValue('');
                this.AddWorkShop.controls['Phone'].setValue('');
                this.AddWorkShop.controls['Age'].setValue('');
                this.AddWorkShop.controls['DOB'].setValue('');
                this.AddWorkShop.controls['Fjob'].setValue('');
                this.AddWorkShop.controls['email'].setValue('');
                this.AddWorkShop.controls['Talent'].setValue('');
                this.AddWorkShop.controls['PEX'].setValue('');
              },
              error => {
                console.log(error);
              });
    }
    }

}
