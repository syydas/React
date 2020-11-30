import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
]

class User extends Component {
    render() {
        const {user} = this.props
        return (
            <div>
                <div>name: {user.username}</div>
                <div>age: {user.age}</div>
                <div>gender: {user.gender}</div>
                <hr />
            </div>
        )
    }
}
class Index extends Component {
    render () {
        return(
            <div>
                {users.map((user, i) => <User key = {i} user = {user} />)}
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
)