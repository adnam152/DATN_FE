/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./AuthForm.css"
import { useReducer, useRef, useState } from "react";
import { toast } from "react-toastify";
import { login, register } from "../../../services/authService";
import useAuthStore from "../../../store/useAuthStore";
import useLoaderStore from "../../../store/useLoaderStore";

const reducer = (state, action) => {
  function getError(type, value) {
    if (value === '') return 'Không được để trống';
    switch (type) {
      case 'full_name':
        if (value.length < 6) return 'Ít nhất 6 ký tự';
        return '';
      case 'phone_number':
        if (!/^\d{10}$/.test(value)) return 'Số điện thoại không hợp lệ';
        return '';
      case 'password':
        if (value.length < 6) return 'Ít nhất 6 ký tự';
        return '';
      case 'confirm_password':
        if (value !== state.value.password) return 'Mật khẩu không khớp';
        return '';
      default:
        return '';
    }
  }
  switch (action.type) {
    case 'set_full_name':
      return { error: { ...state.error, nameError: getError('full_name', action.value) }, value: { ...state.value, full_name: action.value } };
    case 'set_phone_number':
      return { error: { ...state.error, phoneError: getError('phone_number', action.value) }, value: { ...state.value, phone_number: action.value } };
    case 'set_password':
      return { error: { ...state.error, passwordError: getError('password', action.value) }, value: { ...state.value, password: action.value } };
    case 'set_confirm_password':
      return { error: { ...state.error, confirmPasswordError: getError('confirm_password', action.value) }, value: { ...state.value, confirm_password: action.value } };
    default:
      return state;
  }
}
const checkValidate = (inputEl, dispatch) => {
  let isValid = true;
  for (let key in inputEl.value) {
    dispatch({ type: `set_${key}`, value: inputEl.value[key] });
    if (!inputEl.value[key]) isValid = false;
  }
  for (let key in inputEl.error) {
    if (inputEl.error[key]) isValid = false;
  }
  return isValid;
}

function AuthForm() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const authFormRef = useRef(null);
  const authImageRef = useRef(null);
  const isLoading = useLoaderStore(state => state.isLoading);
  const setLoading = useLoaderStore(state => state.setLoading);

  // Event handler
  const onStopPropagation = (e) => {
    e.stopPropagation();
  }

  const onChangeForm = () => {
    setIsLoginForm(!isLoginForm);
    authFormRef.current.classList.toggle('left-0');
    authFormRef.current.classList.toggle(`left-[455px]`);
    authImageRef.current.classList.toggle('left-0');
    authImageRef.current.classList.toggle(`-left-[400px]`);
  }

  return (
    <div
      className="flex items-center mx-auto p-10 w-max bg-[#E3EBF6] rounded-[20px] auth-modal"
      onClick={onStopPropagation}
      style={{ boxShadow: "7px 12px 20px #0000004d" }}
    >
      {/* Form */}
      <div className="w-[400px] px-12 relative left-0 transition-all duration-300" ref={authFormRef}>
        {isLoginForm ?
          <LoginForm onChangeForm={onChangeForm} setLoading={setLoading} isLoading={isLoading} /> :
          <RegisterForm onChangeForm={onChangeForm} setLoading={setLoading} isLoading={isLoading} />
        }
      </div>

      <img
        src="https://res.cloudinary.com/dzkdgm4c7/image/upload/v1690888778/Workshop1/n2r71bndgsrttfgzmo6z.webp"
        alt="Colorful shoe" style={{ width: '455px', height: '550px' }}
        className="authform-img-shadow w-[85%] h-[80%] rounded-[22px] object-cover relative left-0 transition-all duration-300"
        ref={authImageRef}
      />
    </div>
  );
}

function InputGroup({ type, name, placeholder, value, onChange, errorMessage, icon }) {
  return (
    <div className="mt-3">
      <div className="relative">
        <input
          type={type} placeholder={placeholder} name={name} autoComplete="on"
          className={`w-full px-3 py-2 rounded-lg text-sm border ${errorMessage ? 'border-red-500' : (value ? 'border-gray-700' : 'border-success')}`}
          value={value} onChange={onChange}
        />
        {icon && icon}
      </div>
      {/* error message */}
      <div className="error text-red-500 text-[13px] ps-2 italic">{errorMessage}</div>
    </div>
  )
}

