import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as action from '../../actions/demo.js'
//import 'index.css'

class Demo extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount () {
    }
    onChange (map,e) {
        this.props.dispatch(action.changeValue(map, e.target.value));
    }
    render () {
        let data = this.props.data.toJS()
         return <div style={{textAlign: 'center', marginTop: '20%'}}>
            <h2>Hello World</h2>
            <p>
                <span>账号：</span>
                <input type='text'
                    value={data.conditions.userName} 
                    onChange={this.onChange.bind(this, ['conditions', 'userName'])} 
                />
            </p>
            <p>
                <span>密码：</span>
                <input type='text'
                    value={data.conditions.userCode} 
                    onChange={this.onChange.bind(this, ['conditions', 'userCode'])} 
                />
            </p>
        </div>
    }
}
const MainState = (state) => ({
  data: state.demo
})
export default connect(MainState)(Demo)