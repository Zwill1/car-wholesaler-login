import Heading from "../ui/Heading";
import { StyledLogin, LoginBox, RegisterLink } from "./Login.styled";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <StyledLogin>
      <LoginBox>
        <Heading as="h1">Login to your account</Heading>
        <p>
          Not sure if you have an account? Register{" "}
          <Link to="/">
            <RegisterLink>here</RegisterLink>
          </Link>
        </p>
        <LoginForm />
      </LoginBox>
    </StyledLogin>
  );
}
