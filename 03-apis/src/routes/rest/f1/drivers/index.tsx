import { component$, useStore, Resource, useResource$ } from '@builder.io/qwik';
import { ergastF1DriversAPI } from '~/api/fetch-rest-api';
import { Driver } from '~/models/f1/driver';

export default component$(() => {
  const drivers = useStore({
    year: '2022',
  });

  const reposResource = useResource$<Driver[]>(({ track, cleanup }) => {
    // We need a way to re-run fetching data whenever the `github.org` changes.
    // Use `track` to trigger re-running of this data fetching function.
    track(() => drivers.year);

    // A good practice is to use `AbortController` to abort the fetching of data if
    // new request comes in. We create a new `AbortController` and register a `cleanup`
    // function which is called when this function re-runs.
    const controller = new AbortController();
    cleanup(() => controller.abort());

    // Fetch the data and return the promises.
    return ergastF1DriversAPI(drivers.year, controller);
  });

  console.log('Render');
  return (
    <div>
      <span>
        Select Year:
        <input
          type='number'
          min='1950'
          max='2022'
          value={drivers.year}
          onInput$={(ev) =>
            (drivers.year = (ev.target as HTMLInputElement).value)
          }
        />
      </span>
      <div>
        <hr></hr>
        {reposResource && <h2>{drivers.year} - Drivers List</h2>}
        <Resource
          value={reposResource}
          onPending={() => <>Loading...</>}
          onRejected={(error) => <>Error: {error.message}</>}
          onResolved={(drivers: Driver[]) => {
            return (
              <ul>
                {drivers.map((driver: any) => (
                  <li>
                    <a href={driver.url} target='_blank'>
                      {driver.givenName} {driver.familyName}
                    </a>
                  </li>
                ))}
              </ul>
            );
          }}
        />
      </div>
    </div>
  );
});
