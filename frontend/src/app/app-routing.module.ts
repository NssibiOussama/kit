import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import {AuthGuard} from './demo/components/auth/guards/auth.guard'

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'admin', component: AppLayoutComponent,
                canActivate: [AuthGuard],
                children: [
                    { path: '', loadChildren: () => import('./demo/components/soft-skills/soft-skills.module').then(m => m.SoftSkillsModule) },
                ]
            },
            { path: '', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
