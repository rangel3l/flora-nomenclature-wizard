
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FileText, Search } from "lucide-react";

const glossaryTerms = [
  {
    term: "Basiônimo",
    definition: "Nome previamente publicado que fornece o epíteto para uma nova combinação ou status novo."
  },
  {
    term: "Combinação Nova",
    definition: "Nome resultante da transferência de um táxon de um gênero ou espécie para outro, mantendo o mesmo epíteto."
  },
  {
    term: "Diagnose",
    definition: "Declaração das características que distinguem um táxon dos táxons relacionados. A partir de 2012, pode ser em latim ou inglês."
  },
  {
    term: "Epíteto",
    definition: "Parte do nome binomial que segue o nome do gênero, designando uma espécie específica dentro do gênero."
  },
  {
    term: "Epítipo",
    definition: "Espécime ou ilustração designado para servir como tipo interpretativo quando o holótipo, lectótipo ou neótipo é demonstravelmente ambíguo."
  },
  {
    term: "Holótipo",
    definition: "Único espécime ou ilustração designado pelo autor como tipo nomenclatural no momento da publicação original."
  },
  {
    term: "Homônimo",
    definition: "Nome idêntico a outro já publicado para um táxon diferente. Homônimos posteriores são geralmente ilegítimos."
  },
  {
    term: "ICN",
    definition: "Código Internacional de Nomenclatura para algas, fungos e plantas, conjunto de regras e recomendações que governa a nomenclatura botânica."
  },
  {
    term: "Isótipo",
    definition: "Duplicata do holótipo; espécime da mesma coleta que o holótipo."
  },
  {
    term: "Lectótipo",
    definition: "Espécime ou ilustração designado a partir do material original como tipo nomenclatural quando nenhum holótipo foi designado ou quando o holótipo foi perdido ou destruído."
  },
  {
    term: "Neótipo",
    definition: "Espécime ou ilustração selecionado como tipo nomenclatural quando todo o material original está perdido ou destruído."
  },
  {
    term: "Nome ilegítimo",
    definition: "Nome validamente publicado que viola certas regras do Código, como homônimos posteriores ou nomes supérfluos."
  },
  {
    term: "Nome inválido",
    definition: "Nome que não atende aos requisitos formais de publicação estabelecidos pelo Código."
  },
  {
    term: "Nome novo (nom. nov.)",
    definition: "Nome substituindo um homônimo posterior ilegítimo ou um nome incorretamente aplicado."
  },
  {
    term: "Parátipo",
    definition: "Espécime citado no protólogo diferente do holótipo ou isótipo, ou qualquer um dos síntipos quando dois ou mais espécimes foram designados simultaneamente como tipos."
  },
  {
    term: "Princípio de Prioridade",
    definition: "Princípio pelo qual o primeiro nome validamente publicado para um táxon é o nome que deve ser utilizado."
  },
  {
    term: "Protólogo",
    definition: "Tudo associado a um nome em sua publicação original, incluindo descrição, diagnose, ilustrações, referências, sinonímia, dados geográficos, citações de espécimes, discussão e comentários."
  },
  {
    term: "Publicação efetiva",
    definition: "Distribuição de material impresso ou eletrônico (após 2012) que torna o trabalho acessível ao público botânico em geral."
  },
  {
    term: "Publicação válida",
    definition: "Publicação de um nome que atende a todos os requisitos relevantes do Código."
  },
  {
    term: "Sinônimos heterotípicos",
    definition: "Nomes baseados em tipos diferentes mas que são considerados como pertencentes ao mesmo táxon."
  },
  {
    term: "Sinônimos homotípicos",
    definition: "Nomes baseados no mesmo tipo nomenclatural, como um nome e sua combinação nova."
  },
  {
    term: "Síntipo",
    definition: "Qualquer espécime citado no protólogo quando não há holótipo designado, ou qualquer um de dois ou mais espécimes simultaneamente designados como tipos."
  },
  {
    term: "Status novo (stat. nov.)",
    definition: "Indicação de que um táxon está sendo apresentado em novo nível hierárquico, como uma subespécie elevada a espécie."
  },
  {
    term: "Táxon",
    definition: "Unidade taxonômica, independentemente de categoria, como espécie, gênero ou família."
  },
  {
    term: "Tipo nomenclatural",
    definition: "Elemento ao qual o nome de um táxon está permanentemente associado e que serve como padrão de referência para a aplicação do nome."
  }
];

const Glossary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredTerms = glossaryTerms.filter(({ term, definition }) => 
    term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="mb-3">Glossário de Nomenclatura</h1>
          <p className="text-lg text-muted-foreground">
            Termos e conceitos utilizados na nomenclatura botânica
          </p>
        </header>

        <Card className="border-botanical-tan mb-8">
          <CardHeader className="bg-botanical-green-dark text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              <CardTitle>Terminologia Nomenclatural</CardTitle>
            </div>
            <CardDescription className="text-botanical-cream">
              Definições dos principais termos utilizados na nomenclatura botânica
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Pesquisar termos..."
                className="pl-10 border-botanical-tan"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="space-y-4">
              {filteredTerms.length > 0 ? (
                filteredTerms.map(({ term, definition }, index) => (
                  <div key={term} className="group">
                    <div className="flex flex-col sm:flex-row sm:gap-4">
                      <dt className="text-botanical-green-dark font-medium w-full sm:w-1/3">{term}</dt>
                      <dd className="text-muted-foreground w-full sm:w-2/3">{definition}</dd>
                    </div>
                    {index < filteredTerms.length - 1 && (
                      <Separator className="my-4 bg-botanical-tan/50" />
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Nenhum termo encontrado para "{searchTerm}"</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Glossary;
