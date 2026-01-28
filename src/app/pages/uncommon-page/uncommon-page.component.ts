import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { I18nSelectPipe } from '@angular/common';

const client1 = {
  name: 'renzo',
  gender: 'male',
  age: 35,
  address: 'Villa del rosario, Colombia'
}

const client2 = {
  name: 'yoana',
  gender: 'female',
  age: 34,
  address: 'Cucuta, Colombia'
}


@Component({
  selector: 'app-uncommon-page.component',
  imports: [CardComponent, I18nSelectPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  changeClient(){
    if(this.client() == client1){
      this.client.set(client2)
      return;
    }

    this.client.set(client1);
  }

}
