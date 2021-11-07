import React, { Children } from 'react';
import styles from './index.module.less';

interface IHomeLayoutProps {
    children: JSX.Element | string;
};

export default function HomeLayout(props: IHomeLayoutProps) {
    return (
        <div className={styles['layout-container']}>
            <header className={styles['header']}>
                Header nav
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