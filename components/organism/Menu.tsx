import styled from "styled-components";
import { useQuery } from "react-query";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";

import CelebrationIcon from "@mui/icons-material/Celebration";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import { queryKeys } from "@/apis/query-keys";
import { menuAPIs } from "@/apis";
import { menuAtom } from "@/store";
import { Button } from "@/components/atoms/button";
import Tree from "@/components/molecule/Tree";

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #f4f5f7;
  padding: 30px 24px;
`;
const ToggleArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
`;
const LogoIcon = styled.h1`
  width: 34px;
  min-width: 34px;
  height: 34px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #163fa4;
  border-radius: 50%;
`;
const LogoText = styled.h1`
  font-size: 14px;
  font-weight: 500;

  margin-left: 10px;
`;
const Toggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const Menu = () => {
  const [isOpen, setIsOpen] = useRecoilState(menuAtom);

  // 메뉴 api 호출
  const { data: menuList } = useQuery(queryKeys.menuKeyById("[GET]All"), () =>
    menuAPIs.getMenus()
  );

  return (
    <Container>
      <ToggleArea>
        <Logo>
          <LogoIcon>
            <CelebrationIcon
              sx={{
                width: "20px",
                height: "20px",
                color: "#ffffff",
              }}
            />
          </LogoIcon>
          {isOpen ? <LogoText>Management</LogoText> : null}
        </Logo>
        {isOpen ? (
          <Toggle onClick={() => setIsOpen((prev) => !prev)}>
            <KeyboardArrowLeftIcon />
          </Toggle>
        ) : null}
      </ToggleArea>
      <Tree menus={menuList?.data[0].menus ?? []} />
      <Button
        width="100%"
        height="50px"
        text={isOpen ? "+ New Task" : "+"}
        margin="30px 0 0 0"
      />
    </Container>
  );
};

export default Menu;
