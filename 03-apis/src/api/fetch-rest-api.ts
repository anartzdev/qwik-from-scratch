import { Driver } from '~/models/f1/driver';

export const ergastF1DriversAPI = async (
  year: string,
  controller?: AbortController
): Promise<Array<Driver>> => {
  const baseApi = 'https://ergast.com/api/f1/';
  const endPoint = `${year}/drivers.json`;

  const url = `${baseApi}${endPoint}`;
  console.log('FETCH', url);
  const data = await fetch(url, {
    method: 'GET',
    signal: controller?.signal,
  });
  console.log('FETCH resolved');
  const json: Array<Driver> = (await data.json())['MRData']['DriverTable'][
    'Drivers'
  ];
  return Array.isArray(json) ? json : Promise.reject(json);
};

export async function getRepositories(
  username: string,
  controller?: AbortController
): Promise<string[]> {
  console.log('FETCH', `https://api.github.com/users/${username}/repos`);
  const resp = await fetch(`https://api.github.com/users/${username}/repos`, {
    method: 'GET',
    signal: controller?.signal,
  });
  console.log('FETCH resolved');
  const json = await resp.json();
  return Array.isArray(json)
    ? json.map((repo: { name: string }) => repo.name)
    : Promise.reject(json);
}
