import styled from "styled-components";
import world from "../../images/world.png";
import pink_b from "../../images/pink_b.png";
import yellow_m from "../../images/yellow_m.png";

export const SectionContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const Columns = styled.div`
  flex-direction: column;
`;

export const InputContainer = styled.div`
  margin-left: 150px;
  margin-top: 60px;
  margin-bottom: 170px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 550px;

  @media screen and (max-width: 1200px) {
    margin-left: 20px;
    margin-top: 30px;
    margin-bottom: 80px;
    width: 100%;
  }
`;

export const InputHeading = styled.h1`
  margin-bottom: 30px;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 52px;
  letter-spacing: 0em;
  text-align: left;
  color: #3e3e3e;

  @media screen and (max-width: 1200px) {
    margin-bottom: 20px;
    font-size: 30px;
  }
`;

export const InputItems = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "90px",
}))`
  height: ${(props) => props.size};
  font-size: 18px;
  text-align: left;
  border: 3px solid #e5e5e5;
  border-radius: 10px;
  padding-left: 20px;
  margin: 4px;
`;

export const Button = styled.button`
  max-width: 200px;
  background: ${(props) => (props.primary ? "#FAD34F" : "#FAD34F")};
  color: ${(props) => (props.primary ? "#fff" : "#fff")};
  font-size: 18px;
  padding: 25px;
  border: none;
  border-radius: 50px;
  margin-top: 20px;
`;

export const SectionImage1 = styled.div`
  background-image: url(${world});
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 80%;

  @media screen and (max-width: 1200px) {
    width: 30%;
    left: 82%;
  }
`;

export const SectionImage2 = styled(SectionImage1)`
  background-image: url(${pink_b});
  top: 560px;
  left: 77%;
`;

export const SectionImage3 = styled(SectionImage1)`
  background-image: url(${yellow_m});
  top: 530px;
  left: 78%;
`;
