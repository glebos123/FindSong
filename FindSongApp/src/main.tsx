import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import {ApolloClient, ApolloCache, InMemoryCache, ApolloProvider, HttpLink, from} from '@apollo/client'
import App from './App'
import './index.css'
import {MemoryCache} from "../Cache/Cache";

const httpLink = new HttpLink({uri: 'http://localhost:53366/graphql/'});

const client = new ApolloClient({
    link: from([httpLink]),
    cache:  MemoryCache,
    connectToDevTools: true,
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </ApolloProvider>
  </React.StrictMode>,
)
