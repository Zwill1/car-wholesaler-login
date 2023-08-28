import { useState } from "react";
import {
  StyledLoginForm,
  StyledForm,
  StyledFormRowDiv,
  StyledFormLabel,
} from "./LoginForm.styled";
import Button from "../ui/Button";

export default function LoginForm() {
  // Filled for project showcase
  const [email, setEmail] = useState("admin@cardealership.com");
  const [password, setPassword] = useState("password");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <StyledLoginForm>
        <StyledForm onSubmit={handleSubmit}>
          <StyledFormRowDiv>
            <StyledFormLabel htmlFor="email">Email address</StyledFormLabel>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </StyledFormRowDiv>

          <StyledFormRowDiv>
            <StyledFormLabel htmlFor="password">Password</StyledFormLabel>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </StyledFormRowDiv>
          <div>
            <Button type="primary">Login</Button>
          </div>
        </StyledForm>
      </StyledLoginForm>
    </>
  );
}
