import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberonly]'
})
export class NumberonlyDirective {
  private regex: RegExp = new RegExp('[0-9]+("."?[0-9][0-9]?)?');
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', '.'];
  constructor(private el: ElementRef) {
    this.el.nativeElement.onkeypress = (evt) => {
      console.log('number ', evt);
      const number = evt.target.value ? evt.target.value + evt.key : evt.key;
      if (evt.key === '.') {
        if (number && ((!parseFloat(number) && evt.target.value !== '0')  || number.split('.').length > 2)) {
          event.preventDefault();
        }
      } else if (evt.key && (!String(evt.key).match(this.regex))) {
        event.preventDefault();
      }
    };
  }
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event) {
    let value: string = null;
    if (event.clipboardData) {
      value = event.clipboardData.getData('text');
    } else {
      value = (<any>window).clipboardData.getData('text');
    }
    // check whether the clipboard data is a float by parsing it and
    // then check the whether the inputed value has more than once dot in it.
    if (value && (!parseFloat(value) || value.split('.').length > 2)) {
      event.preventDefault();
    }
  }

}
