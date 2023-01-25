# RTK Query Quick Start

I'm stuck so I'm going to comment out all my Sailor scout related code and reinstate my pokemon related code.

## To dos:
After you do the task above and get it to work: https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics

## Process:

### 1. Setting up your store and API service

#### Create an API service

First, we'll ceate a service definition that queries the publicly available PokeApi.

@ src/services/pokemon.js

...

With RTKQuery, you usually define your entire API definition in one place.
This is most likely different from what you see with other libraries... and there are several reasons for that.

Our perspective is that it's much easier to keep track of how requests, cache invalidation, and general app config behave when they're all in one central location in comparison to having x number of custom hooks in different files throughout your app.

Tip:

Typically you should only have one API slice per base URL that your app needs to communicate with.

For example, if your site fetches data from both `/api/posts` and `/api/users`, you would have a single API slice with `/api/` as the base URL, and separate endpoint definitions for `posts` and `users`.

This allows you to effectively take advantage of automated re-fetching (https://redux-toolkit.js.org/rtk-query/usage/automated-refetching) by defining tag (https://redux-toolkit.js.org/rtk-query/usage/automated-refetching#tags) relationships across endpoints.

For maintainability purposes, you may wish to split up endpoint definitions across multiple files, while still maintaining a single API slice which includes all of these endpoints.

See code splitting (https://redux-toolkit.js.org/rtk-query/usage/code-splitting) for how you can use the `injectEndpoints` property to inject API endpoints from other files into asingle API slice definition.

#### Add the service to the store

An RTKQ service generates a 'slice reducer' that should be included in the Redux root reducer, and a custom middleware that handles the data fetching. Both need to be added to the store.

@ src/store.js

...

#### Wrap your app with the `Provider`

If you haven't already done so, follow the standard pattern for providing the Redux store to the rest of the React app component tree:

@ src/index.jsx

...

### Use the query in a component

Once a service has been defined you can import the hooks to make a request.

@ src/App.jsx

...

When making a request you're able to track the state in several ways.

You can always check `data`, `status`, and `error` to determine the right UI to render.

In addition, `useQuery` also provides utility booleans like `isLoading`, `isFetching`, `isSuccess`, and `isError` for the latest request.

##### Basic Example

...

Okay, that's interesting... but what if you wanted to show multiple pokemon at the same time?

What happens if multiple components laod the same pokemon?

##### Advanced Example

RTKQ ensures that any component that subscribes to the same query will always use the same data.

RTKQ automatically de-dupes requests so you don't have to worry about checking in-flight requests and performances optimizations on your end.

Let's evaluate the sandbox below - make sure to check the Network panel in your browser's dev tools.

You will see 3 requests, even tho there are 4 subscribed components - `bulbasaur` only makes one request, and the loading state is synchronized between the two components.

For fun, try changing the value of the dropdown from  `Off` to `1s` to see the behavior continue when a query is re-ran.

