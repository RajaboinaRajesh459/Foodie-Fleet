// import React from "react";
// import ReactDOM from 'react-dom/client';
// import App from "./App";
// import "bootstrap/dist/css/bootstrap.css";
// import "remixicon/fonts/remixicon.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./index.css";


// import store from "./store/store";
// import { Provider } from "react-redux";

// import { BrowserRouter as Router } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Router>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </Router>
//   </React.StrictMode>,
// );

import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
);
