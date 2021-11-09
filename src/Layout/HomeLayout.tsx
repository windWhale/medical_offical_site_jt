import React, { useEffect } from "react";
// import { Link } from "react-router-dom";

import { routerList } from "../common/constant";

import "./index.less";

interface IHomeLayoutProps {
    children: JSX.Element | string;
}

export default function HomeLayout(props: IHomeLayoutProps) {
    useEffect(() => {
        // header滚轮事件
        window.addEventListener("scroll", (e) => {
            let header = document.querySelector("header");
            header.classList.toggle("sticky", window.scrollY > 0);
        });
    }, []);
    return (
        <div className="layout-container">
            <header className="header">
                <div className="logo"></div>
                <label
                    htmlFor="toggle-nav"
                    className="menuBtn"
                ></label>
                <input type="checkbox" name="" id="toggle-nav" />
                <div className="collapse">
                    <nav>
                        {routerList.map((item) => (
                            <a key={item.code} href={`#/${item.code}`}>
                                {item.title}
                            </a>
                        ))}
                    </nav>
                </div>
            </header>
            <section className="content">{props.children}</section>
            <footer className="footer">footer businessinfo</footer>
        </div>
    );
}
