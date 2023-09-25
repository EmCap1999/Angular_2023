// import { ViewEncapsulation } from '@angular/compiler';
import { 
  Component, 
  OnInit, 
  Input,
  ViewEncapsulation, 
  SimpleChanges, 
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy,
ServerElementComponent
{
 @Input('srvElement') element:{type: string, name:string, content:string};
 @Input() name:string;
 @ViewChild('heading', {static:true}) header: ElementRef;
 @ContentChild('contentParagraph', {static:true}) paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes:SimpleChanges): void {
    console.log('nogOnInit called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('nogOnInit called');
    console.log('Text content : '+ this.header.nativeElement.textContent);
    console.log('Paragraph content : '+ this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit():void {
    console.log('ngAfterContentInit called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log('Text content : '+ this.header.nativeElement.textContent);
    console.log('Text content : '+ this.paragraph.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
}
