import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Header extends Component {
    render () {
        const isTrue = true
        const real = <h1>I love you</h1>
        const unreal = <h1>I don't love you</h1>
        return (
            <div>
                {isTrue ? real : unreal}
            </div>
        )
    }
}

ReactDOM.render(
    <Header />,
    document.getElementById('root')
)