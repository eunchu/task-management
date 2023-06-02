import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { useMutation, useQuery } from "react-query";
import styled from "styled-components";
import {
  DragDropContext,
  resetServerContext,
  DropResult,
} from "react-beautiful-dnd";

import { taskAPIs } from "@/apis";
import { queryKeys } from "@/apis/query-keys";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import { ISSUE_TYPE } from "@/consts";

import Cards from "@/components/organism/Cards";
import { ITask } from "@/apis/interface/task";

const Container = styled.div`
  padding: 0 4%;
  padding-top: 30px;
  background-color: #fcfcfc;
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
  margin-bottom: 30px;
`;
const Bold = styled.span`
  color: ${(props) => props.theme.color.textDescEmph};
  font-weight: 500;
`;
const Wrapper = styled.div``;
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

const Main = () => {
  // NOTE 전체 Task 목록 호출
  const { data: taskList } = useQuery(queryKeys.taskKeyById("[GET]All"), () =>
    taskAPIs.getTasks()
  );

  // NOTE Task 업데이트
  const updateTask = useMutation((task: ITask) => taskAPIs.updateTask(task), {
    onSuccess: () => {
      console.log("update!");
    },
  });

  // NOTE requestAnimationFrame 초기화
  // requestAnimationFrame 이후 DND 컴포넌트를 렌더링해야함
  const [enabled, setEnabled] = useState<boolean>(false);
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  // NOTE 드래그 되었을 때 실행되는 이벤트
  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;

    // 같은 보드 안에서의 이동

    // 다른 보드로의 이동

    console.log("destination", destination);
    console.log("source", source);
  };

  if (!enabled) return null;

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
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <CardWrapper>
            {ISSUE_TYPE.map((type) => (
              <Cards
                key={type}
                type={type}
                cards={
                  taskList?.data.filter((task) => task.issueType === type) ?? []
                }
              />
            ))}
          </CardWrapper>
        </Wrapper>
      </DragDropContext>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  resetServerContext(); // 서버사이드에서 호출!
  return { props: { data: [] } };
};

export default Main;
