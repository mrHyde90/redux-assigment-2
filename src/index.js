import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//redux
import { Provider } from 'react-redux';
import { createStore} from 'redux';
//reducers
import reducer from './store/reducers/personReducer';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

//se crea el store
const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
