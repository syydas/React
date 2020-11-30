import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class LikeBtn extends Component {
    static defaultProps = {
        likedText: '取消',
        unlikedText: '点赞'
    }

    constructor () {
        super()
        this.state = { isLiked: false }
    }

    handleClickOnLikeButton () {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render () {
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked
                    ? this.props.likedText
                    : this.props.unlikedText} 👍
            </button>
        )
    }
}
class Index extends Component {
    render () {
        return (
            <div>
                <LikeBtn likedText = '已赞' unlikedText = '赞'/>
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
)