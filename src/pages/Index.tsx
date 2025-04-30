
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import MainLayout from "@/components/layout/MainLayout";
import { Pencil, Book, Search, List } from "lucide-react";

const Index: React.FC = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="mb-3">Flora Nomenclature Wizard</h1>
          <p className="text-lg text-muted-foreground">
            Ferramenta de assistência para correta nomenclatura botânica segundo as regras internacionais
          </p>
        </header>

        <section className="mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md border border-botanical-tan">
            <h2 className="mb-4">Bem-vindo ao Assistente de Nomenclatura</h2>
            <p className="mb-6 text-muted-foreground">
              Este sistema foi desenvolvido para ajudar estudantes e pesquisadores a navegar pelas complexas regras da nomenclatura botânica, 
              garantindo que novas espécies sejam corretamente descritas e nomeadas de acordo com o Código Internacional de Nomenclatura Botânica.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-botanical-green-dark hover:bg-botanical-green-medium">
                <Link to="/wizard">
                  <Pencil className="mr-2 h-5 w-5" />
                  Iniciar Assistente
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-botanical-green-dark text-botanical-green-dark hover:bg-botanical-green-dark hover:text-white">
                <Link to="/rules">
                  <Book className="mr-2 h-5 w-5" />
                  Consultar Regras
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border-botanical-tan">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="bg-botanical-green-light/20 p-2 rounded-full">
                  <Pencil className="h-5 w-5 text-botanical-green-dark" />
                </div>
                <CardTitle>Assistente de Nomenclatura</CardTitle>
              </div>
              <CardDescription>
                Guia passo a passo para nomear novas espécies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Nosso assistente interativo o guiará por todo o processo de nomenclatura botânica, 
                desde a validação de táxons até a formatação correta de publicações, tudo de acordo com as regras internacionais.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full text-botanical-green-dark border-botanical-green-dark hover:bg-botanical-green-dark hover:text-white">
                <Link to="/wizard">Iniciar Assistente</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-botanical-tan">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="bg-botanical-green-light/20 p-2 rounded-full">
                  <List className="h-5 w-5 text-botanical-green-dark" />
                </div>
                <CardTitle>Regras e Artigos</CardTitle>
              </div>
              <CardDescription>
                Consulta das regras oficiais de nomenclatura
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Acesse um guia completo dos artigos do Código Internacional de Nomenclatura, 
                com exemplos práticos e explicações detalhadas para cada regra e exceção.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full text-botanical-green-dark border-botanical-green-dark hover:bg-botanical-green-dark hover:text-white">
                <Link to="/rules">Consultar Regras</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-botanical-tan">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="bg-botanical-green-light/20 p-2 rounded-full">
                  <Search className="h-5 w-5 text-botanical-green-dark" />
                </div>
                <CardTitle>Pesquisar Táxons</CardTitle>
              </div>
              <CardDescription>
                Ferramenta de busca para verificar nomes existentes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Verifique se o nome que você planeja propor já existe ou pesquise 
                informações sobre táxons específicos no nosso banco de dados.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full text-botanical-green-dark border-botanical-green-dark hover:bg-botanical-green-dark hover:text-white">
                <Link to="/search">Pesquisar Táxons</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-botanical-tan">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="bg-botanical-green-light/20 p-2 rounded-full">
                  <Book className="h-5 w-5 text-botanical-green-dark" />
                </div>
                <CardTitle>Glossário</CardTitle>
              </div>
              <CardDescription>
                Terminologia e conceitos da nomenclatura botânica
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Um dicionário completo dos termos específicos utilizados na nomenclatura 
                botânica, com definições claras e contextualizadas.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full text-botanical-green-dark border-botanical-green-dark hover:bg-botanical-green-dark hover:text-white">
                <Link to="/glossary">Consultar Glossário</Link>
              </Button>
            </CardFooter>
          </Card>
        </section>

        <section className="mb-8 bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md border border-botanical-tan">
          <h3 className="mb-4">Sobre o Sistema</h3>
          <p className="text-muted-foreground mb-4">
            O Flora Nomenclature Wizard foi desenvolvido para ajudar estudantes e pesquisadores a 
            navegar pelo complexo processo de nomenclatura botânica, seguindo rigorosamente os 
            princípios estabelecidos pelo Código Internacional de Nomenclatura para algas, fungos e plantas.
          </p>
          <p className="text-muted-foreground">
            Este sistema integra tanto os aspectos científicos da taxonomia (investigação e análise) 
            quanto os formais da nomenclatura (regras e publicação), proporcionando uma ferramenta 
            completa para o correto estabelecimento de novos táxons.
          </p>
        </section>
      </div>
    </MainLayout>
  );
};

export default Index;
