import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Spinner } from "@/components/ui/spinner";
import useLogin from "@/auth/hooks/useLogin";

export default function Login() {
  const { handleLogin, setEmail, setPassword, message, loading } = useLogin();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            Admin Login
          </h1>
          <p className="text-gray-500 text-base md:text-lg mt-2">
            Please sign in to start your session
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {message && (
            <Alert variant="destructive">
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}

          <Button disabled={loading} className="w-full cursor-pointer h-12">
            {!loading ? (
              "Sign In"
            ) : (
              <>
                <Spinner />
                Signing In
              </>
            )}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
