/*
* @Author: alexpelletier
* @Date:   2016-03-20 20:29:38
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-04-08 02:21:32
*/

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory } from 'react-router'
import request from 'superagent';

import App from './components/App'
import Dashboard from './components/Pages/Dashboard'
import Hours from './components/Pages/Hours'
import AddMatch from './components/Pages/AddMatch'
import AddPitScout from './components/Pages/AddPitScout'
import Compare from './components/Pages/Compare'
import Teams from './components/Pages/Teams'
import Matches from './components/Pages/Matches'
import Scema from './components/Pages/Scema'
import TeamMembers from './components/Pages/TeamMembers'
import Settings from './components/Pages/Settings'
import AccountSettings from './components/Pages/AccountSettings'
import Login from './components/Pages/Login'
import Team from './components/Pages/Team'

//Elements
import AddTeamMemberModal from './components/Elements/AddTeamMemberModal'

render((
	<Router history={hashHistory}>
		<Route path="/Login" component={Login}/>
		<Route path="/" component={App} onEnter={requireAuth}>
			<IndexRoute component={Dashboard}/>
			<Route path="Hours" component={Hours}/>

			<Route path="Scouting/AddMatch" component={AddMatch}/>
			<Route path="Scouting/AddPitScout" component={AddPitScout}/>
			<Route path="Scouting/Compare" component={Compare}/>
			<Route path="Scouting/Teams" component={Teams}/>
			<Route path="Scouting/Team/:teamid" component={Team}/>
			<Route path="Scouting/Matches" component={Matches}/>
			<Route path="Scouting/Scema" component={Scema}/>

			<Route path="Managment/TeamMembers" component={TeamMembers}>
				<Route path="Add" component={AddTeamMemberModal}/>
			</Route>
			<Route path="Managment/Settings" component={Settings}/>
			<Route path="Managment/AccountSettings" component={AccountSettings}/>
		</Route>
	</Router>
), document.getElementById('App'))


function requireAuth(nextState, replace) {
	request
        .get('/Api/isAuth')
        .set('Accept', 'application/json')
        .end(function(err, res){
            let jsonRes = JSON.parse(res.text);
            if (jsonRes.status == false){
            	hashHistory.push('/Login')
            	replace({
			      pathname: '/Login',
			      state: { nextPathname: nextState.location.pathname }
			    })
            }
        }.bind(this));
}
