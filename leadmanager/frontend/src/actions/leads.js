import axios from "axios";
import { createMessage } from "./messages";

import { GET_LEADS, DELETE_LEADS, ADD_LEAD, GET_ERRORS } from "./types";

//GET LEADS

export const getLeads = () => {
  return dispatch => {
    axios
      .get("/api/leads/")
      .then(res => {
        console.log(res.data);
        dispatch({ type: GET_LEADS, payload: res.data });
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
};

export const deleteLead = id => {
  return dispatch => {
    axios
      .delete(`api/leads/${id}`)
      .then(res => {
        dispatch(createMessage({deleteLead: "Deleted"}))
        dispatch({ type: DELETE_LEADS, payload: id });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const addLead = newLead => {
  return dispatch => {
    axios
      .post("/api/leads/", newLead)
      .then(res => {
        dispatch(createMessage({addLead: "Lead Added"}))
        dispatch({
          type: ADD_LEAD,
          payload: res.data
        });
      })
      .catch(err => {
        const errors = {
          msg: err.response.data,
          status: err.response.status
        };
        dispatch({ type: GET_ERRORS, payload: errors });
      });
  };
};
