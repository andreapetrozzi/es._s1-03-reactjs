### Description
We make EpiBooks better

In this exercise you will work again on your EpiBooks project, implementing features like state and props
to refactor the code and make it more reusable.

1. Create a `SingleBook` component using a function.
   This component must be set up to receive an object in the props
   corresponding to a single book, and will display its cover and title.
   Use react-bootstrap `Cards` (if you want to test it, the book object can be taken
   from one of the ".json" files you received yesterday).

2. Create a `BookList` component. This component will receive from the props an array of books,
   and will display them through a `.map()` returning the `SingleBook component for each element.
   Then mount `BookList` inside the `App` component, and provide it a list of books from one of the `.json` files as a prop.
   You should get a result similar to the "AllTheBooks" component:
   now, however, the structure is much more modular and reusable.

3. Create a `filterBookList` function. By writing a search string into an input field,
   the `BookList` component will have to render only the books containing the searched string as book title
   (hint: save the search string inside the BookList component state and filter the books accordingly).
   
4. Convert your `SingleBook` component into a class, and creates its state containing a boolean property "selected".

5. A click on the book cover will toggle the "selected" property.
   If the "selected" property is "true", the "SingleBook" should be styled accordingly
   the change of state, visually (you could for example use a red border).


### Terminal commands: 
- `npm i bootstrap@4.6.1`;
- `npm i react-bootstrap@1.6.5`.





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
