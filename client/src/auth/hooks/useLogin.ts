import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function useLogin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);

      // Force refresh token to get custom claims
      const token = await cred.user.getIdTokenResult(true);
      if (!token.claims.admin) {
        setMessage("You are logged in, but not an admin.");
        setLoading(false);
        return;
      } else {
        // Now the user is admin, navigate safely
        navigate("/dashboard");
      }
    } catch (error) {
      setMessage("No account found or wrong credentials");
      setLoading(false);
    } 
  };

  return {
    handleLogin,
    email,
    setEmail,
    password,
    setPassword,
    message,
    loading,
  };
}
