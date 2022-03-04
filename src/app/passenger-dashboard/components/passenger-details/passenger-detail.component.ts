import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
} from '@angular/core';
import { Passengers } from '../../model/passenger.interface';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['./passenger-detail.component.css'],
  template: `<div>
    <span class="status" [class.checked-in]="detail.checkedIn"></span>

    <div>
      <input
        *ngIf="editing"
        type="text"
        [value]="detail.fullname"
        #name
        (input)="onNameChange(name.value)"
      />
    </div>

    <div *ngIf="!editing">{{ detail.fullname }}</div>

    <div class="date">
      {{
        detail.checkInDate
          ? (detail.checkInDate | date: 'yMMMMd' | uppercase)
          : 'not checked in'
      }}
    </div>

    <button (click)="toggleEdit()">{{ editing ? 'Done' : 'Edit' }}</button>
    <button (click)="onRemove()">Remove</button>
    <button (click)="goToPassenger()">View Passenger</button>
  </div>`,
})
export class PassengerDetailComponent implements OnInit, OnChanges {
  @Input()
  detail: Passengers;

  @Output()
  onEdit = new EventEmitter();

  @Output()
  onDelete = new EventEmitter();

  @Output()
  onView = new EventEmitter();

  editing: boolean = false;

  ngOnInit(): void {
    //console.log('ngOnInit()');
  }

  ngOnChanges(changes: any): void {
    this.detail = { ...changes.detail.currentValue };
  }

  onNameChange(value: string) {
    this.detail.fullname = value;
  }

  toggleEdit() {
    if (this.editing) {
      this.onEdit.emit(this.detail);
    }

    this.editing = !this.editing;
  }

  onRemove() {
    this.onDelete.emit(this.detail);
  }

  goToPassenger() {
    this.onView.emit(this.detail);
  }
}
