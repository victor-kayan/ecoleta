<h3 align="center">
  <img alt="Logo" title="#logo" width="300px" src=".github/logo.png">
  <br><br>
  <strong>Helping people efficiently find waste collection points!</strong>
</h3>

<p align="center">
  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
  </a>
  <a href="https://github.com/victor-kayan/ecoleta/blob/master/LICENSE" target="_blank">
    <img alt="License" src="https://img.shields.io/github/license/victor-kayan/ecoleta?color=%234CA462">
  </a>
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/victor-kayan/ecoleta?color=%2360CC7A">
</p>  

---

## :pushpin: About this project
:recycle: **Ecoleta** is a platform which helps people find waste collection points, aiming to facilitate the correct disposal.

It is composed by two main modules: :computer: [**web**](https://github.com/victor-kayan/ecoleta/tree/master/web) and :iphone: [**mobile**](https://github.com/victor-kayan/ecoleta/tree/master/mobile-app), in addiction to a :cloud: [**RESTful API**](https://github.com/victor-kayan/ecoleta/tree/master/server) as backend for both applications.

This project was built during the first edition of **[Next Level Week](https://nextlevelweek.com/)**.

> Big thanks to [Rocketseat](https://rocketseat.com.br), especially to [Diego Fernandes](https://github.com/diego3g), for holding this event!

## :hammer_and_wrench: Technologies
:cloud: For API REST: [Node.js](https://nodejs.org/) and [Express.js](https://expressjs.com/)

:computer: For web: [ReactJS](https://pt-br.reactjs.org/)

:iphone: For mobile: [React Native](https://reactnative.dev/) and [Expo](https://expo.io/)

:tada: In general: [TypeScript](https://www.typescriptlang.org/)

## :rocket: How to run the platform
> :bulb: It is worth mentioning that both web and mobile apps need the backend server running to work properly. Keeping that in mind, let's go ahead...

### :eyes: Prerequisites
First thing first, you are going to need to have installed in your machine: 
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com/) and/or [Yarn](https://yarnpkg.com/)
- [expo-cli](https://docs.expo.io/)

Optionally, if you wish to edit the code, I would recommend [Visual Studio Code](https://code.visualstudio.com/). Finally, with the prerequisites installed, the next step is to clone the project.

```bash
# Clone this repository
$ git clone https://github.com/victor-kayan/ecoleta
```

### :boom: Run backend
```bash
# Change to the server directory
$ cd ecoleta/server

# Install the dependencies packages
$ npm install
# Or...
$ yarn

# Run database migrations
$ npm run knex:migrate
# Or...
$ yarn knex:migrate

# Run database seeds
$ npm run knex:seed
# Or...
$ yarn knex:seed

# Run server in development mode
$ npm run dev
# Or...
$ yarn dev
```

### :eight_spoked_asterisk: Run web application
```bash
# Change to the web directory
$ cd ecoleta/web

# Install the dependencies packages
$ npm install
# Or...
$ yarn

# Run website in development mode
$ npm run start
# Or...
$ yarn start
```

The application will run on port 3000. Access [`http://localhost:3000`](http://localhost:3000).

### :star2: Run mobile device application
```bash
# Change to the mobile directory
$ cd ecoleta/mobile-app

# Run Metro Bundler
$ expo start
# Or...
$ yarn start
```

After that, to run the app on your mobile device:
1. Open the Expo app (Android) or the Camera app (iOS);
2. Scan the QR code;
3. **It is done!**

## :memo: License
This project is under MIT License. Take a look at [LICENSE](https://github.com/victor-kayan/ecoleta/blob/master/LICENSE) for details.

---

<h4 align="center">
  Made with ❤️ by <a href="https://github.com/victor-kayan" target="_blank">Victor Kayan</a>
<h4>