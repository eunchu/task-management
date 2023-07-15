import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

import { ITask } from "@/apis/interface/task";
import Card from "@/components/organism/Card";

const Container = styled.div`
  min-width: 208px;
  width: 208px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;
const TitleArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #f4f5f7;
  border-radius: 4px;
  font-weight: bold;

  padding: 4px 12px;
  margin-bottom: 10px;
`;
const Title = styled.div``;
const Total = styled.div`
  width: 20px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;

  color: #ffffff;
  background-color: #111111;
  border-radius: 4px;
`;
const Box = styled.div<{
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}>`
  height: 0;
  flex-grow: 1;

  background-color: ${(props) => props.isDraggingOver && "#f4f5f7"};
  border-radius: 4px;

  overflow-x: hidden;
  overflow-y: auto;
`;
const AddBox = styled.div`
  height: 48px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  color: #d6d6d6;
  border: 1px dashed #d6d6d6;
  border-radius: 4px;

  cursor: pointer;
  margin-top: 16px;
`;

interface ICards {
  type: string;
  cards: ITask[];
}
const Cards = ({ type, cards }: ICards) => {
  return (
    <Container>
      <TitleArea>
        <Title>{type}</Title>
        <Total>{cards.length}</Total>
      </TitleArea>
      <Droppable droppableId={type}>
        {(provided, snepshot) => (
          <Box
            isDraggingOver={snepshot.isDraggingOver}
            isDraggingFromThis={Boolean(snepshot.draggingFromThisWith)}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {cards.map((task, i) => (
              <Card key={task.id} index={i} task={task} />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
      <AddBox>+</AddBox>
    </Container>
  );
};

export default Cards;
