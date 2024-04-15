import { Routes } from '@angular/router';
import { AuthorComponent } from './component/author/author.component';
import { AuthorDetailComponent } from './component/author-detail/author-detail.component';

export const routes: Routes = [
    {
        path: '',
        component : AuthorComponent
    },
    {
        path: 'author-detail/:id',
        component : AuthorDetailComponent

    },
    {
        path: 'author-list',
        component : AuthorComponent

    },

];
