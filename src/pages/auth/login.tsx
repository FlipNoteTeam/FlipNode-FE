import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";

import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Separator } from "../../components/ui/separator";

// type Props = {};
const Login = () => {
  return (
    <Card>
      <CardHeader className="text-center">
        <h1>FlipNote에 오신 것을 환영합니다!</h1>
      </CardHeader>
      <CardContent>
        <Label htmlFor="email">이메일</Label>
        <Input id="password"></Input>

        <Label htmlFor="password">비밀번호</Label>
        <Input type="password" id="password"></Input>

        {/* <Link to="/reset-password">비밀번호 찾기</Link> */}
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" variant="default">
          로그인
        </Button>
        <Separator />
        <p>또는 소셜 계정으로 로그인</p>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
        <Button variant="outline" className="w-full">
          Login with Kakao
        </Button>
        <Button variant="outline" className="w-full">
          Login with Github
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Login;
