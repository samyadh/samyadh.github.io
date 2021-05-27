import { VsfCommonModule } from './../vsf-common/vsf-common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightSidebarLayoutComponent } from './components/right-sidebar-layout/right-sidebar-layout.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

@NgModule({
    declarations: [
        MainLayoutComponent,
        RightSidebarLayoutComponent
    ],
    imports: [
        VsfCommonModule,
        CommonModule
    ],
    exports: [
        MainLayoutComponent,
        RightSidebarLayoutComponent,
    ]
})
export class LayoutModule { }
