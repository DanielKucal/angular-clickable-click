# Clickable `(click)` for Angular 4+
Angular 4+ Directive adding pointer cursor for elements using `(click)` directive.

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

## Usage
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
