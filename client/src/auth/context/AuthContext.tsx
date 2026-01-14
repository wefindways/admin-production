import {
  useState,
  useEffect,
  useContext,
  createContext,
  type PropsWithChildren,
} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import type { User } from "firebase/auth";

type AuthContextType = {
  user: User | null;
  authorized: boolean;
  email: string | null;
  role: "admin" | "user" | null;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [role, setRole] = useState<"admin" | "user" | null>(null);
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        setEmail(firebaseUser.email);

        const tokenResult = await firebaseUser.getIdTokenResult();
        const claims = tokenResult.claims;

        const isAdmin = Boolean(claims.admin);

        setAuthorized(isAdmin);
        setRole(isAdmin ? "admin" : "user");
      } else {
        setUser(null);
        setEmail(null);
        setRole(null);
        setAuthorized(false);
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        authorized,
        email,
        role,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
