import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/core/models';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  ngOnInit(): void {

  }
  constructor(private apiService : ApiService, private roter : Router){}


  @Input() inputPersons: Array<Person> = []
  @Output() personToDelete: EventEmitter<number> = new EventEmitter();
  @Output() personToEdit: EventEmitter<Person> = new EventEmitter();


  public deletePerson(id: number){
    this.personToDelete.emit(id);
  }

  public editPerson(person: Person){
    this.personToEdit.emit(person);
  }

}


