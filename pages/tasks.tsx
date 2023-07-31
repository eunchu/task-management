import { useEffect, useRef, useState } from "react";
import { GetServerSideProps } from "next";
import { useMutation, useQuery } from "react-query";
import styled from "styled-components";
import {
  DragDropContext,
  resetServerContext,
  DropResult,
} from "react-beautiful-dnd";

import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";

import { taskAPIs } from "@/apis";
import { queryKeys } from "@/apis/query-keys";
import { ISSUE_TYPE } from "@/consts";
import Cards from "@/components/organism/Cards";
import { ITask } from "@/apis/interface/task";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  min-width: 1100px;

  padding: 30px 4%;
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
const Wrapper = styled.div`
  width: 100%;
  height: 0;

  display: flex;
  flex-grow: 1;

  margin: 0 auto;
`;
const CardWrapper = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

const Main = () => {
  const getListRef = useRef<boolean>(true);

  // NOTE 전체 Task 목록 호출
  const { data: taskList } = useQuery(
    queryKeys.taskKeyById("[GET]All"),
    () => taskAPIs.getTasks(),
    {
      retry: 0,
      enabled: getListRef.current === true,
      onSuccess: () => (getListRef.current = false),
    }
  );

  // NOTE Task 업데이트
  const updateTask = useMutation((task: ITask) => taskAPIs.updateTask(task), {
    onSuccess: () => {
      console.log("update!");
      getListRef.current = true;
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
  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;

    // 같은 보드 안에서의 이동
    if (destination?.droppableId === source.droppableId) {
      const findTarget = (type: string, index: number) => {
        return taskList?.data.find(
          (task) => task.issueType === type && task.order === index
        );
      };

      const changedSource = {
        ...findTarget(source.droppableId, source.index),
        order: destination.index,
      };
      const changedDestination = {
        ...findTarget(destination.droppableId, destination.index),
        order: source.index,
      };
      const updateTasks = [changedSource, changedDestination];

      updateTask.mutate(updateTasks as any);
    }

    // TODO
    // 일단 처음 가져온 목록을 뿌려줌
    // 순서가 변경되면, 변경된 순서 목록을 상태로 저장함 -> 이 목록을 뿌려줌
    // 변경된 목록을 update하되, 목록을 재호출하진 않음

    // 다른 보드로의 이동

    console.log("destination", destination);
    console.log("source", source);
  };

  console.log("init", taskList);

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
