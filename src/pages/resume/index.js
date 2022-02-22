import React from "react";
import Layout from "@components/layout";
import Container from "@components/container";

import "./index.less";

class Resume extends React.Component {
  constructor() {
    super();
    this.state = { active: 1 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(idx) {
    this.setState({ active: idx });
  }
  render() {
    const { active } = this.state;
    return (
      <Layout location={this.props.location}>
        <Container
          css={{
            position: "relative",
          }}
        >
          <div
            css={{
              margin: "2em auto 1em",
              width: "100%",
              paddingLeft: 20,
              paddingRight: 20,
              boxSizing: "border-box",
            }}
          >
            <h2 className="resume-title">About</h2>
            <p className="resume-p">
              I live in HangZhou, ZheJiang, and like basketball, books, games
              and travel.
            </p>
            <br />
            <p className="resume-p">Math is my next programming language.</p>
            <br />
            <p className="resume-p">
              <b>Keywords: </b>
              <span className="keywords">
                <span>Functional Programming</span>
              </span>
              ,
              <span className="keywords">
                <span>Async Programming</span>
              </span>
              ,
              <span className="keywords">
                <span>Node.js/Koa/MongoDB</span>
              </span>
              ,
              <span className="keywords">
                <span>React/Redux/Jotai</span>
              </span>
              ,
              <span className="keywords">
                <span>React-Native</span>
              </span>
              ,
              <span className="keywords">
                <span>Next.js</span>
              </span>
              ,
              <span className="keywords">
                <span>Tailwindcss</span>
              </span>
              .
            </p>
            <Love />
            <p className="resume-p">
              I am a senior front-end developer with 8 years of experience, and
              a code-acholic who invested a lot of time developing and
              maintaining several projects in the open-source community,
              developing and maintaining several projects. I love to summarize
              and share my knowledge, and have written almost 100 blogs.
            </p>
          </div>
          <Posts handleClick={this.handleClick} active={active} />
          {active === 0 && <WorkInfo />}
          {active === 1 && <Projects />}
          {active === 2 && <Books />}
        </Container>
      </Layout>
    );
  }
}

const Love = () => (
  <div className="love-container">
    <img
      src="https://p1.music.126.net/cApgVVmtcKYFyxunEmHCkA==/109951164540902241.jpg"
      className="resume-love"
    />
  </div>
);

const Posts = ({ active, handleClick }) => (
  <div
    css={{
      borderTop: "1px solid #efefef",
      display: "flex",
      justifyContent: "center",
      letterSpacing: "1px",
      textAlign: "center",
      fontSize: "12px",
      fontWeight: 600,
    }}
  >
    <a
      css={{
        cursor: "pointer",
        lineHeight: "52px",
        marginRight: 60,
        borderTop: active == 1 ? "1px solid #262626" : "none",
        marginTop: active == 1 ? -1 : 0,
        color: active === 1 ? "#262626" : "#999",
      }}
      onClick={handleClick.bind(null, 1)}
    >
      PROJECTS
    </a>
    <a
      css={{
        cursor: "pointer",
        lineHeight: "52px",
        marginRight: 60,
        borderTop: active == 0 ? "1px solid #262626" : "none",
        marginTop: active == 0 ? -1 : 0,
        color: active === 0 ? "#262626" : "#999",
      }}
      onClick={handleClick.bind(null, 0)}
    >
      BIO
    </a>
    <a
      css={{
        cursor: "pointer",
        lineHeight: "52px",
        marginRight: 60,
        borderTop: active == 2 ? "1px solid #262626" : "none",
        marginTop: active == 2 ? -1 : 0,
        color: active === 2 ? "#262626" : "#999",
      }}
      onClick={handleClick.bind(null, 2)}
    >
      BOOKS
    </a>
  </div>
);

const WorkInfo = () => (
  <div
    css={{
      margin: "1em auto 5em",
      paddingLeft: 20,
      paddingRight: 20,
      boxSizing: "border-box",
    }}
  >
    <div className="timeline">
      <div className="title">
        <div className="year work">
          <span className="work-date">Apr 2017 - Now</span> Fontend Developer @{" "}
          <a href="http://netease.com" target="_blank">
            NetEase
          </a>
        </div>
      </div>
    </div>
  </div>
);
const Projects = () => (
  <div
    css={{
      margin: "1em auto 1em",
      paddingLeft: 20,
      paddingRight: 20,
      boxSizing: "border-box",
    }}
  >
    <span className="resume-sub-title">
      <a href="https://github.com/lit-forest/react-magic">react-magic</a>
    </span>
    <p className="resume-p">
      A collection of magic animations for react components. Although React
      provides a way to implement arbitrary animations, it is not an easy task
      to do it, even for simple animations. That's where react-magic package
      comes in. It supports inline styles work with aphrodite. Most animations
      was implemented base on magic.
    </p>
    <span className="resume-sub-title">
      <a href="https://github.com/lit-forest/leaflet.migrationLayer">
        leaflet.migrationLayer
      </a>
    </span>
    <p className="resume-p">
      leafet.migrationLayer is used to show migration data such as
      population,flight,vehicle,traffic and so on.Data visualization on map.
    </p>
    <span className="resume-sub-title">
      <a href="https://github.com/Sylvenas/tailwindcss-animation-property">
        tailwindcss-animation-property
      </a>
    </span>
    <p className="resume-p">
      A plugin that provides utilities for animation property. Not only does the
      plugin provide the usual animation properties, these also support dynamic
      writing using JIT mode, even you can add new properties by using
      configuration.
    </p>
  </div>
);

const BOOKS = [
  "https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/10032112256/fbd0/984a/e9e9/d40ed4aaa7dc063cbea568c7ef5ed33e.jpeg",
  "https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/10032110422/193d/fee9/cde4/c475874ea77de53d815c401fc6707550.jpeg",
  "https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/10032110426/ffb5/d4a1/6653/75eb0fd16fa52d345cb092ba2e05b2ba.jpeg",
  "https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/10032111391/9f78/f982/844b/1a1a3b59bf56f00d3c55da7eb44cd5a8.jpeg",
  "https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/10032111405/406f/d701/702e/0a24e80ff552f11261856e4e2f1542f5.jpeg",
];

const Books = () => (
  <div
    css={{
      display: "flex",
      flexWrap: "wrap",
      paddingLeft: 20,
      paddingRight: 20,
      boxSizing: "border-box",
    }}
  >
    {BOOKS.map((book, idx) => (
      <img
        key={idx}
        src={book}
        css={{
          height: 200,
          width: 150,
          margin: 10,
        }}
      />
    ))}
  </div>
);

export default Resume;
