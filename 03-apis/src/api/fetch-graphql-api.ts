// {"query":"{\n\tallPeople {\n    totalCount\n    people {\n      name\n      birthYear\n      eyeColor\n    }\n  }\n}"}

import { graphQLAPIData } from "./queries";

export async function getStarWarsPeople(
    controller?: AbortController
  ): Promise<any[]> {
    console.log('FETCH', graphQLAPIData.apiUrl);
    
    const resp = await fetch(graphQLAPIData.apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: graphQLAPIData.queries.allPeople }),
        signal: controller?.signal,
      })
        
    console.log('FETCH resolved');
    const json = await resp.json();
    console.log(json)
    return (json.data)
      ? json['data']['allPeople']["people"]
      : Promise.reject(json);
  }

  export async function getStarWarsSelectPerson(
    controller: AbortController,
    id: string
  ): Promise<any[]> {
    console.log('FETCH', graphQLAPIData.apiUrl);
    
    const resp = await fetch(graphQLAPIData.apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: graphQLAPIData.queries.selectPeopleDetails, variables: {
            person: id
        } }),
        signal: controller?.signal,
      })
        
    console.log('FETCH resolved');
    const json = await resp.json();
    console.log(json)
    return (json.data)
      ? json['data']['person']
      : Promise.reject(json);
  }
