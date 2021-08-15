import React from "react";
import styles from '../styles/Header.module.css'
import Link from "next/link";

function Header() {
    return (
        <header className="container-fluid w-100 mx-auto py-1">
            <nav class="navbar navbar-expand-lg navbar-light d-flex flex-row container-md">
                <Link href="/" passHref>
                    <a className="d-flex align-items-center navbar-brand">
                        <img src="./images/logo4.svg" className="mx-2" id={styles.logo} href="#" />
                        <span className="text-primary fs-5 fw-bold">SEOlist.pro</span>
                    </a>
                </Link>
                <button id={styles.navbarToggler} class="navbar-toggler rounded-pill text-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse px-4 py-3" id="navbarSupportedContent">
                    <ul id={styles.menu} class="navbar-nav mb-2 mb-lg-0 text-primary">
                        <li className="nav-item">
                            <Link href="/seo" passHref>
                                <a className="nav-link" href="#">SEO</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href="/contenido" passHref>
                                <a>
                                    <a class="nav-link" href="#">Contenido</a>
                                </a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Enlaces</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Adsense</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Ecommerce</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pagespeed Insights
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">LCP</a></li>
                                <li><a class="dropdown-item" href="#">FID</a></li>
                                <li><a class="dropdown-item" href="#">CLS</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    )

}


export default Header;