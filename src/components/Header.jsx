import React from 'react'

export default function Header() {
    return (
        <>
            <header className="header navbar-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="nav-inner">
                                <nav className="navbar navbar-expand-lg">
                                    <a className="navbar-brand" href="index.html">
                                        <img src="assets/images/logo/white-logo.svg" alt="Logo" />
                                    </a>
                                    <button
                                        className="navbar-toggler mobile-menu-btn"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                        <ul id="nav" className="navbar-nav ms-auto">
                                            <li className="nav-item">
                                                <a href="#home" className="page-scroll active" aria-label="Toggle navigation">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#features" className="page-scroll" aria-label="Toggle navigation">Features</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="//#regin" aria-label="Toggle navigation">Overview</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#pricing" className="page-scroll" aria-label="Toggle navigation">Pricing</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="//#regin" aria-label="Toggle navigation">Team</a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="dd-menu collapsed"
                                                    href="//#regin"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#submenu-1-4"
                                                    aria-controls="navbarSupportedContent"
                                                    aria-expanded="false"
                                                    aria-label="Toggle navigation"
                                                >
                                                    Blog
                                            </a>
                                                <ul className="sub-menu collapse" id="submenu-1-4">
                                                    <li className="nav-item"><a href="//#regin">Blog Grid Sidebar</a></li>
                                                    <li className="nav-item"><a href="//#regin">Blog Single</a></li>
                                                    <li className="nav-item"><a href="//#regin">Blog Single Sibebar</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="//#regin" aria-label="Toggle navigation">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="button add-list-button">
                                        <a href="//#regin" className="btn">Get it now</a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
