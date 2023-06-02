import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

import { ITask } from "@/apis/interface/task";
import Card from "@/components/organism/Card";

const Container = styled.div`
  min-width: 180px;
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
const Box = styled.div``;

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
          <Box ref={provided.innerRef} {...provided.droppableProps}>
            {cards.map((task, i) => (
              <Card key={task.id} index={i} task={task} />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </Container>
  );
};

export default Cards;
