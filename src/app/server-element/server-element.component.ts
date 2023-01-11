import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

export interface ServerElement {
  type: string,
  name: string,
  content: string
}

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterContentChecked, OnDestroy {

  @Input() element!: ServerElement;
  @Input() name!: string;
  @ViewChild('heading') header!: ElementRef;
  @ContentChild('contentParagraph') paragraph!: ElementRef;

  constructor() {
    console.log("Constructor Called!")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log("ngOnChanges Called!")
  }

  ngOnInit(): void {
    console.log("ngOnInit Called!");
    // Note: it will not work here "this.header.nativeElement.textContent"
    // Note: it will work inside "ngAfterViewInit"
    //console.log('Text Content' + this.header.nativeElement.textContent);
    //console.log('Text Content of Paragraph' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck Called!");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit Called!");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked Called!");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit Called!");
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content of Paragraph: ' + this.paragraph.nativeElement.textContent);
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked Called!");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy Called!");
  }
}
