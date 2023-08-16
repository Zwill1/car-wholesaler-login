import Heading from "../ui/Heading"
import { StyledPageNotFound, Box } from "./PageNotFound.styled"

export default function PageNotFound() {
  return (
    <StyledPageNotFound>
      <Box>
        <Heading as="h1">The page you are looking for could not be found</Heading>
        <div>PageNotFound</div>
      </Box>
    </StyledPageNotFound>
  )
}
