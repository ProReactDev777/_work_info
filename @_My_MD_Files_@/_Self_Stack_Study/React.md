# `React v 19~ new concept`

Redux Toolkit  `RTK`

*  Redux Toolkit API
    - configStore(): add simple configuration option , auto combine slice reducers, include redux-thunk
    - createReducer(): 
    - createAction()
    - createSlice(): createReducer() + createAction()
    - combineSlices()
    - createLitsenrMiddleware()
    - createAsyncThunk()
    - createEntityAdapter()
    - createSelector()


# createSlice main func: `auto generates action creators + reducer (redux toolkit)`
# RTK query main func : `alternative userEffect + useState + axios + dispatch`
    function:
        createApi(): Define endpoints and hooks
        fetchBaseQuery()
        query():        For GET
        mutation():  	For POST/PUT/DELETE
        Auto Hooks:     ex: useGetUserQuery(), useUpdateUserMutation()
        Tag:   	Cache control
        Middleware:  	Auto-included in store setup
# createSlice func vs RTK Query func: 
    Both are part of Redux Toolkit(RTK).
    - createSlice is for local state mgn, reducers, actions ctrl)
      it is function that Redux reducers and actions. it automatically gen actions and reducers for you.
    - RTK Query  is simplifying API interaction and managing server side data
      fucuses on data fetching, caching, state mgn for API requests.

# loading react suspense:  `react.suspense fallback is not working in RTK station`

# createAsyncThunk vs RTK Query?
```
    both are part of Redux Toolkit. but they serve different purpose...
    RTK Query is better useful and powerful than createAsyncThunk.
    Why? 
    - For most API-related async operations, RTK Query is generally the better choice due to its powerful built-in features.
    - createAsyncThunk is better reserved for cases where you need more manual control or have non-API async operations
```

# Redux-Thunk and Redux-Saga and createAsyncThunk and RTK Query are equal? are they middleware?
No, these are not equal, and they have different relationships with Redux middleware.

- redux-thunk(middleware):   included in RTK? Yes. automaticallly added when using configureStore.
- redux-saga(middleware) in 2016:  included in RTK? No. must be added manually.
- createAsyncThunk(helper funciton - utility): is not middleware. it is just a utility that works with the redux-thunk middleware.  included in RTK? Yes part of Redux Toolkit.
- RTK Query(Data Fetching & Caching Solution) in 2024:  type: library with built-in middleware. included in RTK? yes. but must add its middelware to the store.

* For very complex async -> Redux-saga(But only if truly needed)
  RTK Query is fashion and future of Redux data fetching... OK?

// Use Case ~> ////////////////////////////
@ redux-thunk: Basic async logic
@ redux-saga:  Complex async flows
@ createAsyncThunk: Simplified thunk actions
@ RTK Query:  API fetching & cashing
//////////////////////////////////////////

* createAsyncThunk( include redux-thunk ) vs RTK Query
```
    RTK Query func > createAsyncThunk func  🤔
```

# zustand vs RTK
```
    They are both state management libraries for React. but they have different philosophics and trade-offs.
    Study:
        - Zustand: easy
        - RTK(Redux): complex
    Use case:
        - Zustand: small or middle project
        - RTK:  large complex project
    
    - they are not Equal~~~
```



componentDidMount()     such as	  useEffect(() => { ... }, [])
componentDidUpdate()    such as	  useEffect(() => { ... }, [deps]) with ref guard
componentWillUnmount()  such as   useEffect(() => { return () => { ... } }, [])