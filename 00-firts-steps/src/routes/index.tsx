import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h1>
        Bienvenid@s <span class="lightning">⚡️</span>
      </h1>
      <p>
        Esta es la página inicial de nuestro proyecto que se encuentra 
        en la ruta <code>/src/routes/index.tsx</code>
      </p>
      <ul>
        <li>Abrir página con formato markdown <Link href="/readme/">
        📑
      </Link></li>
      </ul>
      <p>El siguiente enlace nos lleva a la ruta <code>/flowers</code> cargando el contenido del fichero <code>/src/routes/flower/index.tsx</code></p>
      <Link class="mindblow" href="/flower/">
        Blow my mind 🤯
      </Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Bienvenido a Qwik',
  meta: [
    {
      name: 'description',
      content: 'Ejemplo básico de Qwik',
    },
  ],
};
