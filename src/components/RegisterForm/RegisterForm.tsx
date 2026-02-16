"use client";

import * as React from "react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { registerAction } from "@/actions/register.action";
import Link from "next/link";

const formSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    rePassword: z.string().min(6, "Password must be at least 6 characters"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords don't match",
    path: ["rePassword"],
  });

type FormData = z.infer<typeof formSchema>;

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
  });

  async function onSubmit(data: FormData) {
    setIsLoading(true);
    const result = await registerAction(data);

    if (result.success) {
      toast.success("Registration successful! Please login.", {
        className: "text-center justify-center",
        icon: (
          <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            ✓
          </span>
        ),
      });
      router.push("/login");
    } else {
      toast.error(result.error || "Registration failed", {
        className: "text-center justify-center",
        icon: (
          <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            ✕
          </span>
        ),
      });
    }
    setIsLoading(false);
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardContent>
        <form id="form-register" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-register-name">Name</FieldLabel>
                  <Input
                    {...field}
                    type="text"
                    id="form-register-name"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-register-email">Email</FieldLabel>
                  <Input
                    {...field}
                    type="email"
                    id="form-register-email"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-register-phone">Phone</FieldLabel>
                  <Input
                    {...field}
                    type="tel"
                    id="form-register-phone"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-register-password">
                    Password
                  </FieldLabel>
                  <Input
                    {...field}
                    type="password"
                    id="form-register-password"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="rePassword"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-register-rePassword">
                    Confirm Password
                  </FieldLabel>
                  <Input
                    {...field}
                    type="password"
                    id="form-register-rePassword"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button disabled={isLoading} type="submit" form="form-register">
            {isLoading && <Loader2 className="animate-spin" />}
            Register
          </Button>
        </Field>
      </CardFooter>
      <div className="text-center pb-4">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </Card>
  );
}
