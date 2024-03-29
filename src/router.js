import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AboutComponent from './components/pages/about'
import ContactComponent from './components/pages/contact'
import Error from './components/pages/error'
import HomeComponent from './components/pages/home'
import AddUser from './components/users/add-user'
import EditUser from './components/users/edit-user'
import ViewUser from './components/users/view-user'

const RouterComponent = () => {
      return (
            <div>
                  <Switch>
                        <Route path='/react_live_website' exact component={HomeComponent}></Route>
                        <Route path='/' exact component={HomeComponent}></Route>
                        <Route path='/home' exact component={HomeComponent}></Route>
                        <Route path='/about' exact component={AboutComponent}></Route>
                        <Route path='/contact' exact component={ContactComponent}></Route>
                        <Route path='/users/add' exact component={AddUser}></Route>
                        <Route path='/users/edit/:id' exact component={EditUser}></Route>
                        <Route path='/users/view/:id' exact component={ViewUser}></Route>
                        <Route component={Error}></Route>
                  </Switch>
            </div>
      )
}

export default RouterComponent
