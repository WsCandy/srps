import { createAction } from "@reduxjs/toolkit";

const highScoreLoaded = createAction<number>("HIGH_SCORE_LOADED");

export default highScoreLoaded;
