import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './admin_style.css';
import './client_style.css';

import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";

import Login from './admin_components/login';
import Signup from './admin_components/signup';



import Dashboard from './admin_components/dashbord';
import AddUser from './admin_components/addUser';
import Notfound404 from './admin_components/notfound404';
import UserList from './admin_components/userList';
import EditUser from './admin_components/edituser';
import Request from './admin_components/Request';
import Profile from './admin_components/profile';
import Postnotices from './admin_components/postnotices';
import ChangePassword from './admin_components/ChangePassword';
import Editprofile from './admin_components/Editprofile';

import Withdraw_money from './Client_component/Withdraw_money';
import Send_Money from './Client_component/Send_Money';
import Exchange_Currency from './Client_component/Exchange_Currency';
import Apply from './Client_component/Apply';
import Contact from './Client_component/Contact';
import Paying_Bills from './Client_component/Paying_Bills';
import Recharge_no from './Client_component/Recharge_no';
import Transaction from './Client_component/Transaction';
import Client_dashboard from './Client_component/Client_dashboard';
import Client_Profile from './Client_component/Client_Profile';
import Client_EditProfile from './Client_component/Client_EditProfile';
import Client_changepassword from './Client_component/Client_changepassword';

import Protected from './protected';
import request from 'request';
import Logout from './logout';


function App() {

  return (
    <Router>
      <Switch>
        {/* Admin routes */}

        <Route exact path="/">
          <Redirect to='/login' />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>

      <Switch>

        <Route exact path="/dashboard">
          <Protected cmp={Dashboard} />
        </Route>
        <Route exact path="/adduser">
          <Protected cmp={AddUser} />
        </Route>

        <Route exact path="/userlist">
          <Protected cmp={UserList} />
        </Route>

        <Route exact path="/userlist/edit/:id">
          <Protected cmp={EditUser} />
        </Route>

        <Route exact path="/requests">
          <Protected cmp={Request} />
        </Route>

        <Route exact path="/profile">
          <Protected cmp={Profile} />
        </Route>

        <Route exact path="/postnotices">
          <Protected cmp={Postnotices} />
        </Route>

        <Route exact path="/changepassword">
          <Protected cmp={ChangePassword} />
        </Route>

        <Route exact path="/editprofile">
          <Protected cmp={Editprofile} />
        </Route>

        <Route exact path="/logout">
          <Logout cmp={Login} />
        </Route>

        {/* Client  */}
        <Route exact path="/Client_dashboard" component={Client_dashboard} />
        <Route exact path="/Withdraw_money" component={Withdraw_money} />
        <Route exact path="/Send_Money" component={Send_Money} />
        <Route exact path="/Exchange_Currency" component={Exchange_Currency} />
        <Route exact path="/Apply" component={Apply} />
        <Route exact path="/Paying_Bills" component={Paying_Bills} />
        <Route exact path="/Recharge_no" component={Recharge_no} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Transaction" component={Transaction} />
        <Route exact path="/Client_Profile" component={Client_Profile} />
        <Route exact path="/Client_EditProfile" component={Client_EditProfile} />
        <Route exact path="/Client_changepassword" component={Client_changepassword} />
        <Route component={Notfound404} />
      </Switch>

    </Router>

  );
}

export default App;