function LoginForm({ onChangeForm, setLoading, isLoading }) {
  const [inputEl, dispatch] = useReducer(reducer, {
    value: { phone_number: '', password: '' },
    error: { phoneError: '', passwordError: '' },
  });
  const setAuthUser = useAuthStore(state => state.setAuthUser);

  // Event handler
  const onLogin = async (event) => {
    event.preventDefault();
    if (isLoading) return;
    if (!checkValidate(inputEl, dispatch)) {
      toast.error('Thông tin đăng nhập không hợp lệ');
      return;
    }

    // Xử lý đăng nhập
    const payload = inputEl.value;
    setLoading(true);
    try {
      const res = await login(payload);
      if (res?.data) {
        toast.success(res.message);
        setAuthUser(res.data);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-change-animation">
      <h2 className="text-4xl text-[#363377] font-bold">Đăng nhập</h2>
      <p className="text-[#363377] my-3 text-sm">Nếu bạn đã là thành viên, hãy đăng nhập</p>

      <form
        className="flex flex-col" method="post" encType="multipart/form-data"
        onSubmit={onLogin}
      >
        <InputGroup
          type="text" name="phone_number" placeholder="Số điện thoại" value={inputEl.phone}
          errorMessage={inputEl.error.phoneError}
          onChange={(e) => dispatch({ type: 'set_phone_number', value: e.target.value })}
        />
        <PasswordInput password={inputEl.password} dispatch={dispatch} placeholder="Mật khẩu *" name="password" errorMessage={inputEl.error.passwordError} />

        <button
          type="submit" className="w-full text-center text-white bg-[#445279] p-2 rounded-lg mb-4 mt-8 btn-animation"
        >Đăng nhập</button>
      </form>
      <button className="bg-white p-2 w-full rounded-lg flex items-center justify-center btn-animation" type="button">
        <img src="https://i.pinimg.com/originals/74/65/f3/7465f30319191e2729668875e7a557f2.png" alt="Google" className="mr-2 w-5 h-5" />
        <span>Đăng nhập với Google</span>
      </button>
      <div className="py-6">
        <Link to="quen-mat-khau" className="text-[#363377] text-sm">Quên mật khẩu?</Link>
      </div>

      <hr className="border-t border-gray-400 my-6" />
      <div className="flex items-center">
        <p className="text-[#363377] text-sm">Nếu chưa có tài khoản?</p>
        <button className="bg-white text-[#363377] text-sm py-1 px-2 ms-1 rounded-lg btn-animation" onClick={onChangeForm}>
          Đăng ký
        </button>
      </div>
    </div>
  )
}

function RegisterForm({ onChangeForm, setLoading, isLoading }) {
  const [inputEl, dispatch] = useReducer(reducer, {
    value: { full_name: '', phone_number: '', password: '', confirm_password: '' },
    error: { nameError: '', phoneError: '', passwordError: '', confirmPasswordError: '' }
  });
  const setAuthUser = useAuthStore(state => state.setAuthUser);

  // Event handler
  const onRegister = async (event) => {
    event.preventDefault();
    if (isLoading) return;
    if (!checkValidate(inputEl, dispatch)) return toast.error('Thông tin đăng ký không hợp lệ');

    // Xử lý đăng ký
    const payload = inputEl.value;
    setLoading(true);
    try {
      const res = await register(payload);
      if (res?.data) {
        toast.success(res.message);
        setAuthUser(res.data);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-change-animation">
      <h2 className="text-4xl text-[#363377] font-bold">Đăng ký</h2>
      <p className="text-[#363377] my-3 text-sm">Trở thành thành viên để nhận nhiều ưu đãi</p>

      {/* form */}
      <form
        className="flex flex-col" method="post" encType="multipart/form-data"
        onSubmit={onRegister}
      >
        {/* Full_name */}
        <InputGroup
          className="w-full px-3 py-2 border border-gray-700 rounded-lg text-sm bg-white"
          type="text" name="full_name" placeholder="Họ và tên *" value={inputEl.fullName}
          onChange={(e) => dispatch({ type: 'set_full_name', value: e.target.value })}
          errorMessage={inputEl.error.nameError}
        />
        {/* Phone_number */}
        <InputGroup
          className="w-full px-3 py-2 border border-gray-700 rounded-lg text-sm bg-white"
          type="text" name="phone_number" placeholder="Số điện thoại *" value={inputEl.phone}
          onChange={(e) => dispatch({ type: 'set_phone_number', value: e.target.value })}
          errorMessage={inputEl.error.phoneError}
        />
        {/* Password */}
        <PasswordInput
          value={inputEl.value.password} dispatch={dispatch}
          placeholder="Mật khẩu *" name="password"
          errorMessage={inputEl.error.passwordError}
        />
        {/* Re-password */}
        <PasswordInput
          value={inputEl.value.confirm_password} dispatch={dispatch}
          placeholder="Nhập lại mật khẩu *" name="confirm_password"
          errorMessage={inputEl.error.confirmPasswordError}
        />

        <p className="text-sm text-center px-3 italic mt-4">Bằng cách ấn <span className="font-semibold">Đăng ký</span>, bạn đã đồng ý với <Link to='chinh-sach' className="text-blue-600 underline">chính sách và điều khoản của chúng tôi.</Link></p>
        {/* Button */}
        <button
          className="mt-4 w-full p-2 text-white text-center bg-[#445279] rounded-lg btn-animation"
          type="submit"
        >Đăng ký</button>
      </form>

      <hr className="border-t border-gray-400 my-6" />

      <div className="flex items-center">
        <p className="text-[#363377] text-sm">Nếu đã có tài khoản?</p>
        <button className="bg-white text-[#363377] text-sm py-1 px-2 ms-1 rounded-lg btn-animation" onClick={onChangeForm}>
          Đăng nhập
        </button>
      </div>
    </div>
  )
}

function PasswordInput({ value, dispatch, name, placeholder, errorMessage }) {
  const [isShow, setIsShow] = useState(false);

  return (
    <InputGroup
      className="w-full px-3 py-2 border border-gray-700 rounded-lg text-sm bg-white"
      type={isShow ? 'text' : 'password'} name={name} placeholder={placeholder} value={value}
      onChange={(e) => dispatch({ type: `set_${name}`, value: e.target.value })}
      icon={
        <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setIsShow(!isShow)}>
          {isShow ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
        </span>
      }
      errorMessage={errorMessage}
    />
  )
}

export default AuthForm;