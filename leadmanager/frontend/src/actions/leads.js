import axios from "axios";

import { GET_LEADS, DELETE_LEADS, ADD_LEAD } from "./types";

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
        console.log(err);
      });
  };
};


export const deleteLead = (id) => {
    return dispatch => {
      axios
        .delete(`api/leads/${id}`)
        .then(res => {
          dispatch({ type: DELETE_LEADS, payload: id });
        })
        .catch(err => {
          console.log(err);
        });
    };
  };

export const addLead = (newLead) => {
  return dispatch => {
    axios.post('/api/leads/', newLead)
      .then(res=> {
        dispatch({
          type: ADD_LEAD,
          payload: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}
