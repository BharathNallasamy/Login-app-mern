import toast from "react-hot-toast";

// validate Login page username
export async function usernameValidation(values) {
  const errors = usernameVerify({}, values);

  return errors;
}

// Validate user name
function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username Required...!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username...!");
  }
  return error;
}

// Validate Password page
export async function passwordValidation(values) {
  const errors = passwordVerify({}, values);
  return errors;
}

// Validate password
function passwordVerify(error = {}, values) {
  const specialChars = /[`!@#$%^&*()-=\[\]{};':"\\|,.<>\/?~]/;
  if (!values.password) {
    error.password = toast.error("Password Required...");
  } else if (values.password.includes(" ")) {
    error.password = toast.error("Invalid Password...");
  } else if (values.password.length < 5) {
    error.password = toast.error(
      "Password length should be more than 5 characters..."
    );
  } else if (!specialChars.test(values.password)) {
    error.password = toast.error("Password must have special Chars...");
  }
}

// Validate Email
function emailVerify(error={}, values) {
  if(!values.email) {
    error.email = toast.error("Email Required...!")
  } else if(values.includes(" ")) {
    error.email = toast.error("Wrong Email...")
  } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = toast.error("Invalid Email Address...!")
  }

  return error;
}

// Validate Reset Password
export async function resetPasswordValidation(values) {
  const errors = passwordVerify({}, values);
  if(values.password != values.confirm_pwd) {
    errors.exist = toast.error("Password do not match...!")
  }
  return errors;
}

// Validate register form
export async function registerValidation(values) {
  const errors = usernameVerify({}, values);
  passwordVerify(errors, values);
  emailVerify(errors, values);

  return errors;
}

// Validate your Profile
export async function profileValidation(values) {
  const errors = emailVerify({}, values);
  return errors;
}