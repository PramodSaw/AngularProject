import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'My App!';
  displayInputValue = "";
  count = 0;
  userName = "Pramod";
  disable = false;
  readOnly = false;
  req = false;
  show = true;
  color = 'red';
  color2 = 'blue';
  textColor = 'red';
  bgColor = 'yellow'
  bRadius = '10px'
  users = ['Pramod', 'Santosh', 'Sam', 'Peter', 'John'];
  usersDetails = [
    {name: 'Pramod', address: 'Hazaribagh', phone: '9876543210', email: 'pramod@gmail.com'},
    {name: 'Santosh', address: 'Hyderabad', phone: '9800043210', email: 'santosh@gmail.com'},
    {name: 'Sam', address: 'Pune', phone: '9876500000', email: 'sam@gmail.com'},
    {name: 'Peter', address: 'Mumbai', phone: '9876000010', email: 'peter@gmail.com'},
    {name: 'John', address: 'Bangalore', phone: '90000543210', email: 'john@gmail.com'}
  ]

  usersDetail = [
    {name: 'Pramod', address: 'Hazaribagh', phone: '9876543210', email: 'pramod@gmail.com', socialAccount: ['Facebook', 'Instagram', 'Youtube']},
    {name: 'Santosh', address: 'Hyderabad', phone: '9800043210', email: 'santosh@gmail.com', socialAccount: ['LinkedIn', 'Pinterest', 'Yahoo']},
    {name: 'Sam', address: 'Pune', phone: '9876500000', email: 'sam@gmail.com', socialAccount: ['Twitter', 'Telegram', 'Yahoo']},
    {name: 'Peter', address: 'Mumbai', phone: '9876000010', email: 'peter@gmail.com', socialAccount: ['LinkedIn', 'Pinterest', 'Yahoo']},
    {name: 'John', address: 'Bangalore', phone: '90000543210', email: 'john@gmail.com', socialAccount: ['Facebook', 'Instagram', 'Youtube']}
  ]

  getName(firstName: String, lastName: String){
    alert(firstName);
    alert(lastName);
  }
  getData(value:string){
    console.log(value)
  }
  getInputValue(value:string){
    console.log(value);
    this.displayInputValue = value;
  }
  counter(value:string){
    value === 'plus' ? this.count++ : this.count--
  }
  changeColor(){
    this.textColor = "#ffffff";
    this.bgColor = "red";
    this.bRadius = '30px'
  }
  formData:any = {}; 
  getFormData(data:NgForm){
    console.log(data)
    this.formData = data;
  }

  toggleProp = false;
  toggleFun(){
    this.toggleProp = !this.toggleProp;
  }
}
