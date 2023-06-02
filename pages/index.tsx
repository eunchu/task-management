import Menu from "@/components/organism/Menu";
import styled from "styled-components";
import Main from "./main";
import UserInfo from "./userInfo";

const Container = styled.div`
  display: flex;

  height: 100%;
  width: 100%;

  overflow: auto;
`;
const Left = styled.div`
  width: 250px;
  min-width: 250px;
`;
const Contents = styled.div`
  width: 100%;
`;
const Right = styled.div`
  width: 250px;
  min-width: 250px;

  border-left: 1px solid #f4f5f7;
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
