import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Board from './Board'
import { observe } from './Game'

//observe is used to store the same and post updates to state
observe(knightPosition =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    document.getElementById('root')
  )
)
