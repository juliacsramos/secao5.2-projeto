import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({required: true})
  planType: string = '';

  @Input({required: true})
  planPrice: number = 0;

  @Input({required: true})
  cardStyle: 'purple' | 'orange' = 'purple';

  @Output("buttonClicked")
  buttonClickedEmitt = new EventEmitter<void>();
  onButtonClicked() {
    this.buttonClickedEmitt.emit();
  }
}
