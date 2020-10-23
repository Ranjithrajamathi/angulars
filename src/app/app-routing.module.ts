import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForIndedexComponent } from './for-indedex/for-indedex.component';
import { ForoddoreventComponent } from './foroddorevent/foroddorevent.component';
import { NgForNgIfAndNgSwitchComponent } from './ng-for-ng-if-and-ng-switch/ng-for-ng-if-and-ng-switch.component';
import { StrucForStatementComponent } from './struc-for-statement/struc-for-statement.component';
import { StructTemplateusingComponent } from './struct-templateusing/struct-templateusing.component';
import { StructdircComponent } from './structdirc/structdirc.component';

const routes: Routes = [
  {path:'app-structdirc',component:StructdircComponent},
{path:'strrictwith',component:StructTemplateusingComponent},
{path:'fortStatement',component:StrucForStatementComponent},
{path:'fortIndex',component:ForIndedexComponent},
{path:'foroddorevent',component:ForoddoreventComponent},
{path:'forTemplateRefUseDeirective',component:NgForNgIfAndNgSwitchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
