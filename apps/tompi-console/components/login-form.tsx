"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { Alert } from "./ui/alert";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const Spinner = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

const GoogleLogoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    viewBox="0 0 488 512"
    {...props}
  >
    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
  </svg>
);

export function LoginForm({ className, ...props }: UserAuthFormProps) {
  const error = useSearchParams().get("error");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const username = React.useRef<string>("");
  const password = React.useRef<string>("");

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    await signIn("credentials", {
      username: username.current,
      password: password.current,
      redirect: true,
      callbackUrl: "/",
    });

    // console.log(username.current, password.current);

    setIsLoading(false);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          {!!error && (
            <Alert variant={"destructive"}>
              Authentication failed, please try again.
            </Alert>
          )}
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="username">
              Username
            </Label>
            <Input
              id="username"
              placeholder="username"
              type="text"
              autoCapitalize="none"
              autoComplete="username"
              autoCorrect="off"
              disabled={isLoading}
              onChange={(event) => {
                username.current = event.target.value;
              }}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              autoComplete="current-password"
              disabled={isLoading}
              onChange={(event) => {
                password.current = event.target.value;
              }}
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading && <Spinner className="mr-2 h-4 w-4 animate-spin" />}
            Login
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={() => {
          signIn("github", { callbackUrl: "/" });
        }}
      >
        {isLoading ? (
          <Spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <GitHubLogoIcon className="mr-2 h-4 w-4" />
        )}{" "}
        Github
      </Button>

      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={() => {
          signIn("google", { callbackUrl: "/" });
        }}
      >
        {isLoading ? (
          <Spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <GoogleLogoIcon className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
    </div>
  );
}
