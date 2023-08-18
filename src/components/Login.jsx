import Heading from "../ui/Heading"
import {StyledLogin,LoginBox} from './Login.styled';

export default function Login() {
  return (
    <StyledLogin>
      <LoginBox>
        <Heading as="h1">Login to your account</Heading>
        <p>Not sure if you have an account?</p>
        <p>Enter your email and we’ll check for you.</p>
      </LoginBox>
    </StyledLogin>
  )
}
