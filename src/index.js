import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

//부트스트랩, 아이콘, 스와이퍼
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'swiper/swiper-bundle.css';

import 'swiper/css'; 

// font, scss
import './fonts/fonts.css';
import './scss/common.scss';
import './scss/subway.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <App/>
  </BrowserRouter>
);
