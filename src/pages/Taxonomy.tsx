
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers } from "lucide-react";

const Taxonomy: React.FC = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="mb-3">Hierarquia Taxonômica</h1>
          <p className="text-lg text-muted-foreground">
            Compreendendo a organização hierárquica dos táxons
          </p>
        </header>

        <Card className="border-botanical-tan mb-8">
          <CardHeader className="bg-botanical-green-dark text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <Layers className="h-5 w-5" />
              <CardTitle>Níveis Hierárquicos da Classificação</CardTitle>
            </div>
            <CardDescription className="text-botanical-cream">
              A estrutura taxonômica e suas principais categorias
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="relative overflow-hidden">
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-botanical-green-light/40"></div>
              
              <div className="space-y-8 relative pl-8">
                <div className="relative">
                  <div className="absolute -left-8 top-3 w-3 h-3 rounded-full bg-botanical-green-dark"></div>
                  <h3 className="text-lg font-semibold text-botanical-green-dark mb-2">Reino (Regnum)</h3>
                  <p className="text-muted-foreground mb-3">
                    A categoria mais ampla da classificação biológica, tradicionalmente cinco reinos são reconhecidos: 
                    Animalia, Plantae, Fungi, Protista e Monera.
                  </p>
                  <div className="bg-botanical-cream/50 p-3 rounded-md">
                    <span className="font-medium text-botanical-green-dark">Exemplo: </span>
                    <span className="italic">Plantae</span> (Reino das plantas)
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-8 top-3 w-3 h-3 rounded-full bg-botanical-green-dark"></div>
                  <h3 className="text-lg font-semibold text-botanical-green-dark mb-2">Divisão/Filo (Divisio/Phylum)</h3>
                  <p className="text-muted-foreground mb-3">
                    Subdivisão principal de um reino. Em botânica, utiliza-se o termo "divisão" em vez de "filo", 
                    e os nomes terminam em -phyta para plantas.
                  </p>
                  <div className="bg-botanical-cream/50 p-3 rounded-md">
                    <span className="font-medium text-botanical-green-dark">Exemplo: </span>
                    <span className="italic">Magnoliophyta</span> (Angiospermas, plantas com flores)
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-8 top-3 w-3 h-3 rounded-full bg-botanical-green-dark"></div>
                  <h3 className="text-lg font-semibold text-botanical-green-dark mb-2">Classe (Classis)</h3>
                  <p className="text-muted-foreground mb-3">
                    Subdivisão de uma divisão. Em angiospermas, as principais classes são monocotiledôneas e eudicotiledôneas.
                  </p>
                  <div className="bg-botanical-cream/50 p-3 rounded-md">
                    <span className="font-medium text-botanical-green-dark">Exemplo: </span>
                    <span className="italic">Magnoliopsida</span> (Eudicotiledôneas)
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-8 top-3 w-3 h-3 rounded-full bg-botanical-green-dark"></div>
                  <h3 className="text-lg font-semibold text-botanical-green-dark mb-2">Ordem (Ordo)</h3>
                  <p className="text-muted-foreground mb-3">
                    Agrupamento de famílias relacionadas. Nomes de ordens de plantas acabam em -ales.
                  </p>
                  <div className="bg-botanical-cream/50 p-3 rounded-md">
                    <span className="font-medium text-botanical-green-dark">Exemplo: </span>
                    <span className="italic">Fabales</span> (Ordem que inclui a família Fabaceae)
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-8 top-3 w-3 h-3 rounded-full bg-botanical-green-dark"></div>
                  <h3 className="text-lg font-semibold text-botanical-green-dark mb-2">Família (Familia)</h3>
                  <p className="text-muted-foreground mb-3">
                    Agrupamento de gêneros relacionados. Nomes de famílias de plantas acabam em -aceae.
                  </p>
                  <div className="bg-botanical-cream/50 p-3 rounded-md">
                    <span className="font-medium text-botanical-green-dark">Exemplo: </span>
                    <span className="italic">Fabaceae</span> (Família das leguminosas)
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-8 top-3 w-3 h-3 rounded-full bg-botanical-green-dark"></div>
                  <h3 className="text-lg font-semibold text-botanical-green-dark mb-2">Gênero (Genus)</h3>
                  <p className="text-muted-foreground mb-3">
                    Agrupamento de espécies relacionadas. O nome do gênero é a primeira parte do nome binomial da espécie.
                  </p>
                  <div className="bg-botanical-cream/50 p-3 rounded-md">
                    <span className="font-medium text-botanical-green-dark">Exemplo: </span>
                    <span className="italic">Quercus</span> (Gênero dos carvalhos)
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-8 top-3 w-3 h-3 rounded-full bg-botanical-green-dark"></div>
                  <h3 className="text-lg font-semibold text-botanical-green-dark mb-2">Espécie (Species)</h3>
                  <p className="text-muted-foreground mb-3">
                    Unidade básica da classificação, formada por populações de indivíduos que podem se cruzar e produzir descendentes férteis.
                  </p>
                  <div className="bg-botanical-cream/50 p-3 rounded-md">
                    <span className="font-medium text-botanical-green-dark">Exemplo: </span>
                    <span className="italic">Quercus alba</span> (Carvalho-branco)
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 p-5 bg-white/80 rounded-lg border border-botanical-tan">
              <h3 className="text-lg font-semibold text-botanical-green-dark mb-3">Categorias Subordinadas</h3>
              <p className="text-muted-foreground mb-4">
                Além das categorias principais, existem categorias subordinadas que permitem classificações mais precisas:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <div>
                  <h4 className="font-medium text-botanical-green-dark mb-1">Subfamília (Subfamilia)</h4>
                  <p className="text-sm text-muted-foreground">
                    Categoria entre família e tribo. Nomes terminam com <span className="italic">-oideae</span>.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-botanical-green-dark mb-1">Tribo (Tribus)</h4>
                  <p className="text-sm text-muted-foreground">
                    Categoria entre subfamília e gênero. Nomes terminam com <span className="italic">-eae</span>.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-botanical-green-dark mb-1">Subgênero (Subgenus)</h4>
                  <p className="text-sm text-muted-foreground">
                    Divisão de um gênero. Citado entre parênteses após o nome do gênero.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-botanical-green-dark mb-1">Seção (Sectio)</h4>
                  <p className="text-sm text-muted-foreground">
                    Divisão de um gênero ou subgênero.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-botanical-green-dark mb-1">Subespécie (Subspecies)</h4>
                  <p className="text-sm text-muted-foreground">
                    Categoria abaixo da espécie, abreviada como "subsp." ou "ssp.".
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-botanical-green-dark mb-1">Variedade (Varietas)</h4>
                  <p className="text-sm text-muted-foreground">
                    Categoria abaixo da subespécie, abreviada como "var.".
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-botanical-green-dark mb-1">Forma (Forma)</h4>
                  <p className="text-sm text-muted-foreground">
                    A menor categoria taxonômica formal, abreviada como "f.".
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-botanical-green-dark mb-1">Cultivar</h4>
                  <p className="text-sm text-muted-foreground">
                    Variedade cultivada, escrita entre aspas simples após o nome científico.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-botanical-tan mb-8">
          <CardHeader className="pb-3">
            <CardTitle>Exemplo de Classificação Completa</CardTitle>
            <CardDescription>
              Acompanhe a classificação taxonômica completa do carvalho-branco
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-botanical-cream/50 p-5 rounded-md border border-botanical-tan">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
                <div className="font-medium text-botanical-green-dark">Reino:</div>
                <div className="italic">Plantae</div>
                
                <div className="font-medium text-botanical-green-dark">Divisão:</div>
                <div className="italic">Magnoliophyta</div>
                
                <div className="font-medium text-botanical-green-dark">Classe:</div>
                <div className="italic">Magnoliopsida</div>
                
                <div className="font-medium text-botanical-green-dark">Ordem:</div>
                <div className="italic">Fagales</div>
                
                <div className="font-medium text-botanical-green-dark">Família:</div>
                <div className="italic">Fagaceae</div>
                
                <div className="font-medium text-botanical-green-dark">Gênero:</div>
                <div className="italic">Quercus</div>
                
                <div className="font-medium text-botanical-green-dark">Espécie:</div>
                <div className="italic">Quercus alba</div>
                
                <div className="font-medium text-botanical-green-dark">Nome científico completo:</div>
                <div className="italic">Quercus alba</div> L.
                
                <div className="font-medium text-botanical-green-dark">Nome comum:</div>
                <div>Carvalho-branco</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Taxonomy;
