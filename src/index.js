import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Title extends Component {
    handleOnClick(word) {
        console.log(this, word)
    }
    render () {
        return (
            //如果你想在事件函数当中使用当前的实例，你需要手动地将实例方法 bind 到当前实例上再传入给 React.js。
            <h1 onClick={this.handleOnClick.bind(this, 'Hello')}>This is a title.</h1>
        )
    }
}

class Header extends Component {
    render () {
        return (
            <div>
                <Title />
                <h2>This is a header.</h2>
            </div>
        )
    }
}

class Main extends Component {
    render () {
        return (
            <div>
                <h2>This is main content.</h2>
            </div>
        )
    }
}

class Footer extends Component {
    render () {
        return (
            <div>
                <h2>This is footer</h2>
            </div>
        )
    }
}

class Index extends Component {
    render () {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}


ReactDOM.render(
    <Index />,
    document.getElementById('root')
)