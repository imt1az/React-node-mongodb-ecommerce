import React, { useEffect, useState } from "react";




import { Routes, Route, BrowserRouter,  } from "react-router-dom";
import Footer from "components/navigation/footer";
import Home from "components/home";
import Header from "components/navigation/header";
import MainLayout from "components/Hoc/MainLayout";
import RegisterLogin from "components/auth";
import { useDispatch, useSelector } from "react-redux";
import { userIsAuth } from "store/actions/user.action";
import Loading from "utls/products/Loading";


const Router = (props)=>{
const [loading,setLoading] = useState(true);
const users = useSelector(state => state.users);
const dispatch = useDispatch();

useEffect(()=>{
  dispatch(userIsAuth())
},[dispatch])

useEffect(()=>{
  if(users.auth !== null){
    setLoading(false);
  }

},[users])

 const signOutuser = ()=>{
  alert('Sign Out')
 }

  return (
    <BrowserRouter>
    {loading ? 
     <Loading full={true}/>

     :
     <>
     <Header users={users}></Header>
    <MainLayout>
      <Routes>
        <Route path="/sign_in" element={<RegisterLogin></RegisterLogin>}/>
        <Route path="/" element={<Home></Home>}/>
       </Routes>
    </MainLayout>
       
       <Footer></Footer>
     </>
  }
    
    </BrowserRouter>
  );
}

export default Router;
