import React from "react";
import styles from "../styles/Article.module.css";

interface Art {
  id: number;
  img: string;
  descr: string;
  link: string;
}

interface Props {
  el: Art;
}

const Article: React.FC<Props> = ({ el }) => {
  return (
    <div id={styles.animation}>
      <a
        className="d-flex align-items-center border-bottom py-4 px-4"
        href={el.link}
      >
        <img id={styles.logo} src={el.img} className="me-3"></img>
        <p id={styles.descr} className="fw-bold m-0">
          {el.descr}
        </p>
      </a>
    </div>
  );
};

export default Article;
