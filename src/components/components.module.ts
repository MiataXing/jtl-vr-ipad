import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackBtnComponent } from './back-btn/back-btn';
import { SideMenuComponent } from './side-menu/side-menu';

@NgModule({
	declarations: [BackBtnComponent,
    SideMenuComponent],
	imports: [
        CommonModule
    ],
	exports: [BackBtnComponent,
    SideMenuComponent]
})
export class ComponentsModule {}
