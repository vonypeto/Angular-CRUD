import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './views/test/test.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [AppComponent, TestComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
