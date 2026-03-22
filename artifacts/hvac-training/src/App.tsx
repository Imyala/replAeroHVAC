import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Layout } from "@/components/layout";
import Home from "@/pages/home";
import Learn from "@/pages/learn";
import ComponentsLibrary from "@/pages/components-library";
import BuildAssemble from "@/pages/build";
import Disassemble from "@/pages/disassemble";
import Repair from "@/pages/repair";
import FaultFinding from "@/pages/fault-finding";
import Quiz from "@/pages/quiz";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/learn" component={Learn} />
        <Route path="/components" component={ComponentsLibrary} />
        <Route path="/build" component={BuildAssemble} />
        <Route path="/disassemble" component={Disassemble} />
        <Route path="/repair" component={Repair} />
        <Route path="/fault-finding" component={FaultFinding} />
        <Route path="/quiz" component={Quiz} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
