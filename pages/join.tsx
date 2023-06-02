import { useMutation } from "react-query";

import { Button } from "@/components/atoms/button";
import { usersAPIs } from "@/apis";
import { IUser } from "@/apis/interface/user";

const Join = () => {
  const createUser = async (user: IUser) => usersAPIs.createUser(user);
  const { mutate: userMutate } = useMutation(createUser, {
    onMutate: (variables) => console.log("onMutate", variables),
    onError: (error: any) => {
      console.log("err", error);

      // 아이디값이 중복일 경우
      // api.error({
      //   message: "회원가입에 실패하였습니다",
      //   description: error.response.data.message,
      //   placement: "bottomRight",
      // });
      // resetField("userId");
      // setFocus("userId", { shouldSelect: true });
    },
    onSuccess: (data, variables) => {
      console.log("join", data, variables);

      // api.success({
      //   message: data.message,
      //   description: `환영합니다 ${variables.userId}님!
      //     로그인 페이지로 이동됩니다`,
      //   placement: "bottomRight",
      // });
      // setTimeout(() => router.push("/movieApp/login"), 3000);
    },
  });

  const onClickJoin = async () => {
    const newUser = {
      userId: "test",
      password: "1",
    };
    userMutate(newUser);
  };

  return (
    <div>
      <Button width="150px" height="34px" text="Join" onClick={onClickJoin} />
    </div>
  );
};

export default Join;
