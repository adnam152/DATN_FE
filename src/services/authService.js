import axios from "axios";

/* eslint-disable no-unused-vars */

const login = async (payload) => {
    try {
        const response = await axios.post(`/auth/login`, payload);
        if (response.status === 200) {
            return response.data;
        }
    } 
    catch (error) {
        if (error.response) return error.response.data;
        return { message: 'Không thể kết nối với server, vui lòng thử lại.' };
    }
};

const register = async (payload) => {
    try {
        const response = await axios.post(`/auth/register`, payload);
        if(response.status === 201) return response.data;
    }
    catch (error) {
        if(error.response) return error.response.data;
        return { message: 'Không thể kết nối với server, vui lòng thử lại.' };
    }
};

const logout = async () => {
    try {
        const response = await axios.post(`/auth/logout`);
        if (response.status === 204) return {message: 'Đăng xuất thành công'};
    }
    catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return { message: 'Không thể kết nối với server, vui lòng thử lại.' }; // Trả về thông báo lỗi chung
    }
};

const checkLogin = async () => {
    try {
        const response = await axios.post(`/auth/check`);
        if (response.status === 200) {
            return response.data;
        }
    } 
    catch (error) {
        if (error.response) return error.response.data;
        return { message: 'Không thể kết nối với server, vui lòng thử lại.' };
    }
};

export { login, register, logout, checkLogin }