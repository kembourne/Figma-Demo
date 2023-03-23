import React from 'react'
import RecipeRow from './Components/RecipeRow'
import CreateRecipe from './Pages/CreateRecipe'
import CreateHomeScreen from './Pages/CreateHomeScreen'
import Manage from './Pages/Manage'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components'
import Sidebar from './Components/Sidebar'
import Manage2 from './Components/Manage2'
function App() {
  return (
    <>
    <Navbar />
    <Wrapper >

<Sidebar />
<Routes >
{/* <Route path='/' element={<Home />} /> */}
<Route path='/' element ={<RecipeRow />} />
  <Route path='/create_recipe' element={<CreateRecipe />} />
 <Route path='/create_homepage' element={<CreateHomeScreen />} />
 <Route path='/manage' element={<Manage />} />
</Routes>
    </Wrapper>
    </>

  )
}

export default App
const Wrapper=styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
gap: 20px;
`

