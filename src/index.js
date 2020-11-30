import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class LikeBtn extends Component {
    constructor() {
        super()
        this.state = { isLiked: false }
    }

    handleOnClick() {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render() {
        return(
            <button onClick={ this.handleOnClick.bind(this)}>
                {this.state.isLiked ? '取消' : '点赞'} 👍
            </button>
        )
    }
}

class Index extends Component {
    render () {
        return (
            <div>
                <LikeBtn />
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
)