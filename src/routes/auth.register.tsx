import { createFileRoute } from "@tanstack/react-router";
import Register from "../pages/auth/register";

export const Route = createFileRoute("/auth/register")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/auth/register"!
      <Register />
    </div>
  );
}
