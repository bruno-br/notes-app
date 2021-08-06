import axios from "axios";
import { base_url } from "../env";

export const api = axios.create({
  baseURL: base_url,
});
