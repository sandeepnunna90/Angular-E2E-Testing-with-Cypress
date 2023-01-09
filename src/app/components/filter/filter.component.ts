import { Component, Input } from '@angular/core';
import { FilterService } from '../../services/FilterService';

declare global {
  interface Window { FilterComponent: FilterComponent }
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  filterValue: string = '';
  @Input() placeholder: string = '';

  constructor(private filterService: FilterService) {
    this.filterService.filterValueChange.subscribe(value => this.filterValue = value);

    if(window.Cypress) {
      window.FilterComponent = this;
    }
  }

  onChange(value: string): void {
    this.filterService.filterBy(value);
  }

  onClear(): void {
    if (!this.filterValue) {
      return;
    }
    this.filterService.filterBy('');
  }
}
