import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

const api = {
  url: 'https://YOUR_API',
  token: ''
}

if (process.env.NODE_ENV === 'production') {
  api.url = 'https://YOUR_API_PRODUCTION'
}

export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: `${api.url}/graphql`,
      credentials: 'same-origin'
    })
  ]),
  cache: new InMemoryCache()
});

export default api