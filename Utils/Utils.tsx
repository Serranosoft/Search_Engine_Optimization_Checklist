import { Dispatch, SetStateAction } from "react";

export const removeAllChecks = (handleTask: Dispatch<SetStateAction<number>>) => {
    handleTask(0);
    let taskBar = document.getElementById("task");
    taskBar?.setAttribute("style", `width: 0%`);
    let checks = document.getElementsByTagName("input");
    for (let i = 0; i < checks.length; i++) {
      checks[i].checked = false;
    }
  };