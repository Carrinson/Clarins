import { React, useContext, useState } from 'react'
import Carousel from './Carousel'
import Close from '../icons/icons8-close-50.png'

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: ' rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000
}

const popupStyle = {
  background: '#fff',
  padding: '1rem',
  borderRadius: '10px',
  width: '50%',
  height: '70%',
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer'
}

const btn = {
  width: '100%',
  height: '35px',
  borderRadius: '10px',
  backgroundColor: '#5CB338',
  border: 'none',
  color: 'white',
  fontSize: '1.2rem',
  fontFamily: 'EB Garamond, serif',
  cursor: 'pointer'
}

const popupContent = {
  marginLeft: '20px',
  paddingLeft: '5px',
  width: '35%',
  height: '80%'
}

const close = {
  width: '40px',
  marginLeft: '290px',
  marginTop: '-60px',
  marginBottom: '100px'
}

function CardPopup ({ card, onClose }) {
  if (!card) return null

  const images = Object.keys(card)
    .filter(key => key.startsWith('image_path') && card[key])
    .map(key => card[key])

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={popupStyle} onClick={e => e.stopPropagation()}>
        <Carousel images={images} />
        <div style={popupContent}>
          <div>
            <img style={close} src={Close} alt='' onClick={onClose} />
          </div>
          <h3> {card['product name']} </h3>
          <br />
          <p>
            {' '}
            <b>Description:</b> {card.description}{' '}
          </p>
          <br />
          <p>
            <b>Skin Type: </b>
            {card['skin type']}
          </p>
          <br />
          <p>
            <b>Price: {card.price} </b>
            <br />
            <br />
          </p>

          <button
            style={btn}
            onClick={onClose}
          >
            close
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardPopup
