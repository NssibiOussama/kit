import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftSkillsRoutingModule } from './soft-skills-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { NgxApexchartsModule } from 'ngx-apexcharts'; 
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';




@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartModule,
    MenuModule,
    TableModule,
    StyleClassModule,
    PanelMenuModule,
    ButtonModule,
    SoftSkillsRoutingModule,
    NgxApexchartsModule,
    CardModule,
    MultiSelectModule,
    DropdownModule
  ]
})
export class SoftSkillsModule { }
