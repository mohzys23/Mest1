import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './Components/Header';
import TopSection from './Components/TopSection';
import AsideCenter from './Components/AsideCenter';
import Section from './Components/Section';
import MidSection from './Components/MidSection';
import BottomSection from './Components/BottomSection';
import BuyButton from './Components/BuyButton';
import Cost from './Components/Cost';



ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header />
    <TopSection />
    <AsideCenter />
    <Section />
    <MidSection />
    <BottomSection />
<BuyButton />
<Cost />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
