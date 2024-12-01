import { registerRootComponent } from 'expo';

import App from './App';

<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './App.css';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
