import Heading from "../ui/Heading";
import { StyledLogin, LoginBox } from "./Login.styled";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <StyledLogin>
      <LoginBox>
        <Heading as="h1">Login to your account</Heading>
        <p>Not sure if you have an account? Register here</p>
        <LoginForm />
      </LoginBox>
    </StyledLogin>
  );
}
