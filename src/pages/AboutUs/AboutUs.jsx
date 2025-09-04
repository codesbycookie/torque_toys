import Section3 from "../Home/Components/Section3";
import Section2 from "../Home/Components/Section2";
import Section4 from "../Home/Components/Section4";
import { homepage } from "../../data/productsData";

export default function Aboutus() {
  const {section2, section3, section4 } = homepage;

  return (
    <div className="pt-24">
      <Section3 content={section3} />
      <Section2 content={section2} />
      <Section4 content={section4} />
    </div>
  );
}
