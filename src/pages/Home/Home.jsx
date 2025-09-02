import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Section5 from "./Components/Section5";
import { homepage } from "../../data/productsData";

export default function Home() {
  const { section1, section2, section3, section4, section5 } = homepage;

  return (
    <>
      <Section1 content={section1}/>
      <Section2 content={section2}/>
      <Section3 content={section3}/>
      <Section4 content={section4}/>
      <Section5 content={section5}/>
    </>
  );
}
