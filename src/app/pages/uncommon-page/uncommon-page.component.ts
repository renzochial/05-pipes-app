import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import {
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  SlicePipe,
  UpperCasePipe,
  KeyValuePipe,
  TitleCasePipe,
  AsyncPipe,
 } from '@angular/common';
import { interval, tap, map } from 'rxjs';

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
  imports: [CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe,
  ],
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

  //i18n Plural

  clientsMap = signal( {
    '=0' : 'no tenemos ningún cliente esperando',
    '=1' : 'tenemos un cliente esperando',
    '=2' : 'tenemos 2 clientes esperando',
    other : 'tenemos # clientes esperando',
  })

  clients = signal([
    'Renzo',
    'Yoana',
    'Alejo',
    'Camilo',
    'Luciana',
    'Mery',
    'Luis',
    'Pedro',
  ])

  deleteClient(){
    this.clients.update(prev => prev.slice(1))
  }

  // KeyValue Pipe
  profile = {
    name: 'renzo',
    age: 35,
    address: 'Villa del rosario, Colombia',
  }

  //Async Pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(()=>{
      //reject('Tenemos un error en la data')
      resolve('Tenemos data en al promesa')
      console.log('Promesa finalizada')
    }, 3500);
  });

  myObservableTimer = interval(2000).pipe(
    map((value)=> value + 1),
    tap((value)=> console.log('tap: ', value))
  );

}
