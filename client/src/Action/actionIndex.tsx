import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

export const GET_DATA = "GET_DATA";

interface GetDataAction {
    type: typeof GET_DATA;
    payload: any;
}

export function getInfoCourses() {
    return async function(dispatch: Dispatch<GetDataAction>): Promise<void> {
        try {
            const response = await axios.get('/data.json');
            dispatch({
                type: "GET_DATA",
                payload: response.data
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
}
