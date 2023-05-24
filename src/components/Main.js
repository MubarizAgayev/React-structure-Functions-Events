import React from 'react'
import background from '../assets/images/background.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faChevronDown, faPhoneVolume, faUser, faHeart, faScaleUnbalancedFlip, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Categories from './Categories';
import Products from './Products';







function Main() {
    return (
        <div>
            <br></br>
            <hr></hr>
            <div className='row mt-1'>
                <div className='col-6'>
                    <div className='advert-img '>
                        <img src={background} />
                    </div>
                </div>

                <div className='col-6'>
                    <div className='content'>
                        <a href="">Bütün kampaniyalar</a>
                        <div className='content-area'>
                            <p className='title'>Müstəqillik Günü münasibətilə sənə xüsusi təkliflərimiz var!</p>
                            <p>15-31 may tarixləri arasında alış-verişlərdə müstəqilsən!&nbsp;</p>
                            <p>Nağd alışda 50 %-dək endirim!
                                <br />Məişət texnikası, TV və kondisioner 0 0 0 18 AY
                                <br />Smart-saat və aksesuarlar 0 0 18 AY
                                <br />Minik vasitələri və İT məhsulları 0 0 15 AY
                            </p>
                        </div>



                        <div class="blog-item-period">
                            <div class="dates">Kampaniyanın sonuna qalıb</div>
                            <h4><b>07gün:16saat:13dəq</b></h4>
                        </div>


                    </div>

                </div>
            </div>

            <div className='row'>
                <div className='col-3'>
                    <Categories />
                </div>
                <div className='col-9'>
                    <div className='row '>
                        <div className='col-4'>
                            <Products />
                        </div>
                        <div className='col-4'>
                            <Products />
                        </div>
                        <div className='col-4'>
                            <Products />
                        </div>
                    </div>
                    <div className='row my-3'>
                        <div className='col-4'>
                            <Products />
                        </div>
                        <div className='col-4'>
                            <Products />
                        </div>
                        <div className='col-4'>
                            <Products />
                        </div>
                    </div>
                    <div className='row my-3'>
                        <div className='col-4'>
                            <Products />
                        </div>
                        <div className='col-4'>
                            <Products />
                        </div>
                        <div className='col-4'>
                            <Products />
                        </div>
                    </div>
                    <div className='row my-3'>
                        <div className='col-4'>
                            <Products />
                        </div>
                        <div className='col-4'>
                            <Products />
                        </div>
                        <div className='col-4'>
                            <Products />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main
