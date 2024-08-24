import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

export const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .minLowercase(1, "Password must contain at least 1 lowercase letter")
    .minNumbers(1, "Password must contain at least 1 number")
    .minUppercase(1, "Password must contain at least 1 uppercase letter")
    .minSymbols(1, "Password must contain at least 1 symbol")
    .min(6, "Password must be at least 6 characters long"),
  role: Yup.string()
    .oneOf(["buyer", "event_organizer"], "Invalid role")
    .required("Role is required"),
  referralCode: Yup.string()
    .optional()
});