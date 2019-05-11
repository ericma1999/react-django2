import { GET_LEADS, DELETE_LEADS, ADD_LEAD } from "../actions/types";

const initialState = {
  leads: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        leads: action.payload
      };
    case DELETE_LEADS:
      return {
        ...state,
        leads: state.leads.filter(lead => lead.id != action.payload)
      };
    case ADD_LEAD:
      const newLeads = [...state.leads];
      newLeads.push(action.payload);
      return {
        ...state,
        leads: newLeads
      };
    default:
      return state;
  }
};

export default reducer;
