import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SignInPageComponent} from './component/sign-in-page/sign-in-page.component';
import {SignUpPageComponent} from './component/sign-up-page/sign-up-page.component';
import {MainPageComponent} from './component/main-page/main-page.component';
import {ProfilePageComponent} from './component/profile-page/profile-page.component';
import {PostDetailsPageComponent} from './component/post-details-page/post-details-page.component';
import {BookmarksPageComponent} from './component/bookmarks-page/bookmarks-page.component';
import {MyPostsPageComponent} from './component/my-posts-page/my-posts-page.component';
import {FriendsPageComponent} from './component/friends-page/friends-page.component';

const routes: Routes = [
  {
    path: 'signIn',
    component: SignInPageComponent
  },
  {
    path: 'signUp',
    component: SignUpPageComponent
  },
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: 'profile',
    component: ProfilePageComponent
  },
  {
    path: 'post-detail/:id',
    component: PostDetailsPageComponent
  },
  {
    path: 'saved',
    component: BookmarksPageComponent
  },
  {
    path: 'my-posts',
    component: MyPostsPageComponent
  },
  {
    path: 'friends',
    component: FriendsPageComponent
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
