import { useCallback } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";

import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import FaceIcon from "@mui/icons-material/Face";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

import { IMenus } from "@/apis/interface/menu";
import { activeMenuAtom, menuAtom } from "@/store";

const Container = styled.ul`
  height: 100%;
`;
const Menu = styled.li<{ active: boolean }>`
  display: flex;
  align-items: center;

  height: 40px;

  background-color: ${(props) => props.active && "#ffffff"};
  color: ${(props) => (props.active ? "#111111" : "#9b9b9b")};
  border-radius: ${(props) => props.active && "4px"};

  padding: 8px 10px;
  cursor: pointer;

  &:hover {
    color: #111111;
    background-color: #ffffff;
    border-radius: 4px;
  }
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 14px;
`;
const Name = styled.p`
  font-size: 12px;
  font-weight: 500;
`;

interface ITree {
  menus: IMenus[];
}
const Tree = ({ menus }: ITree) => {
  const [isOpen, setIsOpen] = useRecoilState(menuAtom);
  const [active, setActive] = useRecoilState(activeMenuAtom);

  // NOTE 메뉴 아이콘
  const renderIcon = useCallback((name: string) => {
    switch (name) {
      case "Dashboard":
        return <SpaceDashboardIcon />;
      case "Settings":
        return <SettingsIcon />;
      case "Members":
        return <FaceIcon />;
      case "DailyTasks":
        return <TaskAltIcon />;
      default:
        return null;
    }
  }, []);

  // NOTE 메뉴 클릭
  const onClickMenu = (name: string) => {
    setActive(name);
    setIsOpen(true);
  };

  return (
    <Container>
      {menus.map((menu) => (
        <Menu
          key={menu.id}
          active={active === menu.name}
          onClick={() => onClickMenu(menu.name)}
        >
          <Icon>{renderIcon(menu.name)}</Icon>
          {isOpen ? <Name>{menu.name}</Name> : null}
        </Menu>
      ))}
    </Container>
  );
};

export default Tree;
