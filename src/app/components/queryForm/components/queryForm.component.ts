import { Component, Input, Output, EventEmitter } from '@angular/core';
import { debounceTime, takeUntil } from 'rxjs/operators';
import Genre from '../../../models/genre.model';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-query-form',
  templateUrl: '../templates/queryForm.html',
  styleUrls: ['../styles/queryForm.sass']
})
export class QueryFormComponent {
  constructor() {}

  @Input() genres: Genre[] = [];
  @Input() queryForm: FormGroup = new FormGroup({});
  @Output() updateMovies = new EventEmitter<any>();
  public unsubscribe$ = new Subject<void>();

  ngOnInit() {
    this.queryForm.valueChanges
      .pipe(
        debounceTime(500),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((value) => {
        value.page = 1;
        this.updateMovies.emit(value);
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
