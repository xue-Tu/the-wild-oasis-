import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signupApi({
        fullName,
        email,
        password,
      }),
    onSuccess: (user) => {
      toast.success(
        "Account successfully created! Please verufy the new account from the user's email address."
      );
    },
    onError: (err) => toast(err.message),
  });

  return { signup, isLoading };
}
