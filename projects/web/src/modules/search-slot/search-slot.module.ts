import { LayoutModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizeComponent } from './components/authorize/authorize.component';
import { PreferenceComponent } from './components/preference/preference.component';
import { SearchComponent } from './components/search/search.component';
import { SearchSlotRoutingModule } from './search-slot.routes';



@NgModule({
    declarations: [
        SearchComponent,
        AuthorizeComponent,
        PreferenceComponent,
    ],
    imports: [
        LayoutModule,
        SearchSlotRoutingModule,
        CommonModule
    ]
})
export class SearchSlotModule { }
