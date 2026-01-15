import { auth } from "@/lib/firebase"
import { signOut } from "firebase/auth"

export default function useLogout() {

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  }

  return { handleLogout };
}