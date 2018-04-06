import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page.component';
import {MatButtonModule, MatInputModule, MatTableModule} from "@angular/material";
import {FlexLayoutModule} from '@angular/flex-layout';
import {NodeInfoComponent} from '../../components/node/node-info.component';
import {CdkTableModule} from '@angular/cdk/table';
import {M2Module} from '../../m2-angular/m2.module';

/**
 *
 */
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '',
            pathMatch: 'full',
            component: HomePageComponent
        }]),
        MatButtonModule,
        FlexLayoutModule,
        MatTableModule,
        CdkTableModule,
        M2Module,
        MatInputModule,
    ],
    declarations: [
        HomePageComponent,
        NodeInfoComponent
    ]
})
export class HomeModule {
}
