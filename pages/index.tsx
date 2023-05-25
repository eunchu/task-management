import Menu from "@/components/organism/Menu";
import styled from "styled-components";
import Main from "./main";
import UserInfo from "./userInfo";

const Container = styled.div`
  display: flex;

  height: 100%;
  width: 100%;
`;
const Left = styled.div`
  width: 250px;

  border: 1px solid red;
`;
const Contents = styled.div`
  width: 0;
  flex-grow: 1;
`;
const Right = styled.div`
  width: 250px;

  border: 1px solid red;
`;

const Home = () => {
  return (
    <Container>
      <Left>
        <Menu />
      </Left>
      <Contents>
        <Main />
      </Contents>
      <Right>
        <UserInfo />
      </Right>
    </Container>
  );
};

export default Home;
