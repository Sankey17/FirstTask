
import React from 'react'
import { withRouter, BrowserRouter as Router,  
    Route
} from 'react-router-dom';
import About from './About';
// import AnimationReact from './AnimationReact';
import Form from './Form';
import Hero from './Hero';
import Home from './Home';
import Http_client from './Http_client';
import Navbar from './Navbar';
import React_Redux from './React_Redux';
import React_Redux_api from './React_Redux_api';
import React_Redux_Shop from './React_Redux_Shop';
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
          <Route exact path="/redux" component={React_Redux} />
          <Route exact path="/redux_api" component={React_Redux_api} />
          {/* <Route exact path="/redux_shop" component={React_Redux_Shop} /> */}

      </Router>
    </>
    );
}

export default withRouter(Profile);