import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: "search",
        loadChildren: () => import("../search-slot/search-slot.module").then(m => m.SearchSlotModule)
    },
    {
        path: "**",
        redirectTo: "search"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
