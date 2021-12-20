import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';

import {SignInPageComponent} from './component/sign-in-page/sign-in-page.component';
import {SignUpPageComponent} from './component/sign-up-page/sign-up-page.component';
import {HeaderComponent} from './component/header/header.component';
import {MainPageComponent} from './component/main-page/main-page.component';
import {ProfilePageComponent} from './component/profile-page/profile-page.component';
import {PostDetailsPageComponent} from './component/post-details-page/post-details-page.component';
import {BookmarksPageComponent} from './component/bookmarks-page/bookmarks-page.component';

import {AuthService} from './service/auth.service';
import {UserService} from './service/user.service';
import {TokenInterceptor} from './service/token.interceptor';
import {MyPostsPageComponent} from './component/my-posts-page/my-posts-page.component';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {FriendsPageComponent} from './component/friends-page/friends-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    SignUpPageComponent,
    HeaderComponent,
    MainPageComponent,
    ProfilePageComponent,
    PostDetailsPageComponent,
    BookmarksPageComponent,
    MyPostsPageComponent,
    FriendsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [
    AuthService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}