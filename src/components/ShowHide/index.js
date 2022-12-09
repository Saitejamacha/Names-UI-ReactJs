/* eslint-disable lines-between-class-members */
/* eslint-disable prettier/prettier */
import { Component } from 'react'
import './index.css'

class ShowHide extends Component {
    state = { isFBtnClicked: false, isLBtnClicked: false }


    firstNameBtn = () => {
        this.setState(prevState => ({ isFBtnClicked: !prevState.isFBtnClicked }))
    }

    lastNameBtn = () => {
        this.setState(prevState => ({ isLBtnClicked: !prevState.isLBtnClicked }))

    }

    render() {
        const { isFBtnClicked, isLBtnClicked } = this.state

        return (
            <div className="bg-con">
                <div className="hiding">
                    <button type='button' onClick={this.firstNameBtn}>Show/Hide Firstname</button>
                    <div className="con-1">
                        {isFBtnClicked ? <div className="fNameCon">
                            <p>Sai Teja</p>
                        </div> : null}
                    </div>
                </div>
                <div className="con-2">
                    <button type='button' onClick={this.lastNameBtn}>Show/Hide Lastname</button>
                    <div className="hiding">
                        {isLBtnClicked ? <div className="lNameCon">
                            <p>Macha</p>
                        </div> : null}
                    </div>
                </div>
            </div>
        )
    }
}
export default ShowHide
