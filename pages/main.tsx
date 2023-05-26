import styled from "styled-components";
import { useQuery } from "react-query";

import { taskAPIs } from "@/apis";
import { queryKeys } from "@/apis/query-keys";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";

const Container = styled.div`
  padding: 0 4%;
`;
const TopArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;
const IconList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Icon = styled.li``;
const Desc = styled.p`
  color: ${(props) => props.theme.color.textDesc};
  margin-top: 10px;
`;
const Bold = styled.span`
  color: ${(props) => props.theme.color.textDescEmph};
  font-weight: 500;
`;

const Main = () => {
  const {} = useQuery(queryKeys.taskKeyById("[GET]All"), () =>
    taskAPIs.getTasks()
  );

  return (
    <Container>
      <TopArea>
        <Title>Daily Task</Title>
        <IconList>
          <Icon>
            <NotificationsIcon />
          </Icon>
          <Icon>
            <Avatar alt="Eunju" sx={{ width: 36, height: 36 }}>
              E
            </Avatar>
          </Icon>
        </IconList>
      </TopArea>
      <Desc>
        'New Task'를 클릭해서 새로운 카드를 생성할 수 있습니다
        <br />
        생성된 Task박스를 'Drag&Drop'으로 이동하여{" "}
        <Bold>상태(ToDo, In Progress, Complete)</Bold>를 변경할 수 있습니다
      </Desc>
    </Container>
  );
};

export default Main;
