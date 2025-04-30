
import React from "react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Book, Search, FileText, Pencil, Layers, Info, List } from "lucide-react";

const AppSidebar: React.FC = () => {
  return (
    <Sidebar className="border-r border-botanical-tan">
      <SidebarHeader className="p-4 border-b border-botanical-tan">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-botanical-green-dark rounded-md flex items-center justify-center">
            <Book className="h-5 w-5 text-botanical-cream" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-botanical-green-dark">Flora Nomeclature</h2>
            <p className="text-xs text-botanical-green-medium">Guia de taxonomia</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegação Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/" className="flex items-center">
                    <Book className="mr-2 h-5 w-5" />
                    <span>Página Inicial</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/wizard" className="flex items-center">
                    <Pencil className="mr-2 h-5 w-5" />
                    <span>Assistente de Nomenclatura</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/rules" className="flex items-center">
                    <List className="mr-2 h-5 w-5" />
                    <span>Regras e Artigos</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/search" className="flex items-center">
                    <Search className="mr-2 h-5 w-5" />
                    <span>Pesquisar Táxons</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Recursos</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/glossary" className="flex items-center">
                    <FileText className="mr-2 h-5 w-5" />
                    <span>Glossário</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/taxonomy" className="flex items-center">
                    <Layers className="mr-2 h-5 w-5" />
                    <span>Hierarquia Taxonômica</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-botanical-tan">
        <div className="flex items-center space-x-2">
          <Info className="h-4 w-4 text-botanical-green-medium" />
          <span className="text-xs text-botanical-green-medium">Flora Nomenclature Wizard v1.0</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
