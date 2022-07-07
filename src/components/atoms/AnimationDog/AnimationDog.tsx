import React from 'react'
import dog from '../../../../src/images/cane_37.gif'
import classes from './AnimationDog.module.scss'

const AnimationDog = () => {
  return (
    <div className={classes.dog}>
        <img src={dog} style={{height: '60px'}}/>
    </div>
  )
}

export default AnimationDog