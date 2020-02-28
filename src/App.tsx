import React from 'react'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import PeoplePage from './components/pages/people/people'
import StarshipPage from './components/pages/staship/starship'
import PlanetPage from './components/pages/planet/planet'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Header from './components/header/header'

const App: React.FC = () => {
  return (
    <div className="container">
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route path="/" exact component={StarshipPage} />
          <Route path="/peoples" component={PeoplePage} />
          <Route path="/planets" component={PlanetPage} />
          <Route render={() => <h2>Page not found</h2>} />
          <Redirect to="/" />
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App
