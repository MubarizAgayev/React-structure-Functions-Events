import React from 'react'
import kondisioner1 from '../assets/images/prod1-kondisioner.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'reactstrap'

function Products() {
    return (
        <div>
            <Card
                style={{
                    width: 'auto'

                }}
            >

                <img
                    alt="Card cap"
                    src={kondisioner1}
                    width="100%"
                />
                <div class="product-sale">
                    <span class="sale-price">300 ₼</span><br />
                    <span class="product-sale-info">Nağd alışa ENDİRİM</span>
                </div>

                <div className='star-icon'>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <a href='#'>0 rəy</a>
                </div>
                <div className='product-detail'> <a href='#'>Kondisioner LG A12CMH.NGGF-KIT, 12000 BTU / 30-40 m2, inverter</a></div>
                <div class="product-value">
                    <div class="product-price">
                        <span class="product__price--info">Qiymət</span>
                        <div class="product-price-cur">1899.99 <i class="icon-manat"></i></div>
                    </div>
                    <div className='border'></div>


                    <div class="product-btns">
                    </div>
                    <div class="product-credit">
                        Hissə-hissə ödəniş   <div class="product__credit-note">18 ay <span class="product-credit-price">106  <span class="icon-manat">₼</span></span></div>
                    </div>
                </div>

            </Card>
        </div>
    )
}

export default Products
