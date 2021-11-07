import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { routerList } from './common/constant';

export default function App() {
    return (
        <Router>
            <Routes>
                {
                    routerList.map(item => (<Route key={item.code} path={`/${item.code}`}>{item.title}</Route>))
                }
            </Routes>
        </Router>
    )
}
