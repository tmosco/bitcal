import React,{Component}  from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

//COMPONENTS

import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Routes from "./route";





class App extends Component {
    state = {
      sideDrawerOpen: false,
         };
  
    drawerToggleClickHandler = () => {
      this.setState(prevState => {
        return { sideDrawerOpen: !prevState.sideDrawerOpen };
      });
    };
  
    backdropClickHandler = () => {
      this.setState({ sideDrawerOpen: false });
    };
  
    render() {
        let backdrop;
    
        if (this.state.sideDrawerOpen) {
          backdrop = <Backdrop click={this.backdropClickHandler} />;
        }
        return (
        
          <BrowserRouter>
                  <div style={{ height: "100%" }}>
                  
                  <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
                  <SideDrawer show={this.state.sideDrawerOpen} />
                  {backdrop}
                 <Routes/>
               </div>
               </BrowserRouter>
           
          
        );
      }




}











// const App = () => {
//     return (
//         <BrowserRouter>
//         <div style={{ height: "100%" }}>
        
//         <Route path = "/"  component={Home}/>
//         <Route path = "/actionpage" component={Actionpage}/>
//      </div>
//      </BrowserRouter>
            
//     );
// }

ReactDom.render(<App />, document.querySelector("#root"));