import React, { Children } from 'react';
import styles from './index.module.less';

interface IHomeLayoutProps {
    children: JSX.Element | string;
};

export default function HomeLayout(props: IHomeLayoutProps) {
    return (
        <div className={styles['layout-container']}>
            {props.children}
        </div>
    )
}