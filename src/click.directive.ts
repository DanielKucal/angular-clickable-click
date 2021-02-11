import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({selector: '[click],[click][disabled]'})
export class ClickDirective implements OnChanges {
    @Input('disabled') disabled: boolean = false;
    @HostBinding('style.cursor') cursor: string = 'pointer';
    @HostBinding('style.pointer-events') pointerEvents: string = 'auto';

    public ngOnChanges(changes: SimpleChanges) {
        if (changes['disabled']) {
            this.pointerEvents = this.disabled ? 'none' : 'auto';
            this.cursor = this.disabled ? 'not-allowed' : 'pointer';
        }
    }
}
