import React from "react";
import styles from '../styles/Header.module.css'
import Link from "next/link";

function Header() {
    return (
        <header className="container-fluid w-100 mx-auto py-1">
            <nav className="navbar navbar-expand-lg navbar-light d-flex flex-row container-md">
                <Link href="/" passHref>
                    <a className="d-flex align-items-center navbar-brand">
                        <img src="./images/logo4.svg" className="mx-2" id={styles.logo} href="#" />
                        <span className="text-primary fs-5 fw-bold">SEOlist.pro</span>
                    </a>
                </Link>
                <button id={styles.navbarToggler} className="navbar-toggler rounded-pill text-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse px-4 py-3" id="navbarSupportedContent">
                    <ul id={styles.menu} className="navbar-nav mb-2 mb-lg-0 text-primary">
                        <li className="nav-item">
                            <Link href="/seo" passHref>
                                <a className="nav-link" href="#">SEO</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contenido" passHref>
                                <a>
                                    <a className="nav-link" href="#">Contenido</a>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Enlaces</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Adsense</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Ecommerce</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pagespeed Insights
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">LCP</a></li>
                                <li><a className="dropdown-item" href="#">FID</a></li>
                                <li><a className="dropdown-item" href="#">CLS</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    )

}


export default Header;