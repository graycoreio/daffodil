# Developer Documentation

## Running the example foundation-demo
1. Ensure that lerna is installed in your local environment `npm install --global lerna`.
2. Run `lerna bootstrap`. This will basically run `npm install` in all required packages within the project. 
3. Compile the `@daffodil/core` project by running `ng build core`
    * This will compile the `@daffodil/core` module into an npm package in the `dist` folder, identical to the one located in the npm `@daffodil/core` repository. 
4. `ng serve --project=foundation-demo`
5. Navigate to `localhost:4200` in your browser of choice


## Developing the example foundation-demo
