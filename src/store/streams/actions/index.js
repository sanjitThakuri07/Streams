import streams from "../../../apis/streams";

import {
  CREATE_STREAM,
  FETCH__STREAMS,
  FETCH__STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../types";

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;

  const response = streams.post("/streams", { ...formValues, userId: userId });

  dispatch({ type: CREATE_STREAM, payload: response.data });
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");

  dispatch({ type: FETCH__STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH__STREAM, payload: response.data });
};

export const editStreams = (id, formValues) => async (dispatch) => {
  const response = await streams.put(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
};
