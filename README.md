
Tech Stack, Libraries etc.

* React Typescript
* Redux Saga
* Tailwind
* Sass (Also used as a module in Components)
* Antdesign
* Immutable.js (used in store)

Because of the size of datas, I couldn' t load them to my typicode server.
Becase typicode only allow 10Kb size of file. But still, to fetch datas from the
server, I created a tiny backend with node.js to fetch companies and products data (https://getir-assignment-app-server.com/api/products)

I used Scss and Tailwind togetger. And to prevent ugly view
of HTML elements with crowded class names I used "@teamsupercell/typings-for-css-modules-loader"
loader to use Sass as a module in components.

To deploy project to Heroku I added index.js file to run server
and added "heroku-postbuild" script to package.json. In this way
heroku run "heroku-postbuild" automatically and created a dist file
in server after installed packages, and returned html file from server.js

https://getir-assignment-app-server.herokuapp.com/api/products

https://getir-assignment-frontend.herokuapp.com/


Thank you.
