import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debounce: Subject<string> = new Subject<string>();
  private debounceSubscription?: Subscription;

  ngOnInit(): void {
    this.debounceSubscription = this.debounce
      .pipe(debounceTime(100))
      .subscribe((searchTem) => this.onValue.emit(searchTem));
  }
  ngOnDestroy(): void {
    this.debounceSubscription?.unsubscribe();
  }
  @Output()
  onValue: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  placeholder: string = '';

  @Input()
  inputValue: string = '';

  onSearch(searchTerm: string): void {
    this.debounce.next(searchTerm);
  }
}
