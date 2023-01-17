import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  //newServerName = '';
  newServerContent = '';
  type: string = '';
  @ViewChild('serverContentInput') serverContentInput!: ElementRef;

  onAddServer(nameInput: string) {
     this.serverCreated.emit({
      // serverName: this.newServerName,
      serverName: nameInput,
      // serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
     })
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      // serverName: this.newServerName,
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
     })
  }

  constructor() { }

  ngOnInit(): void {
  }



}
