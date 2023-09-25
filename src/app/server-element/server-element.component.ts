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
OnDestroy
{

 @Input('srvElement') element:{type: string, name:string, content:string};
 @Input() name:string;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes:SimpleChanges): void {
    console.log('nogOnInit called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('nogOnInit called');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit():void {
    console.log('ngAfterContentInit called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
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