import { createAction } from "@reduxjs/toolkit";
import Choice from "_model/Choice";

const moveChosen = createAction<Choice>("MOVE_CHOSEN");

export default moveChosen;
