import React from 'react'
import {Link} from 'react-router-dom'
import Box from "@mui/material/Box";
import styled from 'styled-components';
function Sidebar() {
  return (
   <Wrapper>

   <div>

  <Link to='/'>Home</Link>
   </div>
        
   
 <div>  <Link to='/recipe'>Recipes</Link></div> 
 <div> <Link to='/create_recipe'>App Users</Link> </div> 
 <div>  <Link to='/create_homepage'>Screen Layouts</Link></div> 
 <div>  <Link to='/manage'>CMS Managers</Link></div> 
   </Wrapper>
   
  )
}

export default Sidebar
const Wrapper=styled(Box)`
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    gap: 10px;
    
    div{
        width: 150px;
        height: 40px;
        background-color: rgba(242, 242, 242, 1);
        border-radius: 5px;
        display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;

    }
`