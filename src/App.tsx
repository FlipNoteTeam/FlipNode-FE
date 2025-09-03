import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <div className="min-w-dvw min-h-dvh p-8 bg-gray-50">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
