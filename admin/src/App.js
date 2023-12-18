import React, { useContext } from 'react'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar';
import "./app.css"
import Home from './pages/home/Home';
import {
  Route,
  BrowserRouter,
  Routes,
  Navigate,
} from "react-router-dom";
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduxt';
import Login from './pages/login/Login';
import { AuthContext } from './context/authContext/AuthContext';
import ListList from './pages/listList/ListList';
import List from './pages/list/List';
import NewList from './pages/newList/NewList';


const App = () => {

  const {user} = useContext(AuthContext);

  console.log(user);
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
        <Route path="/login" exact element={user ? <Navigate to="/"/> : <Login />}></Route>
         <Route path="/" exact element={user ? <Home /> : <Navigate to="/login"/>}></Route>
          <Route path="/users" exact element={user ? <UserList />: <Navigate to="/login"/>}></Route>
          <Route path="/user/:userId" element={user ? <User />: <Navigate to="/login"/>}></Route>
          <Route path="/newUser" element={user ? <NewUser />: <Navigate to="/login"/>}></Route>
          <Route path="/movies" element={user ? <ProductList />: <Navigate to="/login"/>}></Route>
          <Route path="/product/:productId" element={user ? <Product />: <Navigate to="/login"/>}></Route>
          <Route path="/list/:listId" element={user ? <List />: <Navigate to="/login"/>}></Route>
          <Route path="/newproduct" element={user ? <NewProduct />: <Navigate to="/login"/>}></Route>
          <Route path="/newlist" element={user ? <NewList />: <Navigate to="/login"/>}></Route>
          <Route exact path="/lists" element={user ? <ListList />: <Navigate to="/login"/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App