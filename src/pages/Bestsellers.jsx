import React, { useState } from 'react'
// import Picture from './imgs/moisturizer_1.png';
import Products from '../../data/Face.json'
import bestsellerBg from '../assets/bstbg.jpg'
import CardPopup from '../components/CardPopup'

function Bestsellers () {
  const [selectedCard, setSelectedCard] = useState(null)

  return (
    <div className='bestsellers gen-container'>
      <div className='best_txt'>
        <h1 className='best_head'>25% OFF Our Bestsellers!!!</h1>

        <p className='best_p'>
          Shop Now! And Enjoy 25% Off all of Our Bestsellers <br />
        </p>
      </div>
      <div className='card-container card-containerbst'>
        {Products.cleanser &&
          Products.cleanser.map(data => {
            return (
              <div
                className='card'
                key={data.id}
                onClick={() => setSelectedCard(data)}
                onMouseEnter={e =>
                  (e.currentTarget.style.transform = 'scale(1.03)')
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.transform = 'scale(1.0)')
                }
              >
                <img
                  className='card-img'
                  src={data.image_path}
                  alt='dont work'
                />
                <div className='card-content'>
                  <h3>{data['product name']}</h3>
                  <br />
                  <p>
                    <b>{data.price}</b>
                  </p>
                </div>
              </div>
            )
          })}
      </div>

      <div className='best-container'>
        <div className='bestsellers_bg'>
          <img className='bestsellers_bg' src={bestsellerBg} alt='' />{' '}
        </div>

        <div className='best-btn_container'>
          <div className='bst-Btn'>
            <button className='bst-btn'>
              <a className='bst-link' href=''>
                Face
              </a>
            </button>

            <button className='bst-btn'>
              <a className='bst-link' href=''>
                Body
              </a>
            </button>

            <button className='bst-btn'>
              <a className='bst-link' href=''>
                Sun
              </a>
            </button>

            <button className='bst-btn'>
              <a className='bst-link' href=''>
                Men
              </a>
            </button>

            <button className='bst-btn'>
              <a className='bst-link' href=''>
                View All
              </a>
            </button>
          </div>

          <h1 className='txt'> Skincare We Love </h1>
        </div>
      </div>
      <CardPopup card={selectedCard} onClose={() => setSelectedCard(null)} />
    </div>
  )
}

export default Bestsellers
