import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";

import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Checkbox } from "../../components/ui/checkbox";
import { Separator } from "../../components/ui/separator";

// type Props = {};
const Register = () => {
  return (
    <Card>
      <CardHeader className="text-center">
        <h1>FlipNote에 오신 것을 환영합니다!</h1>
      </CardHeader>
      <CardContent>
        <Label htmlFor="email">이메일</Label>
        <Input id="email"></Input>
        <Button>인증하기</Button>
        <Input id="email" placeholder="인증코드"></Input>
        <Button>제출하기</Button>
        <Label htmlFor="password">비밀번호</Label>
        <Input type="password" id="password"></Input>
        <Label htmlFor="password">비밀번호 확인</Label>
        <Input type="password" id="password"></Input>
        <Label htmlFor="nickname">닉네임</Label>
        <Input id="nickname"></Input>
        <Label htmlFor="phone">휴대폰번호 확인</Label>
        <Input type="phone" id="phone"></Input> <Button>인증하기</Button>
        <Input id="email" placeholder="인증코드"></Input>
        <Button>제출하기</Button>
        <Button>인증하기</Button>
        <Input id="email" placeholder="인증코드"></Input>
        <Button>제출하기</Button>
        <Checkbox id="accept" />
        <Label htmlFor="accept">SMS 수신여부 동의</Label>
        {/* <Link to="/reset-password">비밀번호 찾기</Link> */}
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" variant="default">
          로그인
        </Button>
        <Separator />
        <p>또는 소셜 계정으로 회원가입</p>
        <Button variant="outline" className="w-full">
          Register with Google
        </Button>
        <Button variant="outline" className="w-full">
          Register with Kakao
        </Button>
        <Button variant="outline" className="w-full">
          Register with Github
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Register;
