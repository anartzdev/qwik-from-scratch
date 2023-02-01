export const graphQLAPIData = {
  apiUrl: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  queries: {
    allPeople: `{
            allPeople {
            totalCount
            people {
                id
              name
              birthYear
              eyeColor
            }
          }
        }`,
    selectPeopleDetails: `
        query selectPeopleDetails($person: ID!) {
            person(id: $person) {
              ...PeopleFragment
            }
          }
          
          fragment PeopleFragment on Person {
            id
            name
            birthYear
            height
            mass
            eyeColor
            skinColor
          }
        `,
    postsList: '{ posts { id title content author { name }} }',
    postOne: '{ post(id: 1) { id title content author { name }} }',
    getPostDinamically: `query queryValue ($id: Int!) {
            post(id: $id) { id title content author { name }} 
        }`,
  },
  mutations: {
    addComment: `mutation {
            addComment(comment: {
              name: "Hola",
              content: "Bien!",
              postId: 1
            }) {
              id
              name
              content
            }
        }`,
    addPost: `mutation {
            addPost(post: {
              title: "Prueba Fetch",
              content: "Esperemos que salga bien!",
              author: "88d6bec2",
              url: ""
            }) {
              id
              content
            }
        }`,
  },
};
