import styled from "styled-components";

const Container = styled.div`
  background-color: #fcfcfc;

  padding: 0 4%;
  padding-top: 30px;
`;
const ProfileArea = styled.div``;
const TaskInfoArea = styled.div``;
const FeedArea = styled.div``;

const UserInfo = () => {
  return (
    <Container>
      <ProfileArea>Hello, username</ProfileArea>
      <TaskInfoArea>task info</TaskInfoArea>
      <FeedArea>feed area</FeedArea>
    </Container>
  );
};

export default UserInfo;
