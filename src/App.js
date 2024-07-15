import { Routes, Route,} from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

import SignIn from './routes/sign-in/sign-in.component';




// const Navigation = () => {
//   return(
//    <div>
//     <div>
//       <h1>i am Navigation Bar</h1>
//     </div>
//     <Outlet />
//    </div>
//   )
// } move into navigation.jsx

const Shop = () => {
  return <h1>i am a shopping page</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
      <Route index element={<Home />} />      
      <Route path='shop'  element={<Shop />} /> 
      <Route path='sign-in'  element={<SignIn />} /> gufghfd
       </Route>
    </Routes>
  );
};

export default App;