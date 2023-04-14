import { Component } from '@angular/core';
import { Ipost, Istd, Iusers, itEmplyee } from './shared/model/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TabletaskNgFor';
  postsInfo: Array<Ipost> = [
    {
      title: 'The standalone flag and component imports',
      body: 'Components, directives, and pipes can now be marked as standalone: true. Angular classes marked as standalone do not need to be declared in an NgModule',
    },
    {
      title: 'Introduction to the Angular docs',
      body: 'Angular is an application-design framework and development platform for creating efficient and sophisticated single-page apps.',
    },
    {
      title: 'Update Angular to v15',
      body: 'Angular v15 brings many improvements and new features. This section only contains some of the innovations in v15.',
    },
    {
      title: 'Angular 15: Whats New in the Latest Version of Angular v15?',
      body: 'uick Summary: The latest version of Angular v15 is out and available now in the market for developers. Angular 15 comes with stable standalone APIs (graduated from developer preview),',
    },
  ];

  employees: Array<itEmplyee> = [
    {
      name: 'John Doe',
      gender: 'male',
      age: 25,
      department: 'Marketing',
      salary: 40000,
      yearsOfExperience: 3,
    },
    {
      name: 'Jane Smith',
      gender: 'female',
      age: 30,
      department: 'Sales',
      salary: 50000,
      yearsOfExperience: 5,
    },
    {
      name: 'Bob Johnson',
      gender: 'male',
      age: 40,
      department: 'Finance',
      salary: 70000,
      yearsOfExperience: 12,
    },
    {
      name: 'Sara Lee',
      gender: 'female',
      age: 28,
      department: 'HR',
      salary: 45000,
      yearsOfExperience: 4,
    },
    {
      name: 'Tom Jackson',
      gender: 'male',
      age: 35,
      department: 'IT',
      salary: 60000,
      yearsOfExperience: 8,
    },
    {
      name: 'Amy Chen',
      gender: 'female',
      age: 27,
      department: 'Marketing',
      salary: 42000,
      yearsOfExperience: 2,
    },
    {
      name: 'Mike Kim',
      gender: 'male',
      age: 45,
      department: 'Sales',
      salary: 80000,
      yearsOfExperience: 15,
    },
    {
      name: 'Grace Lee',
      gender: 'female',
      age: 32,
      department: 'Finance',
      salary: 55000,
      yearsOfExperience: 6,
    },
    {
      name: 'Eric Wong',
      gender: 'female',
      age: 29,
      department: 'HR',
      salary: 48000,
      yearsOfExperience: 3,
    },
    {
      name: 'Lucas Rodriguez',
      gender: 'male',
      age: 37,
      department: 'IT',
      salary: 65000,
      yearsOfExperience: 10,
    },
    {
      name: 'Karen Wilson',
      gender: 'male',
      age: 31,
      department: 'Marketing',
      salary: 42000,
      yearsOfExperience: 3,
    },
    {
      name: 'lucy Brown',
      gender: 'female',
      age: 43,
      department: 'Sales',
      salary: 75000,
      yearsOfExperience: 13,
    },
    {
      name: 'Anna Nguyen',
      gender: 'male',
      age: 26,
      department: 'Finance',
      salary: 50000,
      yearsOfExperience: 4,
    },
    {
      name: 'Paul Kim',
      gender: 'male',
      age: 28,
      department: 'HR',
      salary: 46000,
      yearsOfExperience: 2,
    },
    {
      name: 'july Lee',
      gender: 'female',
      age: 33,
      department: 'IT',
      salary: 62000,
      yearsOfExperience: 7,
    },
  ];
keys:Array<string> = Object.keys(this.employees)

  users: Array<Iusers> = [
    { fname: 'sumit', lname: 'patil', cont: '1234', email: '12@we' },
    { fname: 'sujit', lname: 'patil', cont: '1234', email: '12@we' },
    { fname: 'suniit', lname: 'patil', cont: '1234', email: '12@we' },
    { fname: 'sutaram', lname: 'patil', cont: '1234', email: '12@we' },
  ];
  stdarray: Array<Istd> = [
    { fname: 'jhon', lname: 'doe', contact: 123, email: 'qwe@' },
  ];
  fnameval!: string;
  lnameval!: string;
  contactval!: string;
  emailval!: string;
  onAddstudent() {
    console.log(this.fnameval);
    let obj: Istd = {
      fname: this.fnameval,
      lname: this.lnameval,
      contact: +this.contactval,
      email: this.emailval,
    };
    this.stdarray.push(obj);
    this.fnameval = '';
    this.lnameval = '';
    this.contactval = '';
    this.emailval = '';
  }
}
