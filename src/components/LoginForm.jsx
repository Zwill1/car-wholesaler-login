import { useState } from "react";
import { StyledLoginForm, StyledForm,StyledFormRowDiv } from "./LoginForm.styled";

export default function LoginForm() {

  // Filled for project showcase
  const [email, setEmail] = useState("admin@cardealership.com");
  const [password, setPassword] = useState("password");

  function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <>
      <StyledLoginForm>
        <StyledForm onSubmit={handleSubmit}>
          <StyledFormRowDiv>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </StyledFormRowDiv>

          <StyledFormRowDiv>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </StyledFormRowDiv>
          <div>
            {/* <Button type="primary">Login</Button> */}
          </div>
        </StyledForm>
      </StyledLoginForm>
    </>
  )
}
