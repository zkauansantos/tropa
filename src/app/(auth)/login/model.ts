import { useAuth } from "@/contexts/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginSchema, loginSchema } from "./schema";

export function useLoginModel() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema)
  })
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);

      await login(data.email, data.password);

    } catch {
      // Do nothing
    } finally {
      setIsLoading(false);
    }
  })

  return {
    isLoading,
    onSubmit,
    errors,
    register,
  };
}