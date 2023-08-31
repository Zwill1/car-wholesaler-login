import { Column1of2, Column2of2 } from "./ColumnWidth.styled";
import Heading from "../ui/Heading";

export default function ColumnWidth() {
  return (
    <>
      <Column1of2></Column1of2>
      <Column2of2 style={{ textAlign: "center" }}>
        <Heading as="h1">How to use this app.</Heading>
      </Column2of2>
    </>
  );
}
