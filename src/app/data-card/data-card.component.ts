import { Component } from '@angular/core';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.scss']
})
export class DataCardComponent {
  data = {
    index:'',
    title:''
  }

  onKeyUp(data:string) {
    this.data.title = data;
  }
}
