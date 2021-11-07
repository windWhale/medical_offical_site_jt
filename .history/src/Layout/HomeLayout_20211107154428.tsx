import React from 'react';
import { Link } from 'react-router-dom';

import { routerList } from '../common/constant';

import styles from './index.module.less';

interface IHomeLayoutProps {
    children: JSX.Element | string;
};

export default function HomeLayout(props: IHomeLayoutProps) {
    return (
        <div className={styles['layout-container']}>
            <header className={styles['header']}>
                <h1>LOGO</h1>
                <nav>
                    {
                        routerList.map(item => (
                            <Link key={item.code} to={`/${item.code}`}>{item.title}</Link>
                        ))
                    }
                </nav>
            </header>
            <section className={styles['content']}>
                {props.children}
            </section>
            <footer className={styles['footer']}>
                footer businessinfo
            </footer>
        </div>
    )
}