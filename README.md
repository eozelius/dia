## Dia & Co News API Technical test
Welcome, this is my solution to the Dia & Co technical assessment.  

## Folder Structure

After creation, your project should look like this:

```
dia/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
      App.js
      Articles.js
      Search.js
      Sources.js
    images/
    styles/
      App.css
    test/
      __mocks__/
        articles.json
        sources.json
      Api.test.js
      App.test.js
      Articles.test.js
      Sources.test.js
      Search.test.js
    Api.js  
    index.js
    setupTest.js
    registerService worker
  .git
  .gitignore
  .yarn.lock
  .package-lock.json
```

## Getting started
This project was initialized using [create-react-app](https://github.com/facebook/create-react-app), and all the associated commands are valid.

### NewsApi.org Api Key
It is recommended to keep your NewsAPI key in an environment variable, then sent to newsAPI as a X-Api-Key header.  However in the interest of simplicity, my personal API key has been hard-coded into src/Api.js.<br>
I will generate a new token and remove the references in the code once this test has been viewed.

### `npm start` or `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test` or `yarn test`

Launches the test runner in the interactive watch mode.<br>