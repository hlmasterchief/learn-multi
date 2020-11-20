import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [
    {
      name: 'Romeo Keeling',
      email: 'ardelle.considine@hotmail.com',
      birthday: new Date('October 21, 2015')
    },
    {
      name: 'Nobuko Schneider',
      email: 'rick.auer@example.com',
      birthday: new Date('November 12, 1955')
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

interface User {
  name: string;
  email: string;
  birthday: Date;
}
