import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({selector: '[click]'})
export class ClickDirective implements OnChanges {
    @Input('disabled') disabled: boolean = false;
    @HostBinding('style.cursor') cursor: string = 'pointer';
    @HostBinding('style.pointer-events') pointerEvents: string = 'auto';

    public ngOnChanges() {
        this.pointerEvents = this.disabled ? 'none' : 'auto';
        this.cursor = this.disabled ? 'not-allowed' : 'pointer';
    }
}
