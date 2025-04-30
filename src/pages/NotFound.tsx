
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";
import { CircleX } from "lucide-react";

const NotFound: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="mb-6 bg-botanical-cream/60 p-6 rounded-full">
          <CircleX className="h-20 w-20 text-botanical-green-dark" />
        </div>
        <h1 className="text-4xl font-bold text-botanical-green-dark mb-4">Página Não Encontrada</h1>
        <p className="text-xl text-botanical-green-medium mb-8 max-w-md">
          A página que você está tentando acessar não existe ou foi movida.
        </p>
        <Button asChild size="lg" className="bg-botanical-green-dark hover:bg-botanical-green-medium">
          <Link to="/">Voltar para a Página Inicial</Link>
        </Button>
      </div>
    </MainLayout>
  );
};

export default NotFound;
