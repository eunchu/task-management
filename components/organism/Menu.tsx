import styled from "styled-components";

import { Button } from "@/components/atoms/button";
import { useQuery } from "react-query";
import { queryKeys } from "@/apis/query-keys";
import { menuAPIs } from "@/apis";

const Container = styled.div`
  width: 100%;
  height: 100%;

  background-color: #f4f5f7;
  padding: 0 4%;
  padding-top: 30px;
`;

const Menu = () => {
  const {} = useQuery(queryKeys.menuKeyById("[GET]All"), () =>
    menuAPIs.getMenus()
  );

  return (
    <Container>
      <Button width="150px" height="34px" text="+ New Task" />
    </Container>
  );
};

export default Menu;
