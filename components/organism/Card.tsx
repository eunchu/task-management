import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { ITask } from "@/apis/interface/task";

const Box = styled.div`
  height: 140px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 4px 4px 10px -8px rgba(161, 161, 161, 0.3);

  margin-bottom: 16px;
  padding: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;
const TopWrap = styled.div``;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 4px;
`;
const IconBox = styled.span`
  width: 22px;
  height: 22px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f4f5f7;
  border-radius: 50%;
`;
const Title = styled.h3`
  font-weight: 500;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Desc = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Label = styled.div<{ textColor: string; bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  border-radius: 2px;
  line-height: 14px;

  padding: 1px 6px 3px 6px;
`;

interface ICard {
  index: number;
  task: ITask;
}
const Card = ({ index, task }: ICard) => {
  return (
    <Draggable key={`${task.id}`} draggableId={`${task.id}`} index={index}>
      {(provided, snepshot) => (
        <Box
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <TopWrap>
            <Top>
              <IconBox>🎉</IconBox>
              <MoreHorizIcon sx={{ color: "#909090" }} />
            </Top>
            <Title title={task.title}>{task.title}</Title>
            <Desc>{task.desc}</Desc>
          </TopWrap>
          <Bottom>
            <Label
              textColor={task.label.color.text}
              bgColor={task.label.color.bg}
            >
              {task.label.name}
            </Label>
            <AvatarGroup
              max={3}
              sx={{
                "& .MuiAvatar-root": { width: 22, height: 22, fontSize: 11 },
              }}
              spacing={"medium"}
            >
              {task.assignees.map((member) => (
                <Avatar
                  key={member.id}
                  alt={member.name}
                  sx={{ width: 22, height: 22 }}
                />
              ))}
            </AvatarGroup>
          </Bottom>
        </Box>
      )}
    </Draggable>
  );
};

export default Card;
