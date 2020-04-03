import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { sanitizeHtmlPipe } from './sanitize-html.pipe';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, sanitizeHtmlPipe ],
  exports: [ sanitizeHtmlPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
