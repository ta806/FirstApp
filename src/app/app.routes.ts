import { ContactComponent } from './../components/contact/contact.component';
import { Routes } from '@angular/router';
import { Home } from './../components/home/home';
import { AboutComponent } from '../components/about/about.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';
import { GalleryComponent } from '../components/gallery/gallery.component';
import { HeadphoneComponent } from '../components/headphone/headphone.component';
import { AirbudsComponent } from '../components/airbuds/airbuds.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"

    },
    {
        path: "home",
        component: Home,
        title: "app | Home",
    },
    {
        path: "about",
        component: AboutComponent,
        title: "app | About",

    },
    {
        path: "contact",
        component: ContactComponent,
        title: "app | Contact",

    },
    {
        path: "gallery",
        component: GalleryComponent,
        title: "app | gallery",
        children: [
            {
                path: "",
                redirectTo: "home",
                pathMatch: "full"

            },
            {
                path: "headphone",
                component: HeadphoneComponent,
                title: "app | gallery | headphone",

            },
            {
                path: "airbuds",
                component: AirbudsComponent,
                title: "app | gallery | airbuds",

            }

        ]

    },
    {
        path: "**",
        component: NotfoundComponent,
        title: "app | Notfound",


    }



];
