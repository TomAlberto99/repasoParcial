import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/core/models';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  public person: Person = new Person();
  @Output() public personToCreate: EventEmitter<Person> = new EventEmitter();

  ngOnInit(): void {

  }
  constructor(){}

  public createToPerson(){
    this.personToCreate.emit(this.person);
  }

}
