import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Age } from '~/components/age';
import { Hobbies } from '~/components/hobbies';
import { Title } from '~/components/title';

export default component$(() => {
  return (
    <div style="border: 3px dotted purple; padding: 10px">
      <Title greetingText={'Hola'} name={'Anartz'} />
      <br />
      <Age age={37} />
      <Hobbies hobbies={['leer', 'deporte', 'videojuegos']} />
      <Title greetingText={'Adios'} name={'Qwik'} />
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
