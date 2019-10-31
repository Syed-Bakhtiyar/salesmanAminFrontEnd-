import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editable-field',
  templateUrl: './editable-field.component.html',
  styleUrls: ['./editable-field.component.css']
})
export class EditableFieldComponent implements OnInit {

  @Input() value;
  @Output() change: EventEmitter<any> = new EventEmitter<any>();
  enableInput = false;

  constructor() { }

  ngOnInit() {
  }

  enableInputField() {
    this.enableInput = true;
  }

  focusOut(event) {
    this.enableInput = false;
    this.value = event.target.value;
    console.log({event});
    this.change.emit(event);
  }

}
