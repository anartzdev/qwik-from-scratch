import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h1 id='title'>Qwik APIs Examples</h1>
      <h3>REST</h3>
      <ul>
        <li>
          <Link href='/rest/github/'>Github API</Link>
        </li>
        <li>
          <Link href='/rest/f1/drivers/'>
            F1 Drivers - 2022 with option to take data between 1950 and 2022
            (include)
          </Link>
        </li>
      </ul>
      <h3>GraphQL</h3>
      <ul>
        <li>
          <Link href='/graphql/swapi/people/all/'>Star Wars all People</Link>
        </li>
        <li>
          <Link href='/graphql/swapi/people/item/'>
            Luke Skywalker personal info
          </Link>
        </li>
      </ul>
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
