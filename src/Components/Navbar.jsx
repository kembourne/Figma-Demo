import React from 'react'
import styled from 'styled-components'
import Box from "@mui/material/Box";
import Drop from '../Components/Drop'
function Navbar() {
  return (
    <>
<Wrapper >
<Drop />
</Wrapper>
    </>
  )
}
export default Navbar
const Wrapper=styled(Box)`
display: flex;
justify-content: flex-end;
border-bottom: 2px solid rgba(217, 217, 217, 1);;
`