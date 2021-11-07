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
                <label htmlFor="toggle-nav" className={styles['menuBtn']}></label>
                <input type="checkbox" name="" id="toggle-nav"/>
                <div className={styles['collapse']}>
                    <nav>
                        {
                            routerList.map(item => (
                                <a key={item.code} href={`#/${item.code}`}>{item.title}</a>
                            ))
                        }
                    </nav>
                </div>
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