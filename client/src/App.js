import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import TableComponent from './Components/Table/Table';
import { Provider } from 'react-redux'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [modalShow, setModalShow] = React.useState(false);

  return (
    <Provider store={store}>
      <div className="App">
        <NavBar></NavBar>
        <Header></Header>
        <TableComponent></TableComponent>
      </div>
    </Provider>
  );
}

export default App;
