import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { routerList } from './common/constant';
import Home from './pages/Home';
import Join from './pages/Join';
import Community from './pages/Community';
import About from './pages/About';


const PAGE_MAP: Record<string, any> = {
  'home': Home,
  'join': Join,
  'community': Community,
  'about': About
}

export default function App() {
  return (
    <Router>
      <Routes>
        {
          routerList.map(item => {
            const Main = PAGE_MAP[item.code];
            return (
              <Route element={<Main />} key={item.code} path={`/${item.code}`} />
            )
          })
        }
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}
