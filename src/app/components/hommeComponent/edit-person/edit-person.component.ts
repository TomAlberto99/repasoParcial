import { Component, Inject, OnInit } from '@angular/core';
import { Person } from 'src/app/core/models';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ApiService } from 'src/app/core/services/api.service';
@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit{
  
  public person: Person = new Person();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private apiService: ApiService, private dialogRef: MatDialogRef<EditPersonComponent>) {

  }
  ngOnInit(): void {
    this.person = this.data;

  }

  public editPerson(){

    this.apiService.editPersona(this.person.id!, this.person).subscribe({
      next: () => this.dialogRef.close(true),
      error: (error) => alert(error)
    })
  }

  public closeDialog(){
    this.dialogRef.close(false);
  }



}
