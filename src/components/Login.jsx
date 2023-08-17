import Heading from "../ui/Heading"
import {StyledLogin,LoginBox} from './Login.styled';

export default function Login() {
  return (
    <StyledLogin>
      <LoginBox>
        <Heading as="h1">Login 1</Heading>
      </LoginBox>
    </StyledLogin>
  )
}
