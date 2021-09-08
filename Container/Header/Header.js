import React from 'react'
import HeaderWrapper from "./HeaderWrapper"
import AppsIcon from '@material-ui/icons/Apps';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { Button, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { sidebarShow } from '../../pages/redux.js/action';
import { useDispatch } from 'react-redux';
const Header = () => {
    const dispatch = useDispatch()
    return (
        <HeaderWrapper>
            <>
                <header >
                    <div className="headermain">
                        <div className="imgh2">
                            <img className="logo1" src="data:image/png;base64,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"></img>
                            <h5 className="ms-1">BINANCE</h5>

                        </div>
                        <div className="iconcs1 d-flex">
                            <AppsIcon className="icon1"></AppsIcon>
                            <div className="dropdawn">
                                <div className="d-flex">
                                    <ul>
                                        <li className="d-flex align-items-center drop1">
                                            <div className="">
                                                <h5 className="mb-0">Exchange</h5>
                                                <p>биржа криптоактив</p></div>
                                            <ArrowForwardIcon className="ms-3 text-warning"></ArrowForwardIcon>
                                        </li>
                                        <li className="d-flex align-items-center drop1">
                                            <div className="">
                                                <h5 className="mb-0">Инстутсионални</h5>
                                                <p>VPI решени</p></div>
                                            <ArrowForwardIcon className="ms-3 text-warning"></ArrowForwardIcon>
                                        </li>
                                        <li className="d-flex align-items-center drop1">
                                            <div className="">
                                                <h5 className="mb-0">DEX</h5>
                                                <p>образ и многогранно</p></div>
                                            <ArrowForwardIcon className="ms-3 text-warning"></ArrowForwardIcon>
                                        </li>
                                        <li className="d-flex align-items-center drop1">
                                            <div className="">
                                                <h5 className="mb-0">Research</h5>
                                                <p>св творческий путь как</p></div>
                                            <ArrowForwardIcon className="ms-3 text-warning"></ArrowForwardIcon>
                                        </li>

                                    </ul>
                                    <ul>
                                        <li className="d-flex align-items-center drop1">
                                            <div className="">
                                                <h5 className="mb-0">Academy</h5>
                                                <p>биржа криптоактив</p></div>
                                            <ArrowForwardIcon className="ms-3 text-warning"></ArrowForwardIcon>
                                        </li>
                                        <li className="d-flex align-items-center drop1">
                                            <div className="">
                                                <h5 className="mb-0">Charty</h5>
                                                <p>VPI решени</p></div>
                                            <ArrowForwardIcon className="ms-3 text-warning"></ArrowForwardIcon>
                                        </li>
                                        <li className="d-flex align-items-center drop1">
                                            <div className="">
                                                <h5 className="mb-0">Labs</h5>
                                                <p>образ и многогранно</p></div>
                                            <ArrowForwardIcon className="ms-3 text-warning"></ArrowForwardIcon>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between drop1">
                                            <div className="">
                                                <h5 className="mb-0">Trust Vallet</h5>
                                                <p>св творческий путь как</p></div>
                                            <ArrowForwardIcon className="ms-3 text-warning"></ArrowForwardIcon>
                                        </li>

                                    </ul>
                                    <ul>
                                        <li className="d-flex align-items-center drop1">
                                            <div className="">
                                                <h5 className="mb-0">Cloud</h5>
                                                <p>биржа криптоактив</p></div>
                                            <ArrowForwardIcon className="ms-3 text-warning"></ArrowForwardIcon>
                                        </li>
                                        <li className="d-flex align-items-center drop1">
                                            <div className="">
                                                <h5 className="mb-0">Brocker</h5>
                                                <p>VPI решени</p></div>
                                            <ArrowForwardIcon className="ms-3 text-warning"></ArrowForwardIcon>
                                        </li>
                                        <li className="d-flex align-items-center drop1">
                                            <div className="">
                                                <h5 className="mb-0">LanchPad</h5>
                                                <p>образ и многогранно</p></div>
                                            <ArrowForwardIcon className="ms-3 text-warning"></ArrowForwardIcon>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <ArrowDropDownIcon className="icon2"></ArrowDropDownIcon>
                            <ArrowDropUpIcon className="icon3"></ArrowDropUpIcon>
                        </div>
                        <ul className="ul1">
                            <li className="newli1 alls"><p className="headerwrite">Купит криптовалюта</p><span class="badge mb-2 bg-warning text-dark">EUR</span>
                                <div className="alls">
                                    <div className="dropdawn2">
                                        <p className="m-2">оплатит</p>
                                        <div className="d-flex">
                                            <ul>
                                                <li className="d-flex align-items-center drop2">
                                                    <div>
                                                        <h5 className="mb-0">Exchange</h5>
                                                        <p>биржа криптоактив</p></div>
                                                    <ArrowForwardIcon className="ms-3 text-warning"></ArrowForwardIcon>
                                                </li>
                                                <li className="d-flex align-items-center drop2">
                                                    <div>
                                                        <h5 className="mb-0">Exchange</h5>
                                                        <p>биржа криптоактив</p></div>
                                                    <ArrowForwardIcon className="ms-3 text-warning"></ArrowForwardIcon>
                                                </li>
                                                <li className="d-flex align-items-center drop2">
                                                    <div>
                                                        <h5 className="mb-0">Exchange</h5>
                                                        <p>биржа криптоактив</p></div>
                                                    <ArrowForwardIcon className="ms-3 text-warning"></ArrowForwardIcon>
                                                </li>
                                                <li className="d-flex align-items-center drop2">
                                                    <div>
                                                        <h5 className="mb-0">Exchange</h5>
                                                        <p>биржа криптоактив</p></div>
                                                    <ArrowForwardIcon className="ms-3 text-warning"></ArrowForwardIcon>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>

                                    <ArrowDropDownIcon className="icon7 mb-2"></ArrowDropDownIcon>
                                    <ArrowDropUpIcon className="icon6 mb-2"></ArrowDropUpIcon></div>
                            </li>
                            <li className="li1 mb-3 me-2 headerwrite" >Рынки</li>
                            <li className="newli1 alls ms-3"><p className="headerwrite">Торговля</p><span class="badge mb-2 bg-warning text-dark">EUR</span>
                                <div className="alls">
                                    <div className="dropdawn2">
                                        <p className="m-2">оплатит</p>
                                        <div className="d-flex">
                                            <ul>
                                                <li className="d-flex align-items-center drop2">
                                                    <div>
                                                        <h5 className="mb-0">Exchange</h5>
                                                        <p>биржа криптоактив</p></div>
                                                    <ArrowForwardIcon className="ms-3 text-warning"></ArrowForwardIcon>
                                                </li>
                                                <li className="d-flex align-items-center drop2">
                                                    <div>
                                                        <h5 className="mb-0">Exchange</h5>
                                                        <p>биржа криптоактив</p></div>
                                                    <ArrowForwardIcon className="ms-3 text-warning"></ArrowForwardIcon>
                                                </li>
                                                <li className="d-flex align-items-center drop2">
                                                    <div>
                                                        <h5 className="mb-0">Exchange</h5>
                                                        <p>биржа криптоактив</p></div>
                                                    <ArrowForwardIcon className="ms-3 text-warning"></ArrowForwardIcon>
                                                </li>
                                                <li className="d-flex align-items-center drop2">
                                                    <div>
                                                        <h5 className="mb-0">Exchange</h5>
                                                        <p>биржа криптоактив</p></div>
                                                    <ArrowForwardIcon className="ms-3 text-warning"></ArrowForwardIcon>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>

                                    <ArrowDropDownIcon className="icon7 mb-2"></ArrowDropDownIcon>
                                    <ArrowDropUpIcon className="icon6 mb-2"></ArrowDropUpIcon></div>
                            </li>
                            <li className="newli1 alls ms-3"><p className="headerwrite">Деривативы</p><span class="badge mb-2 bg-warning text-dark">EUR</span>
                                <div className="alls">
                                    <div className="dropdawn2">
                                        <p className="m-2">оплатит</p>
                                        <div className="d-flex">
                                            <ul>
                                                <li className="d-flex align-items-center drop2">
                                                    <div>
                                                        <h5 className="mb-0">Exchange</h5>
                                                        <p>биржа криптоактив</p></div>
                                                    <ArrowForwardIcon className="ms-3 text-warning"></ArrowForwardIcon>
                                                </li>
                                                <li className="d-flex align-items-center drop2">
                                                    <div>
                                                        <h5 className="mb-0">Exchange</h5>
                                                        <p>биржа криптоактив</p></div>
                                                    <ArrowForwardIcon className="ms-3 text-warning"></ArrowForwardIcon>
                                                </li>
                                                <li className="d-flex align-items-center drop2">
                                                    <div>
                                                        <h5 className="mb-0">Exchange</h5>
                                                        <p>биржа криптоактив</p></div>
                                                    <ArrowForwardIcon className="ms-3 text-warning"></ArrowForwardIcon>
                                                </li>
                                                <li className="d-flex align-items-center drop2">
                                                    <div>
                                                        <h5 className="mb-0">Exchange</h5>
                                                        <p>биржа криптоактив</p></div>
                                                    <ArrowForwardIcon className="ms-3 text-warning"></ArrowForwardIcon>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>

                                    <ArrowDropDownIcon className="icon7 mb-2"></ArrowDropDownIcon>
                                    <ArrowDropUpIcon className="icon6 mb-2"></ArrowDropUpIcon></div>
                            </li>
                            <li className="newli1 alls ms-3"><p className="headerwrite">Финансы</p><span class="badge mb-2 bg-warning text-dark">EUR</span>
                                <div className="alls">
                                    <div className="dropdawn2">
                                        <p className="m-2">оплатит</p>
                                        <div className="d-flex">
                                            <ul>
                                                <li className="d-flex align-items-center drop2">
                                                    <div>
                                                        <h5 className="mb-0">Exchange</h5>
                                                        <p>биржа криптоактив</p></div>
                                                    <ArrowForwardIcon className="ms-3 text-warning"></ArrowForwardIcon>
                                                </li>
                                                <li className="d-flex align-items-center drop2">
                                                    <div>
                                                        <h5 className="mb-0">Exchange</h5>
                                                        <p>биржа криптоактив</p></div>
                                                    <ArrowForwardIcon className="ms-3 text-warning"></ArrowForwardIcon>
                                                </li>
                                                <li className="d-flex align-items-center drop2">
                                                    <div>
                                                        <h5 className="mb-0">Exchange</h5>
                                                        <p>биржа криптоактив</p></div>
                                                    <ArrowForwardIcon className="ms-3 text-warning"></ArrowForwardIcon>
                                                </li>
                                                <li className="d-flex align-items-center drop2">
                                                    <div>
                                                        <h5 className="mb-0">Exchange</h5>
                                                        <p>биржа криптоактив</p></div>
                                                    <ArrowForwardIcon className="ms-3 text-warning"></ArrowForwardIcon>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>

                                    <ArrowDropDownIcon className="icon7 mb-2"></ArrowDropDownIcon>
                                    <ArrowDropUpIcon className="icon6 mb-2"></ArrowDropUpIcon></div>
                            </li>
                            <li className="li1 mb-3 headerwrite">NFS<span class="badge bg-warning text-dark">New</span></li>
                        </ul>
                    </div>
                    <div className="last  mb-3">

                        <Button className="butn2">Регистратция</Button>
                        <Button onClick={() => sidebarShow(dispatch)}><MenuIcon clasName="icon4"></MenuIcon></Button>
                    </div>
                </header>
            </>
        </HeaderWrapper>
    )
}

export default Header
