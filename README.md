## MERN-auth
Boilerplate for MERN-applications with user authentication

## Project Status
Finished

## Built with
* [MongoDB](https://www.mongodb.com/)
* [Express](https://expressjs.com/)
* [React](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [Redux](https://redux.js.org/)

## Installation and Usage
#### Example:
Clone this repository. You will need `node`, `nodemon` and `npm` installed globally on your machine.  
You need to add a file called `.env` to the root directory. The file should contain your MongoDB URI.
Example: `ATLAS_URI = YOUR_URI_GOES_HERE`

You also need to add `keys.js` to the `config/` directory. This file should contain a any secrey key.
Example: 
```javascript
module.exports = {
  secretOrKey: "secret"
};
```
Installation:  

`npm install`  

To Start MongoDB Server:  

`nodemon server`  

To Install and start React App:  
`cd client/`
`npm install`
`npm start`  

To Visit App:  

`localhost:3000`  

## License
[MIT](https://choosealicense.com/licenses/mit/)
