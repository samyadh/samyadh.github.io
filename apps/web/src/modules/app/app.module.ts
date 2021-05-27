import { VsfCommonModule } from './../vsf-common/vsf-common.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './components/app-component/app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        VsfCommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
