import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const clickedInside = (event.target as HTMLElement).closest('[clickOutside]');
    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }
}
