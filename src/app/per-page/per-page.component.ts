import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-per-page',
  templateUrl: './per-page.component.html',
  styleUrls: ['./per-page.component.css']
})
export class PerPageComponent{
  _options: number[] = [5, 10, 15, 20, 25];

  @Input()
  currentOption = 25;

  @Output()
  onChange: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  get options(): number[] {
      const index = this._options.indexOf( this.currentOption );
      if ( index === -1 ) {return this._options; }
      const arr = this._options.slice();
      arr.splice( index, 1 );
      return arr;
  }

  change( option: number ) {
      this.currentOption = option;
      this.onChange.emit( option );
  }
}
