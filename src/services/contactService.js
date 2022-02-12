import axios from "axios";
import * as serviceHelper from "./serviceHelpers";

const getContactsByStudentId = (id) => {
  let config = {
    method: "GET",
    url: `https://localhost:7254/api/Contact/${id}`,
    withCredentials: true,
    crossDomain: true,
    headers: {"Content-Type" : "application/json"}
  }
  return axios(config)
    .then(serviceHelper.onGlobalSuccess)
    .catch(serviceHelper.onGlobalError);
}

export { getContactsByStudentId };