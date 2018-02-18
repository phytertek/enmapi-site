import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText }  from 'material-ui/List';
import Input from 'material-ui/Input';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import Home from 'material-ui-icons/Home';
import Create from 'material-ui-icons/Create';
import Search from 'material-ui-icons/Search';
import FolderOpen from 'material-ui-icons/FolderOpen';
import font from '../font.js';



class NavBarDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.search = this.search.bind(this);
  }
  componentDidMount() {
  }
  openMenu() {
    this.setState({ open: true });
  }
  closeMenu() {
    this.setState({ open: false });
  }
  search() {
    // searchlogic
    console.log(this.props);
  }
  submitSearch(e) {
    this.search();
    this.closeMenu();
  }
  handleSearch(e) {
    this.search();
  }
  render() {
    return (
      <React.Fragment>
        <IconButton  onClick={this.openMenu} aria-label="Menu">
          <MenuIcon />
        </IconButton>
          <Drawer 
            anchor="left"
            open={this.state.open}
            onRequestClose={this.closeMenu}
          >
            <IconButton onClick={this.closeMenu}>
              <ChevronLeftIcon />
            </IconButton>
            <List >
              <ListItem style={{paddingBottom: 7}}>
                <Search/>
                <Input
                  id="search"
                  placeholder="Search field"
                  name="search"
                  style={{...font, marginLeft: 10, lineHeight: 0, paddingBottom: 0, width: 240}}
                  type="search"
                  disableUnderline
                  className="search-bar"
                  inputRef={(v) => this.input = v}
                  onChange={this.handleSearch}
                  onKeyPress={(e) => e.key === 'Enter' ? this.submitSearch(e) : null}
                />
              </ListItem>
              {/* can put more list items here like this. maybe map out list of classes
                <ListItem>
                  <ListItemText primary="text"/>
                  <IconButton>
                    <SomeIcon/>
                  </IconButton>
                </ListItem>
              */
              }
            </List>
          </Drawer>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    testResults: state.mainStore.testResults
  };
};

export default connect(mapStateToProps, {})(NavBarDrawer);