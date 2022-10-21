import axios from "axios";

const baseURL = "https://swapi.dev/api/people/?search=";

export function search(queryString) {
    return axios.get(baseURL + queryString);
}