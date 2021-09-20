import react from "react";
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes'
import { Provider } from "react-redux";
import store from "./Store";

import Header from "./Components/Header";

export default function App(){
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Routes/>
      </BrowserRouter>  
    </Provider>
  )
}
