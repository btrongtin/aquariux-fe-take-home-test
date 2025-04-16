import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WeatherProvider } from "@/contexts/WeatherContext";
import Header from "@/components/Header";
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import NotFound from "@/pages/NotFound";
import SkipToContent from "@/components/a11y/SkipToContent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <WeatherProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-gray-50 font-sans">
            <SkipToContent />
            <Header />
            <main id="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </WeatherProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
