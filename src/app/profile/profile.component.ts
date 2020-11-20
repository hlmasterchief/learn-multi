import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name: string;
  birthday: Date;

  constructor() { }

  ngOnInit(): void {
  }

  save(): void {
    if (!this.name) { return alert('Please enter name'); }
    if (!this.birthday) { return alert('Please enter birthday'); }
    alert('Save with: ' + this.name + ' / ' + this.birthday);
  }
}
