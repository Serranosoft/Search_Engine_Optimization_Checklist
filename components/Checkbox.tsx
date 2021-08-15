import React from "react";
import { Dispatch, SetStateAction } from "react";
import styles from "../styles/Checkbox.module.css";

interface SEO {
  id: number;
  title: string;
  descr: string;
  tip?: string;
}

interface Props {
  el: SEO;
  task: number;
  handleTask: Dispatch<SetStateAction<number>>;
  length: number;
}

const Checkbox: React.FC<Props> = ({ el, task, handleTask, length }) => {
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    let final_width = 100 / length;
    let taskBarFullWidth = document.getElementById("task-bar")?.offsetWidth;
    let percentToPx = (final_width * taskBarFullWidth!) / 100;

    let taskBar = document.getElementById("task");
    let taskBarWidth = taskBar!.offsetWidth;
    if (!e.target.checked) {
      taskBar?.setAttribute("style", `width: ${taskBarWidth - percentToPx}px`);
      if (task !== 0) {
        handleTask(task - 1);
      }
    } else {
      taskBar?.setAttribute("style", `width: ${taskBarWidth + percentToPx}px`);
      handleTask(task + 1);
    }
  };

  return (
    <div key={el.id} className="border-bottom">
      <div className="d-flex px-3 py-4 w-100">
        <div>
          <input
            type="checkbox"
            id={`"${el.id}"`}
            className={styles.checkbox}
            onChange={handleCheckbox}
          />
          <label htmlFor={`"${el.id}"`} className={styles.label}></label>
        </div>
        <div id={styles.checkboxDescr} className="w-100">
          <p className="fw-bold">{el.title}</p>
          <p className="m-0">{el.descr}</p>
          <span className="fw-bold mt-3">{el.tip}</span>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
