import React from 'react';
// @ts-ignore
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { routerList } from './common/constant';

export default function App() {
    return (
        <Router>
                {
                    routerList.map(item => (<Route key={item.code} path={`/${item.code}`}>{item.title}</Route>))
                }
        </Router>
    )
}
