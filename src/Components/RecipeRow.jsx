import React from "react";
import food from "../Assets/Images/food.jpeg";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import men from "../Assets/Images/men.jpeg";
function RecipeRow() {
  return (
    <div className="trick1">
    <Wrapper1>
<div className=".hello">
    <h1>
Recipe
    </h1>
    <div className="hello">

    </div>
</div>
<div>
<h1>
       Ingredients 
        </h1>
</div>
    </Wrapper1>
      <Wrapper>
        <Inner1>
          <Image src={food} alt="none"></Image>
          <div>
            <Typography>
              <h3>Lorem, ipsum.</h3>
              <span>Lorem ipsum dolor sit amet.</span>
            </Typography>
          </div>
        </Inner1>
        <span className="span">02-03-2023</span>
        <Inner2>
          <Status>Visible</Status>
          <Box>
            <Avatar
              alt="Remy Sharp"
              src={men}
              sx={{
                width: "96px",
                height: "96px",
              }}
            />

            <span>Gordon Ramsey</span>
          </Box>
        </Inner2>
      </Wrapper>
    </div>
  );
}

export default RecipeRow;
const Wrapper1=styled(Box)`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
    div{
        width: 45%;
     background-color: white;
        border-width: 80%;
        display: flex;
        border-radius: 16px;
        justify-content: center;
        margin-bottom: 20px;
        margin-top: 20px;
        cursor: pointer;
align-items: center;
    }

`
const Wrapper = styled(Box)`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  background-color: rgba(242, 242, 242, 1);
  height: 100vh;
 
`;
const Image = styled.img`
  width: 137px;
  height: 137px;
  border-radius: 16px;

  @media (max-width: 820px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 520px) {
    width: 75px;
    height: 75px;
  }
`;
const Status = styled(Box)`
  width: 171px;
  height: 52px;
  background-color: rgba(93, 206, 104, 0.63);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 820px) {
    width: 100px;
  }
`;
const Inner1 = styled(Box)`
  @media (max-width: 520px) {
    display: flex;
    flex-direction: column;
  }
  display: flex;
  flex-direction: row;

  justify-content: space-between;
`;
const Inner2 = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 520px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
