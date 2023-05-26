import React from 'react'
import Alert from '../components/Alert';
import './Alert.css'


function AlertApp() {
  return (
    <div className='alert-info'>
    <Alert type={'success'} message={'message login successfully'}/>
    <Alert type={'info'} message={'time trigger'} delay={true}/>
    <Alert type={'success'} message={'check our new products'} delay={true}/>
    </div>

  )
}

export default AlertApp;