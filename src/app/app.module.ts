import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import localEs from '@angular/common/locales/es'
import { registerLocaleData} from '@angular/common'

// Pipes
import { CapitalizedPipe } from './pipes/capitalized.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';


registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizedPipe,
    DomseguroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { 
      provide : LOCALE_ID,
      useValue : "es"  
    }

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
