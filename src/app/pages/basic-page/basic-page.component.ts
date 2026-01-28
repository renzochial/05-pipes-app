import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {

  nameLower = signal('renzo');
  nameUpper = signal('RENZO');
  fullName = signal('rEnzO ChIa');


  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanup)=> {

    const interval = setInterval(()=>{
      this.customDate.set(new Date())
    }, 1000);

    onCleanup(()=>{
      clearInterval(interval)
    })

  })

}
