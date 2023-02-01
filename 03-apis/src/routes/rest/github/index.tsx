/* eslint-disable no-console */
import { component$, useStore, Resource, useResource$ } from '@builder.io/qwik';
import { getRepositories } from '~/api/fetch-rest-api';


export default component$(() => {
  const github = useStore({
    org: 'mugan86',
  });

  const reposResource = useResource$<string[]>(({ track, cleanup }) => {
    // We need a way to re-run fetching data whenever the `github.org` changes.
    // Use `track` to trigger re-running of this data fetching function.
    track(() => github.org);

    // A good practice is to use `AbortController` to abort the fetching of data if
    // new request comes in. We create a new `AbortController` and register a `cleanup`
    // function which is called when this function re-runs.
    const controller = new AbortController();
    cleanup(() => controller.abort());

    // Fetch the data and return the promises.
    return getRepositories(github.org, controller);
  });

  console.log('Render');
  return (
    <div>
      <span>
        GitHub username:
        <input
          value={github.org}
          onInput$={(ev) =>
            (github.org = (ev.target as HTMLInputElement).value)
          }
        />
      </span>
      <div>
        <hr></hr>
        { reposResource && <h2>Repositories List</h2>}
        <Resource
          value={reposResource}
          onPending={() => <>Loading...</>}
          onRejected={(error) => <>Error: {error.message}</>}
          onResolved={(repos) => (
            <ul>
              {repos.map((repo) => (
                <li>
                  <a href={`https://github.com/${github.org}/${repo}`} target="_blank">
                    {repo}
                  </a>
                </li>
              ))}
            </ul>
          )}
        />
      </div>
    </div>
  );
});

