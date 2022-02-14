// import './App.css';
// import Navbar from './Navbar';
// import TextForm from './TextForm';

// function App() {
//   return (
//     <>
//     {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
//     {/* <Navbar/> */}
//     <Navbar title="TextUtils" />
//     <div className="container my-3">
//     <TextForm heading="Enter the text to analyze below"/>
//     </div>
//     </> 
//   );
// }

// export default App;



// import Navbar from './Navbar';
// import About from "./About";
// import Home from './Home';
// import { useForm } from "react-hook-form";
// import Header from "./Header";
// import Btn from './Btn';
// import CheckingOut from './CheckingOut';



// const { register, handleSubmit } = useForm();
// const [result, setResult] = useState("");

//   {/* <form onSubmit={handleSubmit((data) => setResult(JSON.stringify(data)))}>
//   <Header />
//   <input {...register("firstName")} placeholder="First name" />
//   <input {...register("lastName")} placeholder="Last name" />
//   <select {...register("category")}>
//     <option value="">Select...</option>
//     <option value="A">Category A</option>
//     <option value="B">Category B</option>
//   </select>
//   <p>{result}</p>
//   <input type="submit" />
// </form> */}
//   {/* <Btn/> */}
//   {/* <Router>
//     <Navbar title='Sanket' />
//     <Routes>
//       <Route path="/about" element={<About />} />
//       <Route path="/" element={<Home />} />
//     </Routes>

//   </Router> */}



import './App.css';
import { useState } from "react";



import {
  BrowserRouter as Router,
  Link,
  Route,
  // Routes
} from "react-router-dom";
import ProtactedRoute from './ProtectedRoute';
import Profile from './Profile';


function App() {


  const [isAuth, setIsAuth] = useState();

  return (
    <>


      <Router>

        <Route path="/" exact>
          <button className="btn btn-outline-success mx-2" onClick={() => { setIsAuth(true) }}>login</button>
          <button className="btn btn-outline-success mx-2" onClick={() => { setIsAuth(false) }}>Logout</button>
          <Link to="/Profile">Go to Profile</Link>
          {/* <Link to="/Checking">Go to Checking page</Link> */}
        </Route>
        <ProtactedRoute path="/profile" component={Profile} isAuth={isAuth} />
        {/* <ProtactedRoute path="/checking" component={CheckingOut} isAuth={isAuth} /> */}
      </Router>
    </>
  );
}

export default App;







