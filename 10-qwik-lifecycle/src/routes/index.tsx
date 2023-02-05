import { component$, $,  useClientEffect$, useStore, useTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { isServer, isBrowser } from '@builder.io/qwik/build';


export default component$(() => {
  const store = useStore({
    count: 1,
    doubleCount: 0
  });

  const increment = $(() => {
    store.count++;
  });

  // Se ejecuta al iniciar y luego cada vez que cambia el valor
  // que estamos siguiendo, que sería store.count
  useTask$(({track}) => {
    if (isServer) {
      // If the component is mounted on the server, call DB directly.
      console.log('[SERVER] First load - Server')
    }
    if (isBrowser) {
      // If the component is mounted on the browser, fetch users through API.
      console.log('[BROWSER] Render after client OK and track values')
    }
    const count = track(() => store.count);
    console.log(count, 'useTask', isBrowser ? ' - Browser ': '- Server');
    store.doubleCount = 2 * count;
    // will run when the component mounts and every time "store.count" changes
  });

  useClientEffect$(() => console.log('runs in the browser'), {
    eagerness: 'visible', // 'load' | 'visible' | 'idle'
  });

  useClientEffect$(() => console.log('load in the browser'), {
    eagerness: 'load', // 'load' | 'visible' | 'idle'
  });

  useClientEffect$(() => console.log('idle in the browser'), {
    eagerness: 'idle', // 'load' | 'visible' | 'idle'
  });
  return (
    <div>
      <h1>
        Welcome to Qwik <span class="lightning">⚡️</span>
      </h1>
      <ul>
        <li>Count: {store.count}</li>
        <li>Double Count: {store.doubleCount}</li>
      </ul>
      <button onClick$={() => increment()}>+1</button>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
