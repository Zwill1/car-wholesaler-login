import { useState } from "react";
import {
  StyledLoginForm,
  StyledForm,
  StyledFormRowDiv,
  StyledFormLabel,
  StyledFormInput,
} from "./LoginForm.styled";
import Button from "../ui/Button";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
  // Filled for project showcase
  const [email, setEmail] = useState("admin@cardealership.com");
  const [password, setPassword] = useState("password");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) {
      //implement auth to gain access to dashboard

      //login(email, password);
      navigate("/dashboard");
    }
  }

  return (
    <>
      <StyledLoginForm>
        <StyledForm onSubmit={handleSubmit}>
          <StyledFormRowDiv>
            <StyledFormLabel htmlFor="email">Email address</StyledFormLabel>
            <StyledFormInput
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </StyledFormRowDiv>

          <StyledFormRowDiv>
            <StyledFormLabel htmlFor="password">Password</StyledFormLabel>
            <StyledFormInput
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </StyledFormRowDiv>
          <div>
            <Link to="/login">
              <Button type="primary" onClick={handleSubmit}>
                Login
              </Button>
            </Link>
          </div>
        </StyledForm>
      </StyledLoginForm>
    </>
  );
}
