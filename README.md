# Clickable `(click)` for Angular 2+
Angular 2+ Directive adding pointer cursor for elements using `(click)` directive.
Respects `[disabled]` input.

## Installation
1. Get it from `npm i angular-clickable-click --save`
2. Import `ClickableClickModule`
    ```typescript
    import { ClickableClickModule } from 'angular-clickable-click';

    @NgModule({
      // ...
      imports: [ClickableClickModule],
      // ...
    })
    class AppModule {}
    ```

## Usage ([click here for a demo](https://stackblitz.com/edit/angular-gitter-qnta72?file=app%2Fapp.component.ts))
```typescript
@Component({
  selector: 'app',
  template: `
    <div (click)="isDisabled = true" [disabled]="isDisabled">
    I am <b *ngIf="isDisabled">no longer</b> clickable
    </div>
  `
})
export class AppComponent {
  public isDisabled: boolean = false;
}
```
