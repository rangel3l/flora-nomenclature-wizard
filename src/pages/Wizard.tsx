
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { CheckCircle } from "lucide-react";

const Wizard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("taxonomia");
  const [formData, setFormData] = useState({
    genero: "",
    epiteto: "",
    autor: "",
    holotipo: "",
    localHolotipo: "",
    localColeta: "",
    diagnostico: "",
    comparacao: "",
    tipoPublicacao: "artigo",
    justificativaEspecie: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (activeTab === "taxonomia") {
      setActiveTab("nomenclatura");
    } else if (activeTab === "nomenclatura") {
      setActiveTab("validacao");
    } else if (activeTab === "validacao") {
      setActiveTab("resultado");
      toast.success("Nomenclatura validada com sucesso!", {
        description: "Seu novo táxon está pronto para ser publicado.",
      });
    }
  };

  const handlePrevious = () => {
    if (activeTab === "nomenclatura") {
      setActiveTab("taxonomia");
    } else if (activeTab === "validacao") {
      setActiveTab("nomenclatura");
    } else if (activeTab === "resultado") {
      setActiveTab("validacao");
    }
  };

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="mb-3">Assistente de Nomenclatura</h1>
          <p className="text-lg text-muted-foreground">
            Guia passo a passo para nomear corretamente novas espécies botânicas
          </p>
        </header>

        <Card className="border-botanical-tan mb-8">
          <CardHeader className="bg-botanical-green-dark text-white rounded-t-lg">
            <CardTitle>Processo de Nomenclatura</CardTitle>
            <CardDescription className="text-botanical-cream">
              Siga cada etapa para garantir a conformidade com o Código Internacional de Nomenclatura
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full justify-start rounded-none border-b border-botanical-tan">
                <TabsTrigger value="taxonomia" className="flex-1">1. Taxonomia</TabsTrigger>
                <TabsTrigger value="nomenclatura" className="flex-1">2. Nomenclatura</TabsTrigger>
                <TabsTrigger value="validacao" className="flex-1">3. Validação</TabsTrigger>
                <TabsTrigger value="resultado" className="flex-1">4. Resultado</TabsTrigger>
              </TabsList>

              <TabsContent value="taxonomia" className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-botanical-green-dark mb-4">Investigação Taxonômica</h3>
                    <p className="mb-4 text-muted-foreground">
                      Esta etapa trata da investigação científica para determinar se o espécime representa de fato uma nova espécie.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="justificativaEspecie">Justificativa para Nova Espécie</Label>
                        <Textarea
                          id="justificativaEspecie"
                          name="justificativaEspecie"
                          placeholder="Descreva os motivos que levam você a considerar este espécime como uma nova espécie. Inclua características distintas, comparações com espécies relacionadas, etc."
                          className="h-32"
                          value={formData.justificativaEspecie}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <Label htmlFor="localColeta">Local de Coleta</Label>
                        <Input
                          id="localColeta"
                          name="localColeta"
                          placeholder="Ex: Floresta Atlântica, Serra do Mar, São Paulo, Brasil"
                          value={formData.localColeta}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <Label htmlFor="diagnostico">Diagnóstico</Label>
                        <Textarea
                          id="diagnostico"
                          name="diagnostico"
                          placeholder="Descreva as características diagnósticas que distinguem esta espécie"
                          className="h-32"
                          value={formData.diagnostico}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <Label htmlFor="comparacao">Comparação com Espécies Relacionadas</Label>
                        <Textarea
                          id="comparacao"
                          name="comparacao"
                          placeholder="Compare com espécies morfologicamente próximas, destacando as diferenças"
                          className="h-32"
                          value={formData.comparacao}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button 
                      onClick={handleNext}
                      className="bg-botanical-green-dark hover:bg-botanical-green-medium"
                    >
                      Próximo Passo
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="nomenclatura" className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-botanical-green-dark mb-4">Regras de Nomenclatura</h3>
                    <p className="mb-4 text-muted-foreground">
                      Esta etapa trata das regras formais para nomeação, seguindo os artigos do Código Internacional de Nomenclatura.
                    </p>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="genero">Gênero</Label>
                          <Input
                            id="genero"
                            name="genero"
                            placeholder="Ex: Planta"
                            value={formData.genero}
                            onChange={handleInputChange}
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            Primeira letra maiúscula
                          </p>
                        </div>
                        <div>
                          <Label htmlFor="epiteto">Epíteto Específico</Label>
                          <Input
                            id="epiteto"
                            name="epiteto"
                            placeholder="Ex: pulcherrima"
                            value={formData.epiteto}
                            onChange={handleInputChange}
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            Em minúsculas, concordando com o gênero gramatical
                          </p>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="autor">Autor do Nome</Label>
                        <Input
                          id="autor"
                          name="autor"
                          placeholder="Ex: Silva"
                          value={formData.autor}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="holotipo">Holótipo (Espécime)</Label>
                          <Input
                            id="holotipo"
                            name="holotipo"
                            placeholder="Ex: Silva 1234"
                            value={formData.holotipo}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <Label htmlFor="localHolotipo">Herbário do Holótipo</Label>
                          <Input
                            id="localHolotipo"
                            name="localHolotipo"
                            placeholder="Ex: SPF"
                            value={formData.localHolotipo}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div>
                        <Label>Tipo de Publicação</Label>
                        <RadioGroup 
                          defaultValue="artigo" 
                          value={formData.tipoPublicacao}
                          onValueChange={(value) => handleRadioChange('tipoPublicacao', value)}
                          className="flex flex-col space-y-1 mt-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="artigo" id="artigo" />
                            <Label htmlFor="artigo" className="font-normal">Artigo em periódico científico</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="livro" id="livro" />
                            <Label htmlFor="livro" className="font-normal">Livro ou monografia</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="online" id="online" />
                            <Label htmlFor="online" className="font-normal">Publicação online com ISSN/ISBN</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button 
                      onClick={handlePrevious}
                      variant="outline"
                      className="border-botanical-green-dark text-botanical-green-dark"
                    >
                      Voltar
                    </Button>
                    <Button 
                      onClick={handleNext}
                      className="bg-botanical-green-dark hover:bg-botanical-green-medium"
                    >
                      Próximo Passo
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="validacao" className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-botanical-green-dark mb-4">Validação e Verificação</h3>
                    <p className="mb-4 text-muted-foreground">
                      Verifique se todas as regras do Código Internacional de Nomenclatura foram seguidas.
                    </p>

                    <div className="space-y-4">
                      <Card className="border-botanical-tan bg-botanical-cream/50">
                        <CardContent className="p-4">
                          <h4 className="font-medium text-botanical-green-dark mb-2">Lista de Verificação</h4>
                          
                          <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-botanical-green-medium mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="font-medium">Nome binomial latino</p>
                                <p className="text-sm text-muted-foreground">
                                  O nome proposto segue o formato binomial (gênero + epíteto específico)
                                </p>
                              </div>
                            </li>
                            <Separator className="bg-botanical-tan/50" />
                            
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-botanical-green-medium mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="font-medium">Designação de holótipo</p>
                                <p className="text-sm text-muted-foreground">
                                  Um espécime único foi designado como holótipo com indicação de herbário
                                </p>
                              </div>
                            </li>
                            <Separator className="bg-botanical-tan/50" />
                            
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-botanical-green-medium mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="font-medium">Diagnose ou descrição</p>
                                <p className="text-sm text-muted-foreground">
                                  Uma diagnose que distingue o táxon de outros relacionados foi fornecida
                                </p>
                              </div>
                            </li>
                            <Separator className="bg-botanical-tan/50" />
                            
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-botanical-green-medium mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="font-medium">Publicação válida</p>
                                <p className="text-sm text-muted-foreground">
                                  O táxon será publicado em veículo que assegura publicação efetiva com ISSN/ISBN
                                </p>
                              </div>
                            </li>
                            <Separator className="bg-botanical-tan/50" />
                            
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-botanical-green-medium mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="font-medium">Originalidade do nome</p>
                                <p className="text-sm text-muted-foreground">
                                  O nome proposto não foi previamente publicado dentro do mesmo gênero
                                </p>
                              </div>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button 
                      onClick={handlePrevious}
                      variant="outline"
                      className="border-botanical-green-dark text-botanical-green-dark"
                    >
                      Voltar
                    </Button>
                    <Button 
                      onClick={handleNext}
                      className="bg-botanical-green-dark hover:bg-botanical-green-medium"
                    >
                      Finalizar
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="resultado" className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-botanical-green-dark mb-4">Resultado Final</h3>
                    <p className="mb-6 text-muted-foreground">
                      O nome proposto está validado e pronto para publicação, conforme os requisitos do Código Internacional.
                    </p>

                    <div className="bg-botanical-cream/50 border border-botanical-tan rounded-lg p-6 mb-6">
                      <h4 className="text-lg font-semibold text-botanical-green-dark mb-4">
                        {formData.genero || "Planta"} {formData.epiteto || "pulcherrima"} {formData.autor || "Silva"} <span className="font-normal">sp. nov.</span>
                      </h4>
                      
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium text-botanical-green-dark">Diagnose:</h5>
                          <p className="text-sm text-muted-foreground">
                            {formData.diagnostico || "Species nova a congeneribus differt..."}
                          </p>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-botanical-green-dark">Holotypus:</h5>
                          <p className="text-sm text-muted-foreground">
                            {formData.holotipo || "Silva 1234"} ({formData.localHolotipo || "SPF"})
                          </p>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-botanical-green-dark">Habitat:</h5>
                          <p className="text-sm text-muted-foreground">
                            {formData.localColeta || "Floresta Atlântica, Serra do Mar, São Paulo, Brasil"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/80 border border-botanical-tan rounded-lg p-6">
                      <h4 className="font-medium text-botanical-green-dark mb-2">Próximos Passos para Publicação:</h4>
                      <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                        <li>Preparar manuscrito completo com descrição detalhada, ilustrações e material examinado</li>
                        <li>Depositar o holótipo em herbário reconhecido e registrado</li>
                        <li>Submeter para publicação em veículo que atenda aos requisitos do Código</li>
                        <li>Após publicação, registrar o nome em bases de dados taxonômicas</li>
                      </ol>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button 
                      onClick={handlePrevious}
                      variant="outline"
                      className="border-botanical-green-dark text-botanical-green-dark"
                    >
                      Voltar
                    </Button>
                    <Button 
                      className="bg-botanical-green-dark hover:bg-botanical-green-medium"
                      onClick={() => {
                        toast.success("Documento gerado com sucesso!", {
                          description: "O protótipo do documento foi salvo para edição."
                        });
                      }}
                    >
                      Gerar Documento
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Wizard;
