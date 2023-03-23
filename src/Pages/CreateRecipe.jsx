import React from "react";
import styled from "styled-components";
import food from "../Assets/Images/food.jpeg";
import Box from "@mui/material/Box";
import Select from "../Components/Select";
import flag from "../Assets/Images/flag.png";
import Steps from "../Components/Steps";
import "../App.css";
function CreateRecipe() {
  return (
    <>
      <Wrapper>
        <h1>Create Recipe</h1>
        <Container1>
          <Image src={food} alt="none"></Image>
          <Trick>
            <Flag>
              <img src={flag} alt="" className="flag" />
              <span>Germany</span>
            </Flag>
            <span>Recipe Title</span>
            <Input></Input>
            <label htmlFor="Description">Description</label>
            <Input></Input>
          </Trick>
        </Container1>
        <Container2>
          <div>
            <label htmlFor="Servive">Servive</label>
            <Input2 short></Input2>
          </div>
          <div>
            <label htmlFor="Cook Time">Cook Time</label>
            <Input2 short></Input2>
          </div>
          <div>
            <label htmlFor="Price">Price</label>
            <Input2 short></Input2>
          </div>
        </Container2>
        <Container2>
          <div>
            <label htmlFor="Notes">Notes</label>
            <Input2 short></Input2>
          </div>
        </Container2>

        <Wrapper2>
<div>
    <h4>Categories</h4>
    <Box sx={{
        width:"150px",height:"49px",backgroundColor:"#86eb84",color:"rgba(2, 92, 0, 1)",
        display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"15px",
    }}>
        Add Categories
    </Box>
</div>
        </Wrapper2>
        <Steps />
      </Wrapper>
    </>
  );
}

export default CreateRecipe;
const Wrapper = styled(Box)`
width: 100%;
padding:20px;

background-color: rgba(242, 242, 242, 1);
display: flex;
gap: 50px;
flex-direction: column;

border-bottom: 1px solid rgba(242, 242, 242, 1);
margin-bottom: 20px;
@media (max-width:520px){
  width: 100%;
}
`;
const Trick = styled(Box)`
  flex-direction: column;
  display: flex;
  gap: 20px;
`;
const Container1 = styled(Box)`
display: flex;
flex-direction: row;
justify-content: flex-start;
gap: 50px;
margin-bottom: 30px;
@media (max-width:520px){
    flex-direction: column;
}

`
const Container2 = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 30px;
  div {
    display: flex;
    flex-direction: column;
  }
  @media (max-width:520px){
    flex-direction: column;
}
`;
const Image = styled.img`
  width: 280px;
  height: 300px;
  margin-bottom: 10px;
`;
const Input = styled.input`
  width: 400px;
  height: 50px;
  background-color: rgba(217, 217, 217, 1);
  border: none;
  outline: none;
  @media (max-width:520px){
    width: 250px;
  }
`;
const Flag = styled(Box)`
  width: 400px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  background-color: rgba(217, 217, 217, 1);
  @media (max-width:520px){
    width: 250px;
  }
`;
const Input2 = styled.input`
  width: 250px;
  height: 50px;
  background-color: rgba(217, 217, 217, 1);
  border: none;
  outline: none;
`
const Wrapper2=styled(Box)`
    div{
        display: flex;
        flex-direction: row;
       justify-content: space-between;
    }

`
