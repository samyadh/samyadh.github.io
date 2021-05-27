import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: "me",
        loadChildren: () => import("../portfolio/portfolio.module").then(m => m.PortfolioModule)
    },
    {
        path: "vaccine",
        loadChildren: () => import("../search-slot/search-slot.module").then(m => m.SearchSlotModule)
    },
    {
        path: "**",
        redirectTo: "me"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
