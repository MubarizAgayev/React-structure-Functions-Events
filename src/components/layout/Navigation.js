import React from 'react'
import logo from '../../assets/images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faChevronDown, faPhoneVolume,faUser, faHeart, faScaleUnbalancedFlip, faCartShopping} from '@fortawesome/free-solid-svg-icons';

function Navigation() {
    return (
        <div>
            <div className='site'>
                <a>İndi al, 3 ay sonra ödə! Yalnız onlayn!</a>
            </div>
            <div className='row nav-area mt-4'>
                <div className='col-6'>
                    <div className='row  nav-area'>
                        <div className='col-5'>
                            <img src={logo} />
                        </div>
                        <div className='col-7'>
                            <div className='input'>
                                <input placeholder='Axtarış' />
                                <FontAwesomeIcon icon={faMagnifyingGlass} rotation={90} size="lg" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-6'>
                    <div className='row '>
                        <div className='col-7 '>
                            <div className='texts'>
                                <div className='text1'>
                                    <p className='text-danger'>Kampaniyalar</p>
                                    <div className='border'></div>
                                </div>
                                <div className='text2'>
                                    <p>Mağazalar</p>
                                    <div className='border'></div>
                                </div>
                                <div className='text3'>
                                    <div className='icon'>
                                        <p>Digər</p>
                                        <div className='down-icon'>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div>
                                    </div>
                                    <div className='border'></div>
                                </div>

                                <div className='header-call'>
                                    <h1>143</h1>
                                    <FontAwesomeIcon icon={faPhoneVolume} size="2xl" />
                                </div>
                            </div>


                        </div>

                        <div className='col-5'>
                                <ul className='icons'>
                                    <li><a> <FontAwesomeIcon icon={faUser} /></a></li>
                                    <li><a> <FontAwesomeIcon icon={faHeart} /></a></li>
                                    <li><a> <FontAwesomeIcon icon={faScaleUnbalancedFlip} /></a></li>
                                    <li><a> <FontAwesomeIcon icon={faCartShopping} /></a></li>

                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation
