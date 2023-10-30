import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { Person } from 'src/app/core/models';
import { ApiService } from 'src/app/core/services/api.service';
import { EditPersonComponent } from './edit-person/edit-person.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  public persons: Array<Person> = [];

  ngOnInit(): void {

    this.getPersons();

  }

  public async getPersons() {

    try {

      let responseApi = this.apiService.getPerson();

      const data = await lastValueFrom(responseApi);

      this.persons = data.map((personData: any) => new Person(personData));

    } catch (error) {
      console.error(error);
    }
  }

  public editPerson(person: Person) {

    const dialogRef = this.dialog.open(EditPersonComponent, { data: person, height: '400px', width: '350px' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El cuadro de diálogo se cerró con resultado:', result);
    });
  }

  public createPerson(person: Person) {

    this.apiService.addPerson(person).subscribe({
      next: () => {
        this.getPersons();
        alert("Usuario creado con exito");

      },
      error: () => alert("No se ha podido crear el usuario")
    })
  }

  public deletePerson(id: number){

      this.apiService.deletePersona(id).subscribe({
        next: ()=>{
          this.getPersons();
          alert("Usuario eliminado con exito");
        },
        error: ()=> alert("No se ha podido eliminar el usuario")
      })
  }
  
  }
