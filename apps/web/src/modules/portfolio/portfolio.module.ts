import { LayoutModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { PortfolioRoutingModule } from './portfolio.routes';



@NgModule({
    declarations: [
        LandingComponent
    ],
    imports: [
        LayoutModule,
        PortfolioRoutingModule,
        CommonModule
    ]
})
export class PortfolioModule { }
