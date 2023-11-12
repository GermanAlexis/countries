import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {
  @Output()
  onValue: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  placeholder: string = '';

  onEventEmitterValue(input: string) {
    this.onValue.emit(input);
  }
}
