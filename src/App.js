import React from 'react';
import AppRouter from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/font-awesome.min.css';
import 'antd/dist/antd.css';
import './assets/css/al_ui.css';
import './assets/css/components.css';
import './assets/css/index.css';

class App extends React.Component {
  render() { 
    return ( <AppRouter /> );
  }
}
 
export default App;
