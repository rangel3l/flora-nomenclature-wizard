
import React from "react";
import { SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import AppSidebar from "./AppSidebar";
import { useIsMobile } from "@/hooks/use-mobile";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayoutContent: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const { isMobile } = useSidebar();
  
  return (
    <div className="min-h-screen flex flex-col w-full botanical-bg-pattern">
      <header className="w-full bg-botanical-green-dark py-3 px-4 sm:px-6 text-botanical-cream border-b border-botanical-gold/30 z-30 relative">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/b93ff3ec-070f-45b6-b90d-5ca4d1ccbabf.png" 
              alt="T4M2 Logo" 
              className="h-10 sm:h-12 mr-2 sm:mr-3" 
            />
            <div className="text-left">
              <p className="text-base sm:text-lg font-bold truncate">Flora Nomenclature Wizard</p>
              <p className="text-xs sm:text-sm hidden xs:block">Taxonomia Botânica</p>
            </div>
          </div>
          {isMobile && (
            <div>
              <SidebarTrigger className="text-botanical-cream" />
            </div>
          )}
        </div>
      </header>
      <div className="flex flex-1">
        <AppSidebar />
        <main className="flex-1 p-3 sm:p-4 md:p-6 overflow-auto">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="hidden md:block">
                <SidebarTrigger />
              </div>
            </div>
            {children}
          </div>
        </main>
      </div>
      <footer className="w-full bg-botanical-green-dark/95 py-3 sm:py-4 px-4 sm:px-6 text-botanical-cream border-t border-botanical-gold/30">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-3 md:mb-0">
            <img 
              src="/lovable-uploads/b93ff3ec-070f-45b6-b90d-5ca4d1ccbabf.png" 
              alt="T4M2 Logo" 
              className="h-8 sm:h-10 mr-2 sm:mr-3" 
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
  );
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <MainLayoutContent>
        {children}
      </MainLayoutContent>
    </SidebarProvider>
  );
};

export default MainLayout;
