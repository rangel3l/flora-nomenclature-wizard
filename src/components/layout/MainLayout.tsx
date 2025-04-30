
import React from "react";
import { SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import AppSidebar from "./AppSidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col w-full botanical-bg-pattern">
        <header className="w-full bg-botanical-green-dark py-3 px-6 text-botanical-cream border-b border-botanical-gold/30 z-20 relative">
          <div className="container mx-auto flex items-center">
            <img 
              src="/lovable-uploads/b93ff3ec-070f-45b6-b90d-5ca4d1ccbabf.png" 
              alt="T4M2 Logo" 
              className="h-12 mr-3" 
            />
            <div className="text-left">
              <p className="text-lg font-bold">Flora Nomenclature Wizard</p>
              <p className="text-sm">Taxonomia Botânica</p>
            </div>
          </div>
        </header>
        <div className="flex flex-1">
          <AppSidebar />
          <main className="flex-1 p-4 md:p-6 overflow-auto">
            <div className="container mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <SidebarTrigger />
                </div>
              </div>
              {children}
            </div>
          </main>
        </div>
        <footer className="w-full bg-botanical-green-dark/95 py-4 px-6 text-botanical-cream border-t border-botanical-gold/30">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/b93ff3ec-070f-45b6-b90d-5ca4d1ccbabf.png" 
                alt="T4M2 Logo" 
                className="h-10 mr-3" 
              />
              <div className="text-left">
                <p className="text-xs opacity-80">Flora Nomenclature Wizard</p>
                <p className="text-sm font-semibold">Taxonomia Botânica</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm">Desenvolvido por <span className="font-semibold">Rangel Gomes</span></p>
              <p className="text-xs opacity-80">© {new Date().getFullYear()} - Todos os direitos reservados</p>
            </div>
          </div>
        </footer>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
