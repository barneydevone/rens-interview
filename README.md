# Todo app module by Barney

## Installing
1. yarn install
2. yarn dev (start at http://localhost:3000)
3. yarn cy:run (run cypress test)

## Unit Testing Library - Cypress
1. E2E test 
  - `cypress/e2e/pages/...` : Create E2E testcase in this directory
  - Write `describe (...)` -> `it(should....)` test 
  - use `yarn cy:run` to run testcase
2. Component test 
  - `components/__test__/...` : Create components testcase in this directory 
  - Write `describe (...)` -> `it(should....)` test 
  - use `yarn cy:run` to run testcase

## State management - Redux
1. `reducers` -  take the current state and an action as arguments
2. `selectors` - accepts the Redux store state as an argument
3. `actions` - events that occur in the app based on user input, and trigger updates in the state
4. `stores` - holds the whole state tree of todos application

### Benefit when using Redux
- Increases the Predictability of a State
- Optimizes Performance
- Makes Debugging Easier

## Folder structure
1. `cypress` - Unit testting 
2. `components` - Refer to other components 
3. `reducers, selectors, store, actions` - Redux 
4. `pages` - NextJS Pages 
5. `types` - Type definition 

## Demontrate place different components or containers of a large React component
### Structure
- `src` => App code here
 + `src/pages` => routes NextJS
 + `src/components`
 + `src/redux`
 + `src/types`
 + `src/configs`
 + `src/utils`
- `webpack` => Webpack configs
- `scripts` => Any build scripts
- `tests` => Any test specific code 

### Explanation
- It is Highly Maintainable because we break down application in meaningful parts