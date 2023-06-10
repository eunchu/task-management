import styled from "styled-components";
import { motion } from "framer-motion";

import { menuAtom } from "@/store";
import Menu from "@/components/organism/Menu";
import Tasks from "./tasks";
import UserInfo from "./userInfo";
import { useRecoilValue } from "recoil";

const Container = styled.div`
  display: flex;

  height: 100%;
  width: 100%;

  overflow: auto;
`;
const Left = styled(motion.div)<{ isMenuOpen: boolean }>`
  width: 220px;
  min-width: ${(props) => props.isMenuOpen && "220px"};
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
  const isMenuOpen = useRecoilValue(menuAtom);

  const openVariants = {
    initial: {
      width: 250,
    },
    click: {
      width: 84,
    },
  };

  return (
    <Container>
      <Left
        isMenuOpen={isMenuOpen}
        variants={openVariants}
        animate={isMenuOpen ? "initial" : "click"}
      >
        <Menu />
      </Left>
      <Contents>
        <Tasks />
      </Contents>
      <Right>
        <UserInfo />
      </Right>
    </Container>
  );
};

export default Home;
