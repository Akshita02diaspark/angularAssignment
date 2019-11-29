import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { CORE_CONTAINER } from './core/containers';
import { CORE_COMPONENTS } from './core/components';
import{LAYOUT_COMPONENTS} from './layout/components'

const CONTAINER = [
  AppComponent,
  ...CORE_COMPONENTS,
  ...CORE_CONTAINER,
  ...LAYOUT_COMPONENTS
];
 

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'i-plus-plus' }),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    ...CONTAINER
  ],
  exports: [
    ...CONTAINER
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
