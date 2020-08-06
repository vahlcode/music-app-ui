import React, {Component} from "react";
import "./Header.css";
import UserPic from "../Assets/Images/Userpic.png";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                pic: UserPic
            }
        }
    }
    render() {
        return(
            <header>
                <div className="row">
                    <div className="search-form">
                        <form action="#" method="get">
                            <input type="search" name="search" id="search" placeholder="Search" autoComplete="off"/>
                            <button>
                                <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1">
                                    <defs>
                                        <path d="M16.0824 17.6715C16.5215 18.1095 17.2324 18.1095 17.6715 17.6715C18.1095 17.2324 18.1095 16.5215 17.6715 16.0835L14.134 12.546C16.4362 9.46662 16.2183 5.10026 13.4197 2.30278C10.3504 -0.767594 5.37204 -0.767594 2.30278 2.30278C-0.767594 5.37316 -0.767594 10.3504 2.30278 13.4197C5.10026 16.2183 9.46662 16.4362 12.546 14.134L16.0824 17.6715ZM3.89075 3.89075C6.08404 1.69747 9.63844 1.69747 11.8317 3.89075C14.025 6.08404 14.025 9.63844 11.8317 11.8317C9.63844 14.025 6.08404 14.025 3.89075 11.8317C1.69747 9.63844 1.69747 6.08404 3.89075 3.89075Z" 
                                            id="path_1" 
                                        />
                                        <clipPath id="mask_1">
                                        <use href="#path_1" />
                                        </clipPath>
                                    </defs>
                                    <path d="M16.0824 17.6715C16.5215 18.1095 17.2324 18.1095 17.6715 17.6715C18.1095 17.2324 18.1095 16.5215 17.6715 16.0835L14.134 12.546C16.4362 9.46662 16.2183 5.10026 13.4197 2.30278C10.3504 -0.767594 5.37204 -0.767594 2.30278 2.30278C-0.767594 5.37316 -0.767594 10.3504 2.30278 13.4197C5.10026 16.2183 9.46662 16.4362 12.546 14.134L16.0824 17.6715ZM3.89075 3.89075C6.08404 1.69747 9.63844 1.69747 11.8317 3.89075C14.025 6.08404 14.025 9.63844 11.8317 11.8317C9.63844 14.025 6.08404 14.025 3.89075 11.8317C1.69747 9.63844 1.69747 6.08404 3.89075 3.89075Z" 
                                        id="Search" 
                                        fill="#1F2022" 
                                        fillRule="evenodd" 
                                        stroke="none" 
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>

                    <div className="header-icons">
                        <ul>
                            <li className="notification">
                                <span className="notification-num">5</span>
                                <svg width="22px" height="26px" viewBox="0 0 22 26" version="1.1">
                                    <path d="M20.0362 16.3282C20.1761 16.5993 20.4423 16.851 20.7244 17.1176L20.7287 17.1216C21.4034 17.76 22.6494 18.9389 21.5878 21.0665C21.4005 21.4409 21.0397 21.6667 20.646 21.6667L1.35416 21.6667C0.960016 21.6667 0.599149 21.4407 0.412375 21.0664C-0.649607 18.9387 0.596763 17.7599 1.27144 17.1218L1.2758 17.1176C1.55779 16.8509 1.82417 16.5988 1.96623 16.3233C1.97569 16.3054 1.98309 16.2916 1.99079 16.2778C2.48829 15.4189 2.66781 13.359 2.77498 12.1282C2.79074 11.9468 2.80591 11.7734 2.82116 11.61C2.82248 11.5953 2.82409 11.5814 2.82578 11.5672C3.0654 9.75854 3.65776 7.16019 5.12307 5.02048C6.15531 3.51263 7.44271 2.50795 8.95303 2.03064C9.0407 0.895063 9.92531 0 11 0C12.0745 0 12.959 0.894984 13.047 2.03032C14.5572 2.50803 15.8447 3.51271 16.8769 5.02009C18.3422 7.16027 18.9346 9.75862 19.1735 11.5616C19.1759 11.5814 19.1774 11.5953 19.1788 11.6092C19.194 11.773 19.2092 11.9469 19.225 12.1283C19.3322 13.3588 19.5116 15.4185 20.0061 16.2723L20.0106 16.2803C20.0196 16.2964 20.0283 16.3123 20.0362 16.3282ZM8.30209 22.75L12.6863 22.75C12.8343 22.75 12.9674 22.8061 13.0611 22.9165C13.2136 23.0964 13.2056 23.3342 13.195 23.4302C13.0342 24.8948 11.8536 26 10.4488 26C9.05936 26 7.88033 24.9103 7.70615 23.4636C7.6818 23.2615 7.73024 23.0791 7.84246 22.9454C7.91922 22.8539 8.06117 22.75 8.30209 22.75Z" 
                                        id="Notifications" 
                                        fill="#1F2022" 
                                        fillOpacity="0.3"
                                        fillRule="evenodd" 
                                        stroke="none" 
                                    />
                                </svg>
                            </li>
                            <li className="user">
                                <img src={this.state.user.pic} alt=""/>
                                <svg width="10px" height="6px" viewBox="0 0 10 6" version="1.1">
                                    <path d="M4.99998 5.71429C4.82076 5.71429 4.64156 5.64569 4.50493 5.50878L0.205142 1.1984C-0.0683806 0.924203 -0.0683806 0.479645 0.205142 0.205562C0.478554 -0.0685207 0.921935 -0.0685207 1.19548 0.205562L4.99998 4.01963L8.80451 0.205695C9.07803 -0.0683876 9.52137 -0.0683876 9.79476 0.205695C10.0684 0.479778 10.0684 0.924336 9.79476 1.19853L5.49504 5.50891C5.35834 5.64584 5.17914 5.71429 4.99998 5.71429Z" 
                                        id="Arrow-Down" 
                                        fill="#1F2022" 
                                        stroke="none" 
                                    />
                                </svg>
                            </li>
                            <li className="menu">
                                <button>
                                    <svg width="20px" height="10px" viewBox="0 0 20 10" version="1.1">
                                    <path d="M1.36364 2.78689L18.6364 2.78689C19.3891 2.78689 20 2.16262 20 1.39344C20 0.624262 19.3891 0 18.6364 0L1.36364 0C0.61 0 0 0.624262 0 1.39344C0 2.16262 0.61 2.78689 1.36364 2.78689ZM18.6364 7.21311L1.36364 7.21311C0.61 7.21311 0 7.83738 0 8.60656C0 9.37574 0.61 10 1.36364 10L18.6364 10C19.3891 10 20 9.37574 20 8.60656C20 7.83738 19.3891 7.21311 18.6364 7.21311Z" 
                                        id="Combined-Shape" 
                                        fill="#1F2022" 
                                        fillRule="evenodd" 
                                        stroke="none" 
                                    />
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;