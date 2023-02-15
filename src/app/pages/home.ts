import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  template: `
    <section>
      <h1 class="mb-4 text-4xl text-violet-400">Home</h1>
      <p class="max-w-prose text-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora facere
        ducimus minus, animi reiciendis quas saepe reprehenderit blanditiis eum,
        molestiae ipsum aut iste dicta temporibus vel, recusandae qui sequi
        possimus.
      </p>
    </section>
  `,
})
export class HomePage {}
