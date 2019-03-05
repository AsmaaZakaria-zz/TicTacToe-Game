import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {Link} from 'react-router';
import {NavToggleButton} from '../styled/NavDrawer';

class NavDrawer extends Component {
    state = {
        open: true,
        width: 250,
    }

    toggle = () => {
        this.setState((prevState, props) => {
            return {
                open: !prevState.open
            }
        })
    }

    render() {
        const { open, width } = this.state;
        return (
          <div>
              <NavToggleButton
                  open={open}
                  width={width}
                  toggle={this.toggle}
              />
              <Drawer
                  open={open}
                  width={width}
              >
                  <div style={{height: '200px', width: '100%', backgroundColor: 'salmon'}}>
                      LoginContainer
                  </div>
                  <Divider />
                  <Link to={'/'} onClick={this.toggle}><MenuItem primaryText={'Play'}/></Link>
                  <Link to={'/profile'} onClick={this.toggle}><MenuItem primaryText={'Profile'}/></Link>
              </Drawer>
          </div>
        )
    }
}

export default NavDrawer;
