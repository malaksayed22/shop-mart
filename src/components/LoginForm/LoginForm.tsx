"use client";

import * as React from "react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  email: z.email("invalid email").nonempty("email is required"),
  password: z.string().nonempty("password is required"),
});

type FormData = z.infer<typeof formSchema>;

export default function LoginForm() {
  const [isLoadaing, setIsLoadaing] = useState(false);

  const searchParams = useSearchParams();
  const redirectURL = searchParams.get("url");

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  async function onSubmit(data: FormData) {
    setIsLoadaing(true);
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      callbackUrl: redirectURL ? redirectURL : "/products",
      redirect: false,
    });
    if (response?.ok) {
      toast.success("Login successful!", {
        className: "text-center justify-center",
        icon: (
          <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            ✓
          </span>
        ),
      });
      router.push(redirectURL || "/products");
      router.refresh();
    } else {
      toast.error(response?.error!, {
        className: "text-center justify-center",
        icon: (
          <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            ✕
          </span>
        ),
      });
    }
    setIsLoadaing(false);
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-email">Email</FieldLabel>
                  <Input
                    {...field}
                    type="email"
                    id="form-rhf-demo-email"
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
                  <FieldLabel htmlFor="form-rhf-demo-password">
                    Password
                  </FieldLabel>
                  <Input
                    {...field}
                    type="password"
                    id="form-rhf-demo-password"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <div className="mt-2 text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button disabled={isLoadaing} type="submit" form="form-rhf-demo">
            {isLoadaing && <Loader2 className="animate-spin" />}
            Submit
          </Button>
        </Field>
      </CardFooter>
      <div className="text-center pb-4">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </Card>
  );
}
