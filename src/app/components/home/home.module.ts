import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { AddStoryComponent } from './components/add-story/add-story.component';
import { DetailsStoryComponent } from './components/details-story/details-story.component';
import { ShowStoryComponent } from './components/show-story/show-story.component';
import { HomeRoutingModule } from "./home-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatIconModule} from '@angular/material/icon'
@NgModule({
  declarations: [HomeComponent, AddStoryComponent, DetailsStoryComponent, ShowStoryComponent],
  imports: [CommonModule,HomeRoutingModule, MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,]
})
export class HomeModule {

}
