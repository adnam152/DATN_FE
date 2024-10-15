const api = 'http://localhost:3000/accounts';

export default function authService() {
    const login = async (phoneNumber, password) => {
        console.log(phoneNumber, password);
        try {
            const response = await fetch(`${api}`);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const register = async (data) => {

    };

    const logout = async () => {

    };

    const getUser = async () => {

    };

    return { login, register, logout, getUser }
}