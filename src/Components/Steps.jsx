import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import food from "../Assets/Images/food.jpeg";
function Steps() {
  return (
    <>
      <Wrapper>
        <div className="heading">
          <h4>Steps</h4>
          <Box
            sx={{
              width: "150px",
              height: "49px",
              backgroundColor: "#86eb84",
              color: "rgba(2, 92, 0, 1)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "15px",
            }}
          >
            Add Steps +
          </Box>
        </div>
        <Container>
          <Step1>
            <div>
              <label htmlFor="Step">Step</label>
              <Input2></Input2>
            </div>
            <div>
              <label htmlFor="Description">Description</label>
              <Input></Input>
            </div>
          </Step1>
          <Step1>
            <img src={food} alt="none" className="foodimage" />
            <div>
              <label htmlFor="Description">Description</label>
              <Input></Input>
            </div>
          </Step1>
          <Ingredients>
            <div className="heading">
              <h4>Ingredients</h4>
              <Box
                sx={{
                  width: "150px",
                  height: "49px",
                  backgroundColor: "#86eb84",
                  color: "rgba(2, 92, 0, 1)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "15px",
                }}
              >
                Add Ingredients +
              </Box>
            </div>
            <Step2 className="ingredients">
              <h1>Ingredients</h1>
              <Strike>

              <div>
                <label htmlFor="Step">lorem</label>
                <Input2></Input2>
              </div>
              <div>
                <label htmlFor="Description">Lorem, ipsum.</label>
                <Input></Input>
              </div>
              </Strike>
            </Step2>
          
          </Ingredients>
        </Container>
      </Wrapper>
    </>
  );
}

export default Steps;
const Wrapper = styled(Box)``;
const Container = styled(Box)`
border:2px solid black;
padding:20px;
border-radius: 16px;
`;
const Step1 = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-bottom: 20px;
  div{
    display: flex;
  flex-direction: row;
  }
  @media (max-width: 520px) {
    flex-direction: column;
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;
const Input = styled.input`
  width: 400px;
  height: 50px;
  background-color: rgba(217, 217, 217, 1);
  border: none;
  outline: none;
  @media (max-width: 520px) {
    width: 250px;
  }
`;
const Input2 = styled.input`
  width: 250px;
  height: 50px;
  background-color: rgba(217, 217, 217, 1);
  border: none;
  outline: none;
`;
const Ingredients = styled(Box)`

`;
const Step2=styled(Box)`
 display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 20px;
  div{
    display: flex;
  flex-direction: row;
  }
  @media (max-width: 520px) {
    flex-direction: column;
  }
  div {
    display: flex;
    flex-direction: column;
  }
`
const Strike=styled.div`
  display: flex;
  flex-direction: row;

`