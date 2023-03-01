import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <Header title="About us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        incidunt libero provident! Autem ducimus rerum aliquam ut magnam,
        tempore quis!
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our_Story_Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eos
              cupiditate, eius ratione iste quisquam ullam voluptatem accusamus
              ducimus minus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              architecto id nesciunt laborum facere sint earum recusandae
              dolorem voluptates voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              obcaecati consectetur modi.
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eos
              cupiditate, eius ratione iste quisquam ullam voluptatem accusamus
              ducimus minus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              architecto id nesciunt laborum facere sint earum recusandae
              dolorem voluptates voluptatum.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our_Vision_Image" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our_Mission_Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eos
              cupiditate, eius ratione iste quisquam ullam voluptatem accusamus
              ducimus minus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              architecto id nesciunt laborum facere sint earum recusandae
              dolorem voluptates voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              obcaecati consectetur modi.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
