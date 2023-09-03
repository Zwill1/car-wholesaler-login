import { Column1of3, Column2of3, Column3of3 } from "./ColumnWidth.styled";
import Heading from "../ui/Heading";

export default function ThreeColumnWidth() {
  return (
    <>
      <Column1of3></Column1of3>
      <Column2of3 style={{ textAlign: "center" }}>
        <Heading as="h1">How to use this app.</Heading>
      </Column2of3>
      <Column3of3></Column3of3>
    </>
  );
}
