import axios from "axios";
import * as serviceHelper from "./serviceHelpers";

const getStudents = () => {
  let config = {
    method: "GET",
    url: "https://localhost:7254/api/Student",
    withCredentials: true,
    crossDomain: true,
    headers: {"Content-Type" : "application/json"}
  }
  return axios(config)
    .then(serviceHelper.onGlobalSuccess)
    .catch(serviceHelper.onGlobalError);
}

export { getStudents };