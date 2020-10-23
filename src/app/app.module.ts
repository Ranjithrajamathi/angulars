import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowdirectiveComponent } from './showdirective/showdirective.component';
import { InputdecoretorComponent } from './inputdecoretor/inputdecoretor.component';
import { StructdircComponent } from './structdirc/structdirc.component';
import { StructTemplateusingComponent } from './struct-templateusing/struct-templateusing.component';
import { StrucForStatementComponent } from './struc-for-statement/struc-for-statement.component';
import { ForIndedexComponent } from './for-indedex/for-indedex.component';
import { ForoddoreventComponent } from './foroddorevent/foroddorevent.component';
import { NgForNgIfAndNgSwitchComponent } from './ng-for-ng-if-and-ng-switch/ng-for-ng-if-and-ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowdirectiveComponent,
    InputdecoretorComponent,
    StructdircComponent,
    StructTemplateusingComponent,
    StrucForStatementComponent,
    ForIndedexComponent,
    ForoddoreventComponent,
    NgForNgIfAndNgSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
