
import React from 'react'
import { withRouter, BrowserRouter as Router,  
    Route
} from 'react-router-dom';
import About from './About';
import AnimationReact from './AnimationReact';
import Form from './Form';
import Hero from './Hero';
import Home from './Home';
import Http_client from './Http_client';
import Navbar from './Navbar';
import StyleReact from './StyleReact';
// import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

function Profile(){
    return(<>
        <Router>
        <Navbar title='Sanket' />
    
          <Route exact path="/about" component={About} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/styleReact" component={StyleReact} />
          <Route exact path="/animationReact" component={Hero} />
          <Route exact path="/http_client" component={Http_client} />

      </Router>
    </>
    );
}

export default withRouter(Profile);