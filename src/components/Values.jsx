import Image from "../images/values.jpg";
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import Card from "../UI/Card";
const Values = () => {
  return (
    <section>
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={Image} alt="valuesImage" />
          </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<GiCutDiamond/>} title="values" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            suscipit aliquid, tenetur, optio quam voluptates voluptate, dolores
            beatae dolore molestias ex voluptatibus pariatur sequi. Unde
            necessitatibus dolorem repellendus aliquam! Nihil.
          </p>
          <div className="values__wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card key={id} className="values__value">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
