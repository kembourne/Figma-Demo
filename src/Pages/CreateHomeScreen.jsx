import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import flag from "../Assets/Images/flag.png";
import phone from '../Assets/Images/phone.jpg'
function CreateHomeScreen() {
  return (
    <div className="main">
      <Wrapper>
        <h1>Create Home Screen</h1>
        <Flag>
          <img src={flag} alt="" className="flag" />
          <span>Germany</span>
        </Flag>
        <Two>
          <div>
            <label htmlFor="Servive">Servive</label>
            <Input2 short></Input2>
          </div>
          <div>
            <label htmlFor="Servive">Servive</label>
            <Input2 short></Input2>
          </div>
        </Two>
        <div className="one">

        <Three>
          <h1>1.Section</h1>
          <Four>
            <div>
              <label htmlFor="Servive">Servive</label>
              <Input2 short></Input2>
            </div>
            <div>
              <label htmlFor="Servive">Servive</label>
              <Input2 short></Input2>
            </div>
            <div>
              <label htmlFor="Servive">Servive</label>
              <Input2 short></Input2>
            </div>
          </Four>
        </Three>
        <Three>
          <h2>Filter</h2>
          <Four>
            <div>
              <label htmlFor="Servive">Minimun Savings</label>
              <Input2 short></Input2>
            </div>
          </Four>
        </Three>
        </div>
      </Wrapper>
<img src={phone} alt="none" className="phone"/>
    </div>
  );
}

export default CreateHomeScreen;
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Two = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 20px;
  div {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 520px) {
    flex-direction: column;
  }
`;
const Input2 = styled.input`
  width: 250px;
  height: 50px;
  background-color: rgba(217, 217, 217, 1);
  border: none;
  outline: none;
  border-radius: 16px;
`;
const Flag = styled(Box)`
  width: 250px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  background-color: rgba(217, 217, 217, 1);
  @media (max-width: 520px) {
    width: 250px;
  }
`;
const Three = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Four = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 520px) {
    flex-direction: column;
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;
