import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { notification} from "antd"
export const userLogin = createAsyncThunk(
    "auth/login",
    async ({ username, password,remember }) => {
        try {
            const config = {
                headers: {
                    "content-Type": "application/json",
                },
            }
            const { data } = await axios.post(
                'https://fakestoreapi.com/auth/login',
                { username, password,remember },
                config
            )
            notification.success({
                message: "Success",
                description:"Logged in successfully"
            })
            return data;
        } catch (error) {
            console.log("sada",error);
            notification.error({
                message: "Error",
                description: error?.response?.data
        })
        }
    }
)