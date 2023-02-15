import { CommonModule } from '@angular/common';
import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="flex min-h-screen flex-col">
      <header class="bg-gray-800 p-4">
        <nav class="mx-auto max-w-screen-md">
          <ul class="flex items-center gap-8">
            <li>
              <a routerLink="/" class="hover:text-violet-400">Home</a>
            </li>
            <li>
              <a routerLink="/about" class="hover:text-violet-400">About</a>
            </li>
          </ul>
        </nav>
      </header>
      <main class="mx-auto max-w-screen-md flex-1 p-10">
        <router-outlet />
      </main>
      <footer class="bg-gray-800 p-4 text-center">
        <p>Created By: Christian Penrod @2023</p>
      </footer>
    </div>
  `,
})
export class App {}

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot([
        {
          path: '',
          loadComponent: () =>
            import('./app/pages/home').then((m) => m.HomePage),
        },
        {
          path: 'about',
          loadComponent: () =>
            import('./app/pages/about').then((m) => m.AboutPage),
        },
        { path: '**', redirectTo: '/', pathMatch: 'full' },
      ]),
    ),
  ],
});
