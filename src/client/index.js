import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { Provider } from 'react-redux';
import store from './store/index';

// store.dispatch({ type: 'ADD_USER', payload: { id: 2, name: 'Manager', email: 'manager@mail.com' } });

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));