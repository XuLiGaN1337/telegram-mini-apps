import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Wrench, FileText, Download } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const TechnicalInfo = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          Техническая информация
        </h1>
        
        <p className="text-center text-gray-400 mb-8">
          Руководства, инструкции и техническая документация для мотоциклистов
        </p>
        
        <Tabs defaultValue="manuals" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="manuals">Руководства</TabsTrigger>
            <TabsTrigger value="maintenance">Обслуживание</TabsTrigger>
            <TabsTrigger value="diagnostics">Диагностика</TabsTrigger>
          </TabsList>
          
          <TabsContent value="manuals">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-400" />
                    Руководства пользователя
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Honda</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          <li className="flex justify-between items-center">
                            <span>Honda CB650R (2019-2023)</span>
                            <Button size="sm" variant="outline" className="flex items-center">
                              <Download className="h-3 w-3 mr-1" /> PDF
                            </Button>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>Honda Africa Twin (2020-2023)</span>
                            <Button size="sm" variant="outline" className="flex items-center">
                              <Download className="h-3 w-3 mr-1" /> PDF
                            </Button>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>Honda Rebel 500 (2017-2023)</span>
                            <Button size="sm" variant="outline" className="flex items-center">
                              <Download className="h-3 w-3 mr-1" /> PDF
                            </Button>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Yamaha</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          <li className="flex justify-between items-center">
                            <span>Yamaha MT-07 (2021-2023)</span>
                            <Button size="sm" variant="outline" className="flex items-center">
                              <Download className="h-3 w-3 mr-1" /> PDF
                            </Button>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>Yamaha Ténéré 700 (2019-2023)</span>
                            <Button size="sm" variant="outline" className="flex items-center">
                              <Download className="h-3 w-3 mr-1" /> PDF
                            </Button>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>Yamaha XSR900 (2022-2023)</span>
                            <Button size="sm" variant="outline" className="flex items-center">
                              <Download className="h-3 w-3 mr-1" /> PDF
                            </Button>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Kawasaki</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          <li className="flex justify-between items-center">
                            <span>Kawasaki Z900 (2020-2023)</span>
                            <Button size="sm" variant="outline" className="flex items-center">
                              <Download className="h-3 w-3 mr-1" /> PDF
                            </Button>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>Kawasaki Ninja 650 (2020-2023)</span>
                            <Button size="sm" variant="outline" className="flex items-center">
                              <Download className="h-3 w-3 mr-1" /> PDF
                            </Button>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>Kawasaki Versys 650 (2022-2023)</span>
                            <Button size="sm" variant="outline" className="flex items-center">
                              <Download className="h-3 w-3 mr-1" /> PDF
                            </Button>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-blue-400" />
                    Сервисные руководства
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>BMW</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          <li className="flex justify-between items-center">
                            <span>BMW R 1250 GS (2019-2023)</span>
                            <Button size="sm" variant="outline" className="flex items-center">
                              <Download className="h-3 w-3 mr-1" /> PDF
                            </Button>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>BMW S 1000 RR (2019-2023)</span>
                            <Button size="sm" variant="outline" className="flex items-center">
                              <Download className="h-3 w-3 mr-1" /> PDF
                            </Button>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>BMW F 900 R (2020-2023)</span>
                            <Button size="sm" variant="outline" className="flex items-center">
                              <Download className="h-3 w-3 mr-1" /> PDF
                            </Button>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Suzuki</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          <li className="flex justify-between items-center">
                            <span>Suzuki V-Strom 650 (2017-2023)</span>
                            <Button size="sm" variant="outline" className="flex items-center">
                              <Download className="h-3 w-3 mr-1" /> PDF
                            </Button>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>Suzuki GSX-S750 (2018-2023)</span>
                            <Button size="sm" variant="outline" className="flex items-center">
                              <Download className="h-3 w-3 mr-1" /> PDF
                            </Button>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>Suzuki Hayabusa (2021-2023)</span>
                            <Button size="sm" variant="outline" className="flex items-center">
                              <Download className="h-3 w-3 mr-1" /> PDF
                            </Button>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3">
                      <AccordionTrigger>KTM</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          <li className="flex justify-between items-center">
                            <span>KTM 390 Duke (2021-2023)</span>
                            <Button size="sm" variant="outline" className="flex items-center">
                              <Download className="h-3 w-3 mr-1" /> PDF
                            </Button>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>KTM 890 Adventure (2021-2023)</span>
                            <Button size="sm" variant="outline" className="flex items-center">
                              <Download className="h-3 w-3 mr-1" /> PDF
                            </Button>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>KTM 1290 Super Duke (2020-2023)</span>
                            <Button size="sm" variant="outline" className="flex items-center">
                              <Download className="h-3 w-3 mr-1" /> PDF
                            </Button>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-amber-600/20 border border-amber-500/30 rounded-lg p-4">
              <div className="flex">
                <AlertTriangle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Представленные руководства и документация предназначены только для ознакомления. 
                  Для официальных документов обращайтесь к авторизованным дилерам производителей.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="maintenance">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-blue-400" />
                    Регулярное обслуживание
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border border-blue-500/30 rounded-md p-4">
                      <h3 className="text-blue-300 font-medium mb-2">Замена моторного масла</h3>
                      <p className="text-gray-300 text-sm mb-2">
                        Регулярность: каждые 5000-10000 км (зависит от модели)
                      </p>
                      <Button size="sm" variant="outline" className="flex items-center">
                        <Download className="h-3 w-3 mr-1" /> Инструкция
                      </Button>
                    </div>
                    
                    <div className="border border-blue-500/30 rounded-md p-4">
                      <h3 className="text-blue-300 font-medium mb-2">Проверка и регулировка цепи</h3>
                      <p className="text-gray-300 text-sm mb-2">
                        Регулярность: каждые 500-1000 км
                      </p>
                      <Button size="sm" variant="outline" className="flex items-center">
                        <Download className="h-3 w-3 mr-1" /> Инструкция
                      </Button>
                    </div>
                    
                    <div className="border border-blue-500/30 rounded-md p-4">
                      <h3 className="text-blue-300 font-medium mb-2">Проверка тормозной системы</h3>
                      <p className="text-gray-300 text-sm mb-2">
                        Регулярность: каждые 2000-3000 км
                      </p>
                      <Button size="sm" variant="outline" className="flex items-center">
                        <Download className="h-3 w-3 mr-1" /> Инструкция
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-blue-400" />
                    Сезонное обслуживание
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border border-blue-500/30 rounded-md p-4">
                      <h3 className="text-blue-300 font-medium mb-2">Подготовка к сезону</h3>
                      <p className="text-gray-300 text-sm mb-2">
                        Комплексная проверка перед началом мотосезона
                      </p>
                      <Button size="sm" variant="outline" className="flex items-center">
                        <Download className="h-3 w-3 mr-1" /> Чек-лист
                      </Button>
                    </div>
                    
                    <div className="border border-blue-500/30 rounded-md p-4">
                      <h3 className="text-blue-300 font-medium mb-2">Консервация на зиму</h3>
                      <p className="text-gray-300 text-sm mb-2">
                        Правильное хранение мотоцикла в межсезонье
                      </p>
                      <Button size="sm" variant="outline" className="flex items-center">
                        <Download className="h-3 w-3 mr-1" /> Инструкция
                      </Button>
                    </div>
                    
                    <div className="border border-blue-500/30 rounded-md p-4">
                      <h3 className="text-blue-300 font-medium mb-2">Антикоррозийная обработка</h3>
                      <p className="text-gray-300 text-sm mb-2">
                        Защита мотоцикла от коррозии
                      </p>
                      <Button size="sm" variant="outline" className="flex items-center">
                        <Download className="h-3 w-3 mr-1" /> Рекомендации
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-amber-600/20 border border-amber-500/30 rounded-lg p-4">
              <div className="flex">
                <AlertTriangle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Всегда следуйте официальным руководствам по обслуживанию вашего мотоцикла. 
                  Регулярность обслуживания может отличаться в зависимости от модели и условий эксплуатации.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="diagnostics">
            <div className="grid grid-cols-1 gap-6 mb-6">
              <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                    Диагностика неисправностей
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Двигатель</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3">
                          <li className="border-b border-gray-700 pb-2">
                            <h4 className="text-blue-300 mb-1">Двигатель не запускается</h4>
                            <p className="text-gray-300 text-sm">
                              Возможные причины: разряженный аккумулятор, неисправность стартера, проблемы с системой зажигания.
                            </p>
                            <Button size="sm" variant="outline" className="mt-2 flex items-center">
                              <Download className="h-3 w-3 mr-1" /> Руководство по диагностике
                            </Button>
                          </li>
                          <li className="border-b border-gray-700 pb-2">
                            <h4 className="text-blue-300 mb-1">Двигатель глохнет на холостом ходу</h4>
                            <p className="text-gray-300 text-sm">
                              Возможные причины: неправильная настройка карбюратора/инжектора, загрязненный воздушный фильтр, проблемы с топливной системой.
                            </p>
                            <Button size="sm" variant="outline" className="mt-2 flex items-center">
                              <Download className="h-3 w-3 mr-1" /> Руководство по диагностике
                            </Button>
                          </li>
                          <li>
                            <h4 className="text-blue-300 mb-1">Перегрев двигателя</h4>
                            <p className="text-gray-300 text-sm">
                              Возможные причины: недостаточный уровень охлаждающей жидкости, неисправность термостата, проблемы с системой охлаждения.
                            </p>
                            <Button size="sm" variant="outline" className="mt-2 flex items-center">
                              <Download className="h-3 w-3 mr-1" /> Руководство по диагностике
                            </Button>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Трансмиссия</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3">
                          <li className="border-b border-gray-700 pb-2">
                            <h4 className="text-blue-300 mb-1">Проблемы с переключением передач</h4>
                            <p className="text-gray-300 text-sm">
                              Возможные причины: неправильная регулировка сцепления, износ компонентов коробки передач, загрязнение масла.
                            </p>
                            <Button size="sm" variant="outline" className="mt-2 flex items-center">
                              <Download className="h-3 w-3 mr-1" /> Руководство по диагностике
                            </Button>
                          </li>
                          <li className="border-b border-gray-700 pb-2">
                            <h4 className="text-blue-300 mb-1">Шум при работе трансмиссии</h4>
                            <p className="text-gray-300 text-sm">
                              Возможные причины: износ подшипников, повреждение зубьев шестерен, недостаточное количество масла.
                            </p>
                            <Button size="sm" variant="outline" className="mt-2 flex items-center">
                              <Download className="h-3 w-3 mr-1" /> Руководство по диагностике
                            </Button>
                          </li>
                          <li>
                            <h4 className="text-blue-300 mb-1">Проскальзывание сцепления</h4>
                            <p className="text-gray-300 text-sm">
                              Возможные причины: износ дисков сцепления, неправильная регулировка, проблемы с гидравлической системой.
                            </p>
                            <Button size="sm" variant="outline" className="mt-2 flex items-center">
                              <Download className="h-3 w-3 mr-1" /> Руководство по диагностике
                            </Button>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Электрика</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3">
                          <li className="border-b border-gray-700 pb-2">
                            <h4 className="text-blue-300 mb-1">Проблемы с зарядкой аккумулятора</h4>
                            <p className="text-gray-300 text-sm">
                              Возможные причины: неисправность генератора, регулятора напряжения, повреждение проводки.
                            </p>
                            <Button size="sm" variant="outline" className="mt-2 flex items-center">
                              <Download className="h-3 w-3 mr-1" /> Руководство по диагностике
                            </Button>
                          </li>
                          <li className="border-b border-gray-700 pb-2">
                            <h4 className="text-blue-300 mb-1">Не работает световое оборудование</h4>
                            <p className="text-gray-300 text-sm">
                              Возможные причины: перегоревшие лампы, неисправность переключателей, проблемы с проводкой.
                            </p>
                            <Button size="sm" variant="outline" className="mt-2 flex items-center">
                              <Download className="h-3 w-3 mr-1" /> Руководство по диагностике
                            </Button>
                          </li>
                          <li>
                            <h4 className="text-blue-300 mb-1">Неисправности приборной панели</h4>
                            <p className="text-gray-300 text-sm">
                              Возможные причины: неисправность датчиков, проблемы с электроникой, повреждение проводки.
                            </p>
                            <Button size="sm" variant="outline" className="mt-2 flex items-center">
                              <Download className="h-3 w-3 mr-1" /> Руководство по диагностике
                            </Button>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-amber-600/20 border border-amber-500/30 rounded-lg p-4">
              <div className="flex">
                <AlertTriangle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  При серьезных неисправностях рекомендуется обратиться к квалифицированным специалистам.
                  Самостоятельная диагностика и ремонт сложных систем может привести к дополнительным повреждениям.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default TechnicalInfo;
