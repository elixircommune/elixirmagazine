import React,{useEffect,createContext,useReducer,useContext} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
import Signin from './components/screens/Signin';
import Home from './components/screens/Home';
import Subscribe from './components/screens/Subscribe';
import Editions from './components/screens/Editions';
import Background from './components/Background';
import Post from './components/screens/Post';
import PostEditions from './components/screens/posts/PostEditions';
import PostSlides from './components/screens/posts/PostSlides';
import {reducer,initialState } from './reducers/userReducer'
import Users from './components/screens/Users';
import Appbar from './components/Appbar';
import Flipbook from './components/screens/Flipbook';
import Loading from './components/screens/Loading';
import SingleBook from './components/screens/SingleBook';
import Aboutus from './components/screens/Aboutus';
import Contributors from './components/screens/Contributors';
import About1 from './components/screens/About1';
import PostMobileSlides from './components/screens/posts/PostMobileSlides';
export const UserContext = createContext()
 
const Routing =()=>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    // const user = JSON.parse(localStorage.getItem("user"))
    const userinls = localStorage.getItem("user")
    if(userinls!=="undefined")
    {
      var user = JSON.parse(localStorage.getItem("user"))
    }
    if(user){
      dispatch({type:"USER",payload:user})
            
    }
    else{
      history.push('/signin')
    }
  },[])
  return(
    <Switch>
      <Route exact path="/">
      <Home/>
      </Route>
      <Route  path="/signin">
      <Signin/>
      </Route>
      <Route path="/subscribe">
        <Subscribe/>
      </Route>
      <Route path="/editions">
        <Editions/>
      </Route>
      <Route exact path="/post">
        <Post/>
      </Route>
      <Route path="/post/postEditions">
        <PostEditions/>
      </Route>
      <Route path="/post/postSlides">
        <PostSlides/>
      </Route>
      <Route path="/post/mobileSlides">
        <PostMobileSlides/>
      </Route>
      <Route exact path="/users">
        <Users/>
      </Route>
      <Route  path="/flipbook">
        <Flipbook/>
      </Route>
      <Route  path="/mobilebook">
        <SingleBook/>
      </Route>
      <Route  path="/loading">
        <Loading/>
      </Route>
      <Route  path="/aboutus">
        <Aboutus/>
      </Route>
      <Route  path="/nfc">
        <Contributors/>
      </Route>
      <Route  path="/about">
        <About1/>
      </Route>
    </Switch>
  )
}

function App() {
  
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <div className="App">
     
      {/* <Navbar/> */}
      <Appbar/>
      <Background/>
      <div id="app-inner" style={{position:"absolute",display:'block',top:"55px",zIndex:'20',width:'100%',height:'100%',overflowY:"scroll",overflowX:'hidden'}}>
        <Routing/>
        </div>
    </div>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
