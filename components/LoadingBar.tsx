import React from "react";
import styles from "../styles/LoadingBar.module.css";

const LoadingBar: React.FC = () => {
  return (
    <div id="task-bar" className={styles.taskBar}>
      <span className={styles.taskBarBg}>
        <span id="task" className={styles.task}></span>
      </span>
    </div>
  );
};

export default LoadingBar;
