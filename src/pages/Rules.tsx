
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Book } from "lucide-react";

const Rules: React.FC = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="mb-3">Regras e Artigos de Nomenclatura</h1>
          <p className="text-lg text-muted-foreground">
            Guia detalhado das regras do Código Internacional de Nomenclatura Botânica
          </p>
        </header>

        <Card className="border-botanical-tan mb-8">
          <CardHeader className="bg-botanical-green-dark text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <Book className="h-5 w-5" />
              <CardTitle>Código Internacional de Nomenclatura</CardTitle>
            </div>
            <CardDescription className="text-botanical-cream">
              Princípios e regras que governam a nomenclatura de plantas, algas e fungos
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Tabs defaultValue="principios" className="w-full">
              <TabsList className="w-full justify-start rounded-none border-b border-botanical-tan">
                <TabsTrigger value="principios">Princípios</TabsTrigger>
                <TabsTrigger value="nomeacao">Nomeação</TabsTrigger>
                <TabsTrigger value="publicacao">Publicação</TabsTrigger>
                <TabsTrigger value="tipificacao">Tipificação</TabsTrigger>
              </TabsList>

              <TabsContent value="principios" className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-botanical-green-dark mb-4">Princípios Fundamentais</h3>
                    <p className="mb-4 text-muted-foreground">
                      O Código Internacional de Nomenclatura baseia-se em princípios fundamentais que visam 
                      proporcionar estabilidade, precisão e universalidade aos nomes botânicos.
                    </p>

                    <div className="space-y-4">
                      <Card className="border-botanical-tan bg-botanical-cream/50">
                        <CardContent className="p-4">
                          <h4 className="font-medium text-botanical-green-dark mb-3">Princípio I: Independência</h4>
                          <p className="text-sm text-muted-foreground">
                            A nomenclatura botânica é independente da nomenclatura zoológica e bacteriológica. 
                            O Código aplica-se apenas a nomes de plantas, algas e fungos, sejam fósseis ou não.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border-botanical-tan bg-botanical-cream/50">
                        <CardContent className="p-4">
                          <h4 className="font-medium text-botanical-green-dark mb-3">Princípio II: Tipificação</h4>
                          <p className="text-sm text-muted-foreground">
                            A aplicação dos nomes é determinada por tipos nomenclaturais. Um tipo nomenclatural 
                            (typus) é o elemento ao qual o nome de um táxon está permanentemente associado.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border-botanical-tan bg-botanical-cream/50">
                        <CardContent className="p-4">
                          <h4 className="font-medium text-botanical-green-dark mb-3">Princípio III: Prioridade</h4>
                          <p className="text-sm text-muted-foreground">
                            A nomenclatura de um grupo taxonômico baseia-se na prioridade de publicação. O primeiro 
                            nome validamente publicado para um táxon é o que deve ser utilizado, salvo exceções previstas no Código.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border-botanical-tan bg-botanical-cream/50">
                        <CardContent className="p-4">
                          <h4 className="font-medium text-botanical-green-dark mb-3">Princípio IV: Um nome por táxon</h4>
                          <p className="text-sm text-muted-foreground">
                            Cada táxon com circunscrição, posição e categoria particulares pode ter apenas um nome 
                            correto, o primeiro a ser validamente publicado de acordo com as regras, exceto em casos específicos.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border-botanical-tan bg-botanical-cream/50">
                        <CardContent className="p-4">
                          <h4 className="font-medium text-botanical-green-dark mb-3">Princípio V: Universalidade</h4>
                          <p className="text-sm text-muted-foreground">
                            Os nomes científicos de grupos taxonômicos são tratados como latim, independentemente de sua derivação. 
                            Isso permite a comunicação universal entre cientistas de diferentes línguas e culturas.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border-botanical-tan bg-botanical-cream/50">
                        <CardContent className="p-4">
                          <h4 className="font-medium text-botanical-green-dark mb-3">Princípio VI: Retroatividade</h4>
                          <p className="text-sm text-muted-foreground">
                            As regras do Código são retroativas, a menos que expressamente limitadas, aplicando-se a 
                            nomes publicados antes mesmo da existência do Código atual.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="nomeacao" className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-botanical-green-dark mb-4">Regras de Nomeação</h3>
                    <p className="mb-4 text-muted-foreground">
                      O Código estabelece regras específicas para a formação e aplicação correta dos nomes científicos.
                    </p>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-botanical-tan">
                        <AccordionTrigger className="text-botanical-green-dark hover:text-botanical-green-medium">
                          Artigo 16-19: Formação de Nomes
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          <p className="mb-3">
                            Os nomes botânicos devem ser formados em latim ou tratados como tal, seguindo regras gramaticais específicas:
                          </p>
                          <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>Nomes de gêneros devem ser substantivos no singular com inicial maiúscula</li>
                            <li>Epítetos específicos devem concordar gramaticalmente com o gênero do nome genérico</li>
                            <li>Epítetos podem ser adjetivos, substantivos no genitivo ou substantivos em aposição</li>
                            <li>Nomes de famílias são formados a partir do nome de um gênero com o sufixo -aceae</li>
                          </ul>
                          <div className="mt-4 p-3 bg-botanical-green-light/10 rounded-md">
                            <span className="font-medium">Exemplo:</span> <i>Quercus alba</i> (gênero + epíteto adjetivo), <i>Fagaceae</i> (família)
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2" className="border-botanical-tan">
                        <AccordionTrigger className="text-botanical-green-dark hover:text-botanical-green-medium">
                          Artigo 21-22: Autoria de Nomes
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          <p className="mb-3">
                            A citação de autoria é parte integral da nomenclatura e serve para precisão e identificação histórica:
                          </p>
                          <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>O autor do nome é quem validamente o publicou primeiro</li>
                            <li>Na transferência de um táxon para outro gênero, a autoria original é colocada entre parênteses</li>
                            <li>Múltiplos autores são conectados com "&" ou "et"</li>
                            <li>Abreviações padronizadas de nomes de autores devem ser utilizadas</li>
                          </ul>
                          <div className="mt-4 p-3 bg-botanical-green-light/10 rounded-md">
                            <span className="font-medium">Exemplo:</span> <i>Magnolia grandiflora</i> L. (Linnaeus como autor original), <i>Persea americana</i> (Mill.) Druce (Miller como autor original, Druce como autor da nova combinação)
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3" className="border-botanical-tan">
                        <AccordionTrigger className="text-botanical-green-dark hover:text-botanical-green-medium">
                          Artigo 23-24: Prioridade e Conservação
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          <p className="mb-3">
                            Os princípios de prioridade e conservação são fundamentais para estabilidade nomenclatural:
                          </p>
                          <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>O nome legítimo mais antigo tem prioridade (primeiro a ser validamente publicado)</li>
                            <li>A data de publicação efetiva determina a prioridade</li>
                            <li>Nomes podem ser conservados contra nomes mais antigos para preservar o uso estabelecido</li>
                            <li>Propostas de conservação são avaliadas por comitês especializados</li>
                          </ul>
                          <div className="mt-4 p-3 bg-botanical-green-light/10 rounded-md">
                            <span className="font-medium">Exemplo:</span> <i>Acacia</i> foi conservado com um tipo diferente do original para preservar o uso do nome para espécies australianas
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4" className="border-botanical-tan">
                        <AccordionTrigger className="text-botanical-green-dark hover:text-botanical-green-medium">
                          Artigo 32-45: Validez e Legitimidade
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          <p className="mb-3">
                            Os conceitos de validez e legitimidade são distintos e fundamentais:
                          </p>
                          <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>Um nome válido cumpre todos os requisitos formais de publicação</li>
                            <li>Um nome legítimo é válido e não viola regras adicionais, como homonímia</li>
                            <li>Nomes inválidos incluem os publicados sem descrição, sem indicação de tipo, etc.</li>
                            <li>Nomes ilegítimos incluem homônimos posteriores e nomes supérfluos</li>
                          </ul>
                          <div className="mt-4 p-3 bg-botanical-green-light/10 rounded-md">
                            <span className="font-medium">Exemplo:</span> Um nome publicado após 1953 sem designação de holótipo é inválido. Um nome idêntico a outro já existente no mesmo gênero é ilegítimo.
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="publicacao" className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-botanical-green-dark mb-4">Requisitos de Publicação</h3>
                    <p className="mb-4 text-muted-foreground">
                      Para ser validamente publicado, um nome deve cumprir requisitos específicos estabelecidos pelo Código.
                    </p>

                    <div className="space-y-4">
                      <Card className="border-botanical-tan">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Publicação Efetiva</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-3">
                            Para ser efetivamente publicado, um nome deve ser distribuído em material impresso ou em formato eletrônico com ISSN ou ISBN, 
                            tornando-o acessível ao público científico. Manuscritos, teses não publicadas e comunicações orais não constituem publicação efetiva.
                          </p>
                          <div className="p-3 bg-botanical-green-light/10 rounded-md">
                            <h5 className="font-medium text-botanical-green-dark mb-1">Requisitos para publicação efetiva:</h5>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                              <li>Publicação em periódico científico, livro ou meio eletrônico com ISSN/ISBN</li>
                              <li>Distribuição pública a bibliotecas e instituições botânicas</li>
                              <li>A partir de 2012, publicações eletrônicas em PDF são aceitas</li>
                              <li>A partir de 2019, os identificadores de espécimes (como números de herbário) devem ser citados</li>
                            </ul>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-botanical-tan">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Publicação Válida</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-3">
                            Para ser validamente publicado, além de efetivamente publicado, um nome deve atender a requisitos adicionais 
                            que dependem da data de publicação e da categoria taxonômica.
                          </p>
                          <div className="p-3 bg-botanical-green-light/10 rounded-md">
                            <h5 className="font-medium text-botanical-green-dark mb-1">Requisitos para publicação válida:</h5>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                              <li>Forma latina do nome (ou tratado como latim)</li>
                              <li>Acompanhado de descrição ou diagnose (em latim antes de 2012, depois latim ou inglês)</li>
                              <li>Designação de tipo nomenclatural (obrigatória após 1958 para espécies novas)</li>
                              <li>Indicação clara de categoria taxonômica (como "sp. nov." para espécie nova)</li>
                            </ul>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-botanical-tan">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Datas Críticas na Nomenclatura</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-3">
                            O Código estabelece datas importantes que afetam os requisitos para publicação válida ao longo da história.
                          </p>
                          <div className="space-y-2">
                            <div className="flex">
                              <div className="w-24 font-medium text-botanical-green-dark">1 Maio 1753:</div>
                              <div className="flex-1 text-muted-foreground">
                                Data de partida para a nomenclatura de plantas (publicação do Species Plantarum de Linnaeus)
                              </div>
                            </div>
                            <Separator className="bg-botanical-tan/50" />
                            
                            <div className="flex">
                              <div className="w-24 font-medium text-botanical-green-dark">1 Jan 1935:</div>
                              <div className="flex-1 text-muted-foreground">
                                A partir desta data, uma diagnose latina torna-se obrigatória para nomes novos
                              </div>
                            </div>
                            <Separator className="bg-botanical-tan/50" />
                            
                            <div className="flex">
                              <div className="w-24 font-medium text-botanical-green-dark">1 Jan 1958:</div>
                              <div className="flex-1 text-muted-foreground">
                                A partir desta data, a indicação de tipo torna-se obrigatória para nomes novos
                              </div>
                            </div>
                            <Separator className="bg-botanical-tan/50" />
                            
                            <div className="flex">
                              <div className="w-24 font-medium text-botanical-green-dark">1 Jan 2012:</div>
                              <div className="flex-1 text-muted-foreground">
                                A partir desta data, diagnoses em inglês também são aceitas; publicações eletrônicas em PDF são validadas
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tipificacao" className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-botanical-green-dark mb-4">Tipificação</h3>
                    <p className="mb-4 text-muted-foreground">
                      A tipificação é fundamental para ancorar os nomes a espécimes físicos, garantindo estabilidade na aplicação dos nomes.
                    </p>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-botanical-tan">
                        <AccordionTrigger className="text-botanical-green-dark hover:text-botanical-green-medium">
                          Conceito e Importância de Tipos
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          <p className="mb-3">
                            O tipo nomenclatural é o elemento ao qual o nome de um táxon está permanentemente associado. 
                            É a referência objetiva para a aplicação do nome, independentemente de mudanças taxonômicas.
                          </p>
                          <div className="p-3 bg-botanical-green-light/10 rounded-md mb-3">
                            <p className="font-medium">Importância da tipificação:</p>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              <li>Fornece estabilidade nomenclatural</li>
                              <li>Permite a verificação objetiva da aplicação dos nomes</li>
                              <li>Resolve ambiguidades na interpretação dos nomes</li>
                              <li>Serve como ponto de referência em estudos taxonômicos</li>
                            </ul>
                          </div>
                          <p>
                            O tipo não precisa ser o espécime mais típico ou representativo do táxon, 
                            mas é o portador do nome, independentemente de ser morfologicamente atípico.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2" className="border-botanical-tan">
                        <AccordionTrigger className="text-botanical-green-dark hover:text-botanical-green-medium">
                          Tipos Nomenclaturais para Espécies
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          <p className="mb-3">
                            Existem diferentes categorias de tipos nomenclaturais, cada uma com status distinto:
                          </p>
                          <div className="space-y-3">
                            <div>
                              <h5 className="font-medium text-botanical-green-dark">Holótipo:</h5>
                              <p className="text-sm">
                                O único espécime ou ilustração designado pelo autor como tipo nomenclatural no momento da publicação original.
                              </p>
                            </div>
                            <Separator className="bg-botanical-tan/50" />
                            
                            <div>
                              <h5 className="font-medium text-botanical-green-dark">Isótipo:</h5>
                              <p className="text-sm">
                                Duplicata do holótipo, ou seja, parte da mesma coleta que gerou o holótipo.
                              </p>
                            </div>
                            <Separator className="bg-botanical-tan/50" />
                            
                            <div>
                              <h5 className="font-medium text-botanical-green-dark">Síntipo:</h5>
                              <p className="text-sm">
                                Qualquer espécime citado no protólogo quando não há holótipo designado, ou qualquer um de dois ou mais espécimes simultaneamente designados como tipos.
                              </p>
                            </div>
                            <Separator className="bg-botanical-tan/50" />
                            
                            <div>
                              <h5 className="font-medium text-botanical-green-dark">Lectótipo:</h5>
                              <p className="text-sm">
                                Um espécime ou ilustração designado posteriormente como tipo, a partir do material original, quando não há holótipo ou o holótipo foi perdido ou destruído.
                              </p>
                            </div>
                            <Separator className="bg-botanical-tan/50" />
                            
                            <div>
                              <h5 className="font-medium text-botanical-green-dark">Neótipo:</h5>
                              <p className="text-sm">
                                Um espécime ou ilustração selecionado para servir como tipo nomenclatural quando todo o material original foi perdido ou destruído.
                              </p>
                            </div>
                            <Separator className="bg-botanical-tan/50" />
                            
                            <div>
                              <h5 className="font-medium text-botanical-green-dark">Epitipo:</h5>
                              <p className="text-sm">
                                Um espécime ou ilustração selecionado para servir como tipo interpretativo quando o holótipo, lectótipo ou neótipo existente é demonstravelmente ambíguo e não pode ser identificado com certeza para fins de aplicação precisa do nome.
                              </p>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3" className="border-botanical-tan">
                        <AccordionTrigger className="text-botanical-green-dark hover:text-botanical-green-medium">
                          Procedimentos de Tipificação
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          <p className="mb-3">
                            O Código estabelece procedimentos específicos para a designação e posterior tipificação:
                          </p>
                          <div className="space-y-3">
                            <div>
                              <h5 className="font-medium text-botanical-green-dark">Tipificação original:</h5>
                              <p className="text-sm">
                                Para nomes publicados a partir de 1958, a indicação do holótipo é obrigatória. 
                                O autor deve designar claramente um único espécime como holótipo e citar o herbário onde está depositado.
                              </p>
                            </div>
                            <Separator className="bg-botanical-tan/50" />
                            
                            <div>
                              <h5 className="font-medium text-botanical-green-dark">Lectotipificação:</h5>
                              <p className="text-sm">
                                Quando não há holótipo designado (comum em publicações antigas) ou quando o holótipo foi perdido, 
                                um lectótipo deve ser designado a partir do material original (síntipos, isótipos, etc.). 
                                A lectotipificação deve ser publicada e explicitamente indicada.
                              </p>
                            </div>
                            <Separator className="bg-botanical-tan/50" />
                            
                            <div>
                              <h5 className="font-medium text-botanical-green-dark">Neotipificação:</h5>
                              <p className="text-sm">
                                Só pode ser feita quando todo o material original foi perdido ou destruído. 
                                Deve-se demonstrar esforço para localizar material original e selecionar um espécime 
                                que corresponda ao conceito original do táxon, preferencialmente da localidade tipo.
                              </p>
                            </div>
                            <Separator className="bg-botanical-tan/50" />
                            
                            <div>
                              <h5 className="font-medium text-botanical-green-dark">Epitipificação:</h5>
                              <p className="text-sm">
                                Usada quando o tipo existente é ambíguo para a aplicação precisa do nome. 
                                O epitipo suplementa o tipo existente (que permanece como portador do nome) 
                                com material adicional que permite identificação definitiva.
                              </p>
                            </div>
                          </div>
                          <div className="mt-4 p-3 bg-botanical-green-light/10 rounded-md">
                            <span className="font-medium">Exemplo:</span> Um nome publicado em 1820 sem designação de tipo pode requerer lectotipificação. 
                            Se todos os espécimes originais foram destruídos (por exemplo, durante a Segunda Guerra Mundial), um neótipo pode ser designado.
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
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

export default Rules;
