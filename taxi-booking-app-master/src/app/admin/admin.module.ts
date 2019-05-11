import { NgModule } from '@angular/core';
import { AdminLoginComponent } from './admin-login.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.router';
import { AdminHome } from './admin-home.component';
import { DriverManagementComponent } from './admin-driver-management.component';



@NgModule({
    declarations:[AdminLoginComponent,
                   AdminHome,
                DriverManagementComponent],

    imports:[BrowserModule,RouterModule.forChild(AdminRoutes)],

    exports:[AdminLoginComponent, RouterModule, AdminHome, DriverManagementComponent]
})
export class AdminModule{

}