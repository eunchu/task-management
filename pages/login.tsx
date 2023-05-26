import { useRouter } from "next/router";

import { Button } from "@/components/atoms/button";
import { signIn } from "next-auth/react";

const Login = () => {
  const router = useRouter();

  const onClickLogin = async () => {
    try {
      const result = await signIn("credentials", {
        // 로그인 실패 시 새로고침 여부
        redirect: false,
        // id: "sdf",
        userId: "test",
        password: "1",
      });
      // authorize()에서 날린 throw new Error('')가 result.error로 들어옴
      if (result?.error) {
        // return api.error({
        //   message: result.error,
        //   placement: "bottomRight",
        // });
        console.log("err1", result?.error);
      }
      router.push("/");
    } catch (error) {
      console.log("login error", error);
    }
  };

  return (
    <div>
      login
      <Button width="150px" height="34px" text="Login" onClick={onClickLogin} />
    </div>
  );
};

export default Login;
