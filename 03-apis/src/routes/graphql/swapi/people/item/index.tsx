/* eslint-disable no-console */
import { component$, Resource, useResource$ } from '@builder.io/qwik';
import { getStarWarsSelectPerson } from '~/api/fetch-graphql-api';

export default component$(() => {
  const id = 'cGVvcGxlOjE=';
  const reposResource = useResource$<any[]>(({ cleanup }) => {
    // A good practice is to use `AbortController` to abort the fetching of data if
    // new request comes in. We create a new `AbortController` and register a `cleanup`
    // function which is called when this function re-runs.
    const controller = new AbortController();
    cleanup(() => controller.abort());

    // Fetch the data and return the promises.
    return getStarWarsSelectPerson(controller, id);
  });

  console.log('Render');
  return (
    <Resource
      value={reposResource}
      onPending={() => <>Loading...</>}
      onRejected={(error) => <>Error: {error.message}</>}
      onResolved={(people: any) => {
        return (
          <>
            <h3>Luke Skywalker personal info</h3>
            {people.name} - {people.birthYear} - {people.eyeColor}
          </>
        );
      }}
    />
  );
});
