import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, FileText, Wrench, Book } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TechnicalInfo = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          Техническая информация
        </h1>
        
        <p className="text-center text-gray-400 mb-8">
          Полезные сведения о мотоциклах, обслуживании и ремонте
        </p>
        
        <Tabs defaultValue="maintenance" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="maintenance">Обслуживание</TabsTrigger>
            <TabsTrigger value="repair">Ремонт</TabsTrigger>
            <TabsTrigger value="documents">Документация</TabsTrigger>
          </TabsList>
          
          <TabsContent value="maintenance">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wrench className="h-5 w-5 mr-2 text-blue-400" />
                    Регулярное обслуживание
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Замена масла и фильтров</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-300 mb-2">
                          Рекомендуемая периодичность: каждые 3000-5000 км или раз в сезон.
                        </p>
                        <p className="text-gray-300 mb-2">
                          Необходимо использовать масло, соответствующее спецификации производителя. 
                          Для большинства современных мотоциклов рекомендуется синтетическое масло 10W40 или 10W50.
                        </p>
                        <div className="bg-amber-600/20 border border-amber-500/30 rounded-lg p-3 mt-3">
                          <div className="flex">
                            <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                            <p className="text-sm text-gray-300">
                              Всегда проверяйте уровень масла на горизонтальной поверхности при выключенном двигателе.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Проверка и регулировка цепи</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-300 mb-2">
                          Регулярно проверяйте натяжение цепи и состояние звезд. 
                          Оптимальный прогиб цепи обычно составляет 25-35 мм в средней точке между звездами.
                        </p>
                        <p className="text-gray-300 mb-2">
                          Смазывайте цепь специальной смазкой после каждой поездки под дождем или каждые 500 км.
                        </p>
                        <div className="bg-amber-600/20 border border-amber-500/30 rounded-lg p-3 mt-3">
                          <div className="flex">
                            <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                            <p className="text-sm text-gray-300">
                              Слишком сильно натянутая цепь может привести к повреждению подшипников коробки передач.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Проверка тормозной системы</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-300 mb-2">
                          Регулярно проверяйте уровень тормозной жидкости и состояние тормозных колодок.
                        </p>
                        <p className="text-gray-300 mb-2">
                          Тормозную жидкость рекомендуется менять каждые 2 года, так как она гигроскопична и со временем поглощает влагу.
                        </p>
                        <div className="bg-amber-600/20 border border-amber-500/30 rounded-lg p-3 mt-3">
                          <div className="flex">
                            <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                            <p className="text-sm text-gray-300">
                              Никогда не используйте тормозную жидкость из открытой емкости, так как она быстро поглощает влагу из воздуха.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-blue-400" />
                    Сезонное обслуживание
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Подготовка к сезону</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                          <li>Проверьте уровень и качество всех эксплуатационных жидкостей</li>
                          <li>Проверьте состояние и давление в шинах</li>
                          <li>Проверьте работу электрооборудования</li>
                          <li>Очистите и отрегулируйте цепь</li>
                          <li>Проверьте состояние аккумулятора и зарядите его при необходимости</li>
                        </ul>
                        <div className="bg-amber-600/20 border border-amber-500/30 rounded-lg p-3 mt-3">
                          <div className="flex">
                            <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                            <p className="text-sm text-gray-300">
                              После длительного хранения первые 15-20 минут езды следует избегать высоких оборотов.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Консервация на зиму</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                          <li>Заправьте полный бак топлива с добавлением стабилизатора</li>
                          <li>Смажьте все тросы и соединения</li>
                          <li>Снимите аккумулятор для хранения в теплом помещении</li>
                          <li>Поставьте мотоцикл на центральную подставку</li>
                          <li>Закройте мотоцикл чехлом, который позволяет циркуляцию воздуха</li>
                        </ul>
                        <div className="bg-amber-600/20 border border-amber-500/30 rounded-lg p-3 mt-3">
                          <div className="flex">
                            <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                            <p className="text-sm text-gray-300">
                              Не храните мотоцикл с пустым баком - это приведет к коррозии внутренних поверхностей.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Проверка перед дальней поездкой</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                          <li>Проверьте состояние шин и давление в них</li>
                          <li>Проверьте работу всех световых приборов</li>
                          <li>Проверьте уровни всех жидкостей</li>
                          <li>Проверьте состояние и натяжение цепи</li>
                          <li>Проверьте работу тормозов и сцепления</li>
                        </ul>
                        <div className="bg-amber-600/20 border border-amber-500/30 rounded-lg p-3 mt-3">
                          <div className="flex">
                            <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                            <p className="text-sm text-gray-300">
                              Возьмите с собой базовый набор инструментов и запасные части (свечи, предохранители).
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="repair">
            <div className="space-y-6">
              <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wrench className="h-5 w-5 mr-2 text-blue-400" />
                    Распространенные проблемы и решения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Двигатель не запускается</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-300 mb-2 font-medium">Возможные причины:</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                          <li>Разряженный аккумулятор</li>
                          <li>Проблемы с топливной системой</li>
                          <li>Неисправность свечей зажигания</li>
                          <li>Неисправность катушки зажигания</li>
                          <li>Неисправность стартера</li>
                        </ul>
                        
                        <p className="text-gray-300 mt-4 mb-2 font-medium">Решения:</p>
                        <ol className="list-decimal list-inside text-gray-300 space-y-2">
                          <li>Проверьте напряжение аккумулятора, при необходимости зарядите или замените</li>
                          <li>Проверьте подачу топлива и состояние топливного фильтра</li>
                          <li>Проверьте и при необходимости замените свечи зажигания</li>
                          <li>Проверьте состояние высоковольтных проводов</li>
                        </ol>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Нестабильная работа на холостом ходу</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-300 mb-2 font-medium">Возможные причины:</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                          <li>Неправильная настройка карбюратора (для карбюраторных мотоциклов)</li>
                          <li>Загрязнение инжекторов (для инжекторных мотоциклов)</li>
                          <li>Подсос воздуха во впускном коллекторе</li>
                          <li>Проблемы с датчиком положения дроссельной заслонки</li>
                        </ul>
                        
                        <p className="text-gray-300 mt-4 mb-2 font-medium">Решения:</p>
                        <ol className="list-decimal list-inside text-gray-300 space-y-2">
                          <li>Отрегулируйте карбюратор согласно руководству</li>
                          <li>Очистите инжекторы специальной жидкостью</li>
                          <li>Проверьте впускную систему на наличие утечек</li>
                          <li>Проверьте и при необходимости замените датчики</li>
                        </ol>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Проблемы с тормозной системой</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-300 mb-2 font-medium">Возможные причины:</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                          <li>Воздух в тормозной системе</li>
                          <li>Износ тормозных колодок</li>
                          <li>Деформация тормозных дисков</li>
                          <li>Неисправность главного тормозного цилиндра</li>
                        </ul>
                        
                        <p className="text-gray-300 mt-4 mb-2 font-medium">Решения:</p>
                        <ol className="list-decimal list-inside text-gray-300 space-y-2">
                          <li>Прокачайте тормозную систему</li>
                          <li>Замените тормозные колодки</li>
                          <li>Проверьте состояние тормозных дисков, при необходимости замените</li>
                          <li>Проверьте и при необходимости отремонтируйте или замените главный тормозной цилиндр</li>
                        </ol>
                        
                        <div className="bg-amber-600/20 border border-amber-500/30 rounded-lg p-3 mt-3">
                          <div className="flex">
                            <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                            <p className="text-sm text-gray-300">
                              При серьезных проблемах с тормозной системой рекомендуется обратиться к профессионалам. Это напрямую влияет на безопасность.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wrench className="h-5 w-5 mr-2 text-blue-400" />
                    Инструменты для самостоятельного ремонта
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-white font-medium mb-2">Базовый набор</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Набор торцевых ключей (8-24 мм)</li>
                        <li>Набор шестигранников</li>
                        <li>Отвертки (крестовые и шлицевые)</li>
                        <li>Плоскогубцы и кусачки</li>
                        <li>Молоток и киянка</li>
                        <li>Мультиметр</li>
                        <li>Манометр для шин</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-white font-medium mb-2">Специальные инструменты</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Съемник масляного фильтра</li>
                        <li>Ключ для регулировки цепи</li>
                        <li>Оправка для выпрессовки подшипников</li>
                        <li>Динамометрический ключ</li>
                        <li>Компрессометр</li>
                        <li>Вакуумметр (для синхронизации карбюраторов)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-amber-600/20 border border-amber-500/30 rounded-lg p-3 mt-6">
                    <div className="flex">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                      <p className="text-sm text-gray-300">
                        Всегда используйте инструменты правильного размера, чтобы избежать повреждения крепежных элементов. Не экономьте на качестве инструментов — это может привести к дополнительным затратам в будущем.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="documents">
            <div className="space-y-6">
              <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Book className="h-5 w-5 mr-2 text-blue-400" />
                    Технические руководства
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Здесь представлены ссылки на технические руководства для наиболее популярных моделей мотоциклов.
                    Документация содержит подробные инструкции по обслуживанию и ремонту.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-cyan-500/20 rounded-lg p-4">
                      <h3 className="text-blue-400 font-medium mb-2">Японские мотоциклы</h3>
                      <ul className="space-y-2">
                        <li className="text-white hover:text-blue-400 transition-colors">
                          <a href="#" className="flex items-center">
                            <FileText className="h-4 w-4 mr-2" />
                            Honda CBR Series (2000-2023)
                          </a>
                        </li>
                        <li className="text-white hover:text-blue-400 transition-colors">
                          <a href="#" className="flex items-center">
                            <FileText className="h-4 w-4 mr-2" />
                            Yamaha YZF-R Series (1998-2023)
                          </a>
                        </li>
                        <li className="text-white hover:text-blue-400 transition-colors">
                          <a href="#" className="flex items-center">
                            <FileText className="h-4 w-4 mr-2" />
                            Kawasaki Ninja Series (2005-2023)
                          </a>
                        </li>
                        <li className="text-white hover:text-blue-400 transition-colors">
                          <a href="#" className="flex items-center">
                            <FileText className="h-4 w-4 mr-2" />
                            Suzuki GSX-R Series (2000-2023)
                          </a>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border border-cyan-500/20 rounded-lg p-4">
                      <h3 className="text-blue-400 font-medium mb-2">Европейские мотоциклы</h3>
                      <ul className="space-y-2">
                        <li className="text-white hover:text-blue-400 transition-colors">
                          <a href="#" className="flex items-center">
                            <FileText className="h-4 w-4 mr-2" />
                            BMW R Series (2010-2023)
                          </a>
                        </li>
                        <li className="text-white hover:text-blue-400 transition-colors">
                          <a href="#" className="flex items-center">
                            <FileText className="h-4 w-4 mr-2" />
                            Ducati Monster Series (2005-2023)
                          </a>
                        </li>
                        <li className="text-white hover:text-blue-400 transition-colors">
                          <a href="#" className="flex items-center">
                            <FileText className="h-4 w-4 mr-2" />
                            KTM Duke Series (2012-2023)
                          </a>
                        </li>
                        <li className="text-white hover:text-blue-400 transition-colors">
                          <a href="#" className="flex items-center">
                            <FileText className="h-4 w-4 mr-2" />
                            Triumph Bonneville Series (2008-2023)
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-amber-600/20 border border-amber-500/30 rounded-lg p-3 mt-6">
                    <div className="flex">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                      <p className="text-sm text-gray-300">
                        Все представленные материалы предназначены только для информационных целей. 
                        При выполнении сложных технических работ рекомендуется консультация со специалистом.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Book className="h-5 w-5 mr-2 text-blue-400" />
                    Электрические схемы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Электрические схемы различных моделей мотоциклов для диагностики и решения проблем с электрооборудованием.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <a href="#" className="border border-cyan-500/20 rounded-lg p-4 hover:bg-cyan-950/20 transition-colors">
                      <h3 className="text-blue-400 font-medium mb-2">Система зажигания</h3>
                      <p className="text-sm text-gray-300">
                        Схемы систем зажигания для различных типов мотоциклов.
                      </p>
                    </a>
                    
                    <a href="#" className="border border-cyan-500/20 rounded-lg p-4 hover:bg-cyan-950/20 transition-colors">
                      <h3 className="text-blue-400 font-medium mb-2">Система зарядки</h3>
                      <p className="text-sm text-gray-300">
                        Схемы генераторов и регуляторов напряжения.
                      </p>
                    </a>
                    
                    <a href="#" className="border border-cyan-500/20 rounded-lg p-4 hover:bg-cyan-950/20 transition-colors">
                      <h3 className="text-blue-400 font-medium mb-2">Световое оборудование</h3>
                      <p className="text-sm text-gray-300">
                        Схемы подключения фар, поворотников и другой светотехники.
                      </p>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default TechnicalInfo;
