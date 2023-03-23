import React from 'react'
import Box from "@mui/material/Box";
import styled from 'styled-components'
import men from '../Assets/Images/men.jpeg'
import Avatar from '@mui/material/Avatar';
import Dropdown from '../Components/Dropdown'
import EditIcon from '@mui/icons-material/Edit';
import BackDrop from '../Components/BackDrop'
function Manage() {
  return (
   <>
    <Wrapper>
   <div className='header'>
    <h4>Manage CRS Members</h4>
    <Box sx={{
        width:"150px",height:"49px",backgroundColor:" #F50057;",color:"#fff",
        display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"15px",
    }}>
       <BackDrop />
      
    </Box>
</div>
    <CardMain>
<Card>
<Avatar alt="Remy Sharp" src={men} sx={{
    width:"50px",height:"50px"
}}/>
      <h2 className='h2'>Usama Saeed</h2>
      <Dropdown />
      <EditIcon className='edit'/>
</Card>
<Card>
<Avatar alt="Remy Sharp" src={men} sx={{
    width:"50px",height:"50px"
}}/>
      <h2 className='h2'>Usama Saeed</h2>
      <Dropdown />
      <EditIcon className='edit'/>
</Card>
<Card>
<Avatar alt="Remy Sharp" src={men} sx={{
    width:"50px",height:"50px"
}}/>
      <h2 className='h2'>Usama Saeed</h2>
      <Dropdown />
      <EditIcon className='edit'/>
</Card>
</CardMain>  
    </Wrapper>
   </>
  )
}

export default Manage
const Wrapper=styled(Box)`
width: 100%;
background-color: rgba(242, 242, 242, 1);
height: 100vh

`
const Card=styled(Box)`
display: flex;
justify-content: center;
width: 200px;
align-items: center;
flex-direction: column;
background-color:  rgba(217, 217, 217, 1);
padding: 20px;
border-radius: 16px;

`
const CardMain=styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;

`

