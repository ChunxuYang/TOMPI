import Link from "next/link";
import { Suspense } from "react";

import { LoginForm } from "@/components/login-form";
import TypeWriter from "@/components/type-writer";
import { Pencil2Icon } from "@radix-ui/react-icons";

export default function InitPage() {
  return (
    <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 paper z-0" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Pencil2Icon className="w-6 h-6 mr-2" />
          TOMPI Console
        </div>
        <div className="relative z-20 my-auto text-2xl space-x-1">
          <span>I want to write about</span>
          <TypeWriter
            strings={[
              "an essay about my favorite book.",
              "a story about a trip to the beach.",
              "a poem about my dog named Lucky.",
            ]}
          />
        </div>
      </div>
      <div className="lg:p-8 relative">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Login to TOMPI Console
            </h1>
            <p className="text-sm text-muted-foreground">
              Contact{" "}
              <Link
                href="mailto:chunxuyang@ucla.edu"
                className="underline underline-offset-4 hover:text-primary"
              >
                chunxuyang@ucla.edu
              </Link>{" "}
              for a preset account.
            </p>
          </div>
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-64">
                Loading...
              </div>
            }
          >
            <LoginForm />
          </Suspense>
          {/* <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p> */}
        </div>
      </div>
    </div>
  );
}
