import React, { Component } from 'react'
import Backdrop from './backdrop/Backdrop'
import SideDrawer from './sidedrawer/SideDrawer'
import Toolbar from './toolbar/Toolbar'
export default class Appbar extends Component {
    state = {
        sideDrawerOpen : false
    }
    drawerToggleClickHandler = () => {
        this.setState((prevState)=>{
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };
    backdropClickHandler = () =>{
        this.setState({sideDrawerOpen:false})
    }
    render() {
        let backdrop;
        if(this.state.sideDrawerOpen){
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }
        return (
            <div style={{height:"100%"}}>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
            </div>
        )
    }
}
