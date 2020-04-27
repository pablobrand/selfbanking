import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

//Externals
import {DemoMaterialModule} from '././EXTERNAL/material-module';
//Internal App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { InfoComponent } from './info/info.component';
import { NavigationControllersComponent } from './navigation-controllers/navigation-controllers.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PortisComponent } from './portis/portis.component';
import { MetamaskComponent } from './metamask/metamask.component';
import { WalletconnectComponent } from './walletconnect/walletconnect.component';
import { UniswapComponent } from './uniswap/uniswap.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InfoComponent,
    NavigationControllersComponent,
    PortisComponent,
    MetamaskComponent,
    WalletconnectComponent,
    UniswapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
