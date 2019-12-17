import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubsctibeFromAuth = null

  componentDidMount() {
    this.unsubsctibeFromAuth = auth.onAuthStateChanged( async userAuth => {

      createUserProfileDocument(userAuth);

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          console.log('snapShot', snapShot.data());
          console.log('snapShot', snapShot);
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log('this.state', this.state);
          })
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubsctibeFromAuth();
  }
  
  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
