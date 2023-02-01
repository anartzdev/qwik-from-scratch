/* eslint-disable no-console */
import { component$, Resource, useResource$ } from '@builder.io/qwik';
import { getStarWarsPeople } from '~/api/fetch-graphql-api';

export default component$(() => {
  const reposResource = useResource$<any[]>(({ cleanup }) => {
    // A good practice is to use `AbortController` to abort the fetching of data if
    // new request comes in. We create a new `AbortController` and register a `cleanup`
    // function which is called when this function re-runs.
    const controller = new AbortController();
    cleanup(() => controller.abort());

    // Fetch the data and return the promises.
    return getStarWarsPeople(controller);
  });

  console.log('Render');
  return (
    <Resource
          value={reposResource}
          onPending={() => <>Loading...</>}
          onRejected={(error) => <>Error: {error.message}</>}
          onResolved={(peopleList:any) => {
            return (
              <ul>
               {peopleList.map((people: any) => (
                  <li>
                    {people.name} - {people.birthYear } - { people.eyeColor}
                  </li>
                ))}
              </ul>
            );
          }}
        />
  );
});
