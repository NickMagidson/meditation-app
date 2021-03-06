import React from 'react'
import ReactDOM from 'react-dom';
import Close from '../imgs/close.png';
import Sounds from './Sounds';
import Timer from './Timer';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(255, 255, 255, 80%)',
  borderRadius: '15px',
  padding: '50px',
  zIndex: 1000,
  maxWidth: '400px',
  width: '60%',
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
}

export default function Modal({ open, children, onClose }) {
  if (!open) return null

  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} />

      <div style={MODAL_STYLES}>

        <h2 className='settings-text'>Settings</h2>
        <button className='close-button' onClick={onClose}><img className='close-img' src={Close} /></button>
        {children}	 

        <div className='modal-divider'> </div>

        <div className='sound-div'>
          <h2 className='sound-title'>Sound Select</h2>
          <Sounds />
        </div>

      </div>
    </>,
    document.getElementById('portal')
  )
}
