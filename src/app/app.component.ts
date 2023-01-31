import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AccountService]
})
export class AppComponent implements OnInit{
  title = 'My App!';
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
    { name: 'Pramod', address: 'Hazaribagh', phone: '9876543210', email: 'pramod@gmail.com' },
    { name: 'Santosh', address: 'Hyderabad', phone: '9800043210', email: 'santosh@gmail.com' },
    { name: 'Sam', address: 'Pune', phone: '9876500000', email: 'sam@gmail.com' },
    { name: 'Peter', address: 'Mumbai', phone: '9876000010', email: 'peter@gmail.com' },
    { name: 'John', address: 'Bangalore', phone: '90000543210', email: 'john@gmail.com' }
  ]

  usersDetail = [
    { name: 'Pramod', address: 'Hazaribagh', phone: '9876543210', email: 'pramod@gmail.com', socialAccount: ['Facebook', 'Instagram', 'Youtube'] },
    { name: 'Santosh', address: 'Hyderabad', phone: '9800043210', email: 'santosh@gmail.com', socialAccount: ['LinkedIn', 'Pinterest', 'Yahoo'] },
    { name: 'Sam', address: 'Pune', phone: '9876500000', email: 'sam@gmail.com', socialAccount: ['Twitter', 'Telegram', 'Yahoo'] },
    { name: 'Peter', address: 'Mumbai', phone: '9876000010', email: 'peter@gmail.com', socialAccount: ['LinkedIn', 'Pinterest', 'Yahoo'] },
    { name: 'John', address: 'Bangalore', phone: '90000543210', email: 'john@gmail.com', socialAccount: ['Facebook', 'Instagram', 'Youtube'] }
  ]

  getName(firstName: String, lastName: String) {
    alert(firstName);
    alert(lastName);
  }
  getData(value: string) {
    console.log(value)
  }
  getInputValue(value: string) {
    console.log(value);
    this.displayInputValue = value;
  }
  counter(value: string) {
    value === 'plus' ? this.count++ : this.count--
  }
  changeColor() {
    this.textColor = "#ffffff";
    this.bgColor = "red";
    this.bRadius = '30px'
  }
  formData: any = {};
  getFormData(data: NgForm) {
    console.log(data)
    this.formData = data;
  }

  toggleProp = false;
  toggleFun() {
    this.toggleProp = !this.toggleProp;
  }

  todoList: any[] = [];
  addList(item: string) {
    this.todoList.push({ id: this.todoList.length + 1, name: item });
    console.log(this.todoList)
  }
  removeList(id: number) {
    console.log(id)
    this.todoList = this.todoList.filter(item => item.id !== id)
    //this.todoList.splice(id, 1)
  }


  //pass data child to parent and parent to child
  serverElements = [{ type: 'server', name: 'Test Server', content: 'Just a test!' }];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    })
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }
  onDestroyFirst() {
    this.serverElements.splice(0, 1)
  }

  pageTitle = "Basic of Pipes in angular";
  TodayDate = Date();
  usersList = {
    name: 'Pramod',
    Phone: 9087654321
  }

  oddNumber = [1, 3, 5, 7];
  evenNumber = [2, 4, 6, 8]
  onlyOdd = false;


  // accounts = [
  //   {
  //     name: 'Master Account',
  //     status: 'active'
  //   },
  //   {
  //     name: 'Test Account',
  //     status: 'inactive'
  //   },
  //   {
  //     name: 'Hidden Account',
  //     status: 'unknown'
  //   }
  // ];

  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accountService.onAccountAdded;
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accountService.onStatusChanged;
  // }
accounts!: { name: string; status: string; }[];
  constructor(private accountService: AccountService){}

  ngOnInit(): void {
    this.accounts = this.accountService.accounts
  }
  
}
