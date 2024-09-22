# Argument Map simple UI

## Packages used in this app

`cors` CORS a security feature that allows web pages to make requests to a different origin.
`express` is Node.js web application framework that allows us to create a resfull API.
`http-status` to indicate the status of an HTTP request.
`bubble` for compiling build script files and building the for the production.
`nodemon` to automatically restart the node application when file changes.

## Available Scripts

In the project directory, you can run:

### `node src/app.js`

### `npm run dev`

### `npm run start`

Runs the app in the development mode.\
Fetch basic argument data from [http://localhost:9000](http://localhost:9000).

### Deployment instruction on Vercel

`npm i -g vercel` to install Vercel CLI.
`vercel login` login to Vercel to authorize the Vercel CLI.
`vercel dev` execute the `vercel.json` with useing the local development command.
`vercel` to create a deployment.
`vercel --prod` to build your latest changes to the production.
