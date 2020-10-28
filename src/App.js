import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import 'antd/dist/antd.css';
import './assets/css/al_ui.css';
import './assets/css/components.css';
import './assets/css/index.css';

const App = () => (
    <Router>
        <Routes />
    </Router>
);

export default App;
