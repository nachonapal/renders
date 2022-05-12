import axios from "axios";
import Papa from "papaparse";
import { Render } from "./types";
import { SHEET_URL } from "../constants";

export default {
  list: async (): Promise<Render[]> => {
    return axios
      .get(SHEET_URL, {
        responseType: "blob",
      })
      .then(
        (response) =>
          new Promise<Render[]>((resolve, reject) => {
            Papa.parse(response.data, {
              header: true,
              complete: (results) => {
                const renders = results.data as Render[];
                return resolve(renders);
              },
              error: (err) => reject(err),
            });
          })
      );
  },
};
