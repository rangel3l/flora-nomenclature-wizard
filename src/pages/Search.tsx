
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Search as SearchIcon } from "lucide-react";
import { toast } from "sonner";

const mockTaxonData = [
  {
    id: 1,
    scientificName: "Planta pulcherrima",
    author: "Fulano",
    publicationYear: 2010,
    family: "Plantaceae",
    status: "Aceito",
    type: "Holótipo: Fulano 1234 (HERB)",
    distribution: "América do Sul, Brasil",
    isHomotypic: false
  },
  {
    id: 2,
    scientificName: "Planta variabilis",
    author: "(Müller) Silva",
    publicationYear: 2000,
    family: "Plantaceae",
    status: "Aceito",
    type: "Holótipo: Müller 567 (HERB)",
    distribution: "América do Sul, Brasil, Argentina",
    isHomotypic: false
  },
  {
    id: 3,
    scientificName: "Planta minor f. variabilis",
    author: "Müller",
    publicationYear: 1990,
    family: "Plantaceae",
    status: "Basiônimo",
    type: "Holótipo: Müller 567 (HERB)",
    distribution: "América do Sul, Brasil, Argentina",
    isHomotypic: true,
    relatedNames: ["Planta variabilis (Müller) Silva"]
  },
  {
    id: 4,
    scientificName: "Matus arvensis subsp. horridus",
    author: "Smith",
    publicationYear: 1985,
    family: "Mataceae",
    status: "Aceito",
    type: "Holótipo: Smith 890 (HERB)",
    distribution: "Europa, Ásia",
    isHomotypic: false
  },
  {
    id: 5,
    scientificName: "Planta horrida",
    author: "Ruiz",
    publicationYear: 1850,
    family: "Plantaceae",
    status: "Ilegítimo",
    type: "Holótipo: Ruiz 123 (HERB)",
    distribution: "América do Sul",
    isHomotypic: false,
    notes: "Nome ilegítimo, supérfluo."
  },
  {
    id: 6,
    scientificName: "Planta mysteriosa",
    author: "M.Mister",
    publicationYear: 1900,
    family: "Plantaceae",
    status: "Questionável",
    type: "Tipo não designado",
    distribution: "Desconhecida",
    isHomotypic: false,
    notes: "Aplicação incerta devido a material tipo insuficiente."
  },
  {
    id: 7,
    scientificName: "Phyton brasiliense",
    author: "Souza",
    publicationYear: 1975,
    family: "Phytaceae",
    status: "Aceito",
    type: "Holótipo: Hatschbach 14277 (MBM)",
    distribution: "Brasil",
    isHomotypic: false
  },
  {
    id: 8,
    scientificName: "Tradescantia fluminensis",
    author: "Veloso",
    publicationYear: 1829,
    family: "Commelinaceae",
    status: "Aceito",
    type: "Lectótipo: espécime B (RB)",
    distribution: "Brasil, introduzida em várias partes do mundo",
    isHomotypic: false
  }
];

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("all");
  const [searchResults, setSearchResults] = useState<typeof mockTaxonData>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      toast.error("Por favor, digite um termo de busca");
      return;
    }

    // Simulating search functionality
    const term = searchTerm.toLowerCase();
    let results;

    if (searchCategory === "all") {
      results = mockTaxonData.filter(
        taxon => 
          taxon.scientificName.toLowerCase().includes(term) || 
          taxon.author.toLowerCase().includes(term) ||
          taxon.family.toLowerCase().includes(term)
      );
    } else if (searchCategory === "name") {
      results = mockTaxonData.filter(
        taxon => taxon.scientificName.toLowerCase().includes(term)
      );
    } else if (searchCategory === "author") {
      results = mockTaxonData.filter(
        taxon => taxon.author.toLowerCase().includes(term)
      );
    } else if (searchCategory === "family") {
      results = mockTaxonData.filter(
        taxon => taxon.family.toLowerCase().includes(term)
      );
    }

    setSearchResults(results);
    setHasSearched(true);

    if (results.length === 0) {
      toast.info("Nenhum resultado encontrado", {
        description: "Tente outro termo ou categoria de busca."
      });
    } else {
      toast.success(`${results.length} resultado(s) encontrado(s)`);
    }
  };

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="mb-3">Pesquisar Táxons</h1>
          <p className="text-lg text-muted-foreground">
            Verifique nomes, sinonímias e informações taxonômicas
          </p>
        </header>

        <Card className="border-botanical-tan mb-8">
          <CardHeader className="bg-botanical-green-dark text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <SearchIcon className="h-5 w-5" />
              <CardTitle>Ferramenta de Busca</CardTitle>
            </div>
            <CardDescription className="text-botanical-cream">
              Verifique se o nome que você planeja propor já existe
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Input 
                    placeholder="Digite o nome, autor ou família..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border-botanical-tan"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSearch();
                      }
                    }}
                  />
                </div>
                <div className="w-full sm:w-[200px]">
                  <Select 
                    value={searchCategory} 
                    onValueChange={setSearchCategory}
                  >
                    <SelectTrigger className="border-botanical-tan">
                      <SelectValue placeholder="Categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas categorias</SelectItem>
                      <SelectItem value="name">Nome científico</SelectItem>
                      <SelectItem value="author">Autor</SelectItem>
                      <SelectItem value="family">Família</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Button 
                    onClick={handleSearch}
                    className="w-full sm:w-auto bg-botanical-green-dark hover:bg-botanical-green-medium"
                  >
                    <SearchIcon className="h-4 w-4 mr-2" />
                    Buscar
                  </Button>
                </div>
              </div>

              <div className="bg-botanical-cream/30 p-4 rounded-md border border-botanical-tan">
                <h3 className="text-sm font-medium text-botanical-green-dark mb-2">Dicas de Busca</h3>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Busque por nomes científicos completos ou parciais (ex: "Planta pul" encontrará "Planta pulcherrima")</li>
                  <li>Busque por autores para encontrar todos os táxons atribuídos a um cientista</li>
                  <li>Verifique se há homônimos (nomes idênticos para táxons diferentes)</li>
                  <li>Confira o status do nome para saber se é aceito, sinônimo ou ilegítimo</li>
                </ul>
              </div>

              {hasSearched && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-botanical-green-dark">Resultados da Busca</h3>
                  
                  {searchResults.length > 0 ? (
                    <div className="space-y-4">
                      {searchResults.map((taxon) => (
                        <Card key={taxon.id} className="border-botanical-tan overflow-hidden">
                          <CardHeader className="pb-2 pt-4 px-4">
                            <div className="flex justify-between items-start gap-2 flex-wrap">
                              <div>
                                <CardTitle className="text-lg flex items-center gap-2">
                                  <span className="italic">{taxon.scientificName}</span> {taxon.author}
                                  {taxon.status === "Aceito" && (
                                    <Badge className="bg-botanical-green-medium hover:bg-botanical-green-dark">Aceito</Badge>
                                  )}
                                  {taxon.status === "Basiônimo" && (
                                    <Badge className="bg-botanical-gold hover:bg-botanical-gold/90">Basiônimo</Badge>
                                  )}
                                  {taxon.status === "Ilegítimo" && (
                                    <Badge variant="destructive">Ilegítimo</Badge>
                                  )}
                                  {taxon.status === "Questionável" && (
                                    <Badge variant="outline" className="text-botanical-brown border-botanical-brown">
                                      Questionável
                                    </Badge>
                                  )}
                                </CardTitle>
                                <CardDescription className="mt-1">
                                  {taxon.family}, {taxon.publicationYear}
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="px-4 pb-4 pt-0">
                            <div className="space-y-2 text-sm">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2">
                                <div className="font-medium text-botanical-green-dark">Tipo:</div>
                                <div className="text-muted-foreground">{taxon.type}</div>
                                
                                <div className="font-medium text-botanical-green-dark">Distribuição:</div>
                                <div className="text-muted-foreground">{taxon.distribution}</div>
                              </div>
                              
                              {taxon.relatedNames && (
                                <>
                                  <Separator className="bg-botanical-tan/50 my-2" />
                                  <div>
                                    <h4 className="font-medium text-botanical-green-dark mb-1">Nomes relacionados:</h4>
                                    <ul className="list-disc list-inside text-muted-foreground pl-2">
                                      {taxon.relatedNames.map((name, i) => (
                                        <li key={i} className="italic">{name}</li>
                                      ))}
                                    </ul>
                                  </div>
                                </>
                              )}
                              
                              {taxon.notes && (
                                <>
                                  <Separator className="bg-botanical-tan/50 my-2" />
                                  <div>
                                    <h4 className="font-medium text-botanical-green-dark mb-1">Notas:</h4>
                                    <p className="text-muted-foreground">{taxon.notes}</p>
                                  </div>
                                </>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center p-8 bg-white/80 rounded-lg border border-botanical-tan">
                      <p className="text-muted-foreground">Nenhum resultado encontrado para "{searchTerm}"</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Tente usar termos mais gerais ou verifique a grafia.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Search;
