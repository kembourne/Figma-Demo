import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { color } from '@mui/system';
function Manage2() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
  <div>
    <Wrapper>
<Upper>
<div>
              <label htmlFor="Servive">Name</label>
              <Input2 short></Input2>
            </div>
            <div>
              <label htmlFor="Servive">Name</label>
              <Input2 short></Input2>
            </div>
            <div>
              <label htmlFor="Servive">Name</label>
              <Input2 short></Input2>
            </div>
            
</Upper>
<div>
      <FormControl sx={{ m: 1, minWidth: 120 ,border:"none"}}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{
            border:"none",bgcolor:"rgba(245, 0, 87, 1)",outline:"none",width:"180px",height:"20px",marginTop:"0px", color:"#fff",
          }}
        >
          <MenuItem value="">
            <em>Administrator</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
    <div className="alllast">

        <h3>Allow Recipies</h3>
    <div className="last">
        <div className='finge'>
23881 Stawberry <CloseIcon />
        </div>
        <div className='finge'>
        23881 Stawberry <CloseIcon />
        </div>
    </div>
    </div>
    </Wrapper>
  </div>
  )
}

export default Manage2

const Wrapper=styled.div`
background-color: #fff;
padding: 30px;
border-radius:16px;
`
const Upper=styled.div`
display: flex;
flex-direction: row;
gap: 10px;
    div{
        display: flex;
        flex-direction: column;

    }

`
const Input2 = styled.input`
  width: 120px;
  height: 30px;
  background-color: rgba(217, 217, 217, 1);

  border: none;
  outline: none;
  border-radius: 16px;
`;