import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wrench, AlertTriangle, FileText, Clock, CreditCard } from "lucide-react";

const TechnicalInfo: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          Техническая информация
        </h1>
        
        <p className="text-center text-gray-400 mb-8">
          Полезные сведения о техническом обслуживании мототехники
        </p>
        
        {/* Предупреждение об опыте */}
        <div className="bg-amber-600/20 border border-amber-500/30 rounded-lg p-4 mb-8 max-w-4xl mx-auto">
          <div className="flex">
            <AlertTriangle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-400 mb-1">Внимание!</h3>
              <p className="text-gray-300 text-sm">
                Информация представлена только для ознакомления. Если у вас нет достаточного опыта, 
                доверьте техническое обслуживание специалистам. 
                Неправильное обслуживание может привести к поломке и опасным ситуациям на дороге.
              </p>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="maintenance" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="maintenance">Техобслуживание</TabsTrigger>
            <TabsTrigger value="documents">Документы</TabsTrigger>
            <TabsTrigger value="insurance">Страхование</TabsTrigger>
          </TabsList>
          
          <TabsContent value="maintenance">
            <div className="space-y-6">
              <MaintenanceItem 
                title="Замена масла и фильтра"
                period="Каждые 3000-5000 км или раз в сезон"
                difficulty="Лёгкий"
                tools={["Ключ для масляного фильтра", "Динамометрический ключ", "Емкость для слива масла", "Воронка"]}
                steps={[
                  "Разогрейте двигатель до рабочей температуры",
                  "Открутите сливную пробку и слейте масло в подготовленную емкость",
                  "Открутите и замените масляный фильтр",
                  "Закрутите сливную пробку с новой прокладкой",
                  "Залейте новое масло рекомендованной марки и вязкости",
                  "Запустите двигатель и проверьте отсутствие утечек"
                ]}
                description="Регулярная замена масла - один из самых важных аспектов обслуживания мотоцикла. Правильно подобранное масло и своевременная замена значительно продлевают срок службы двигателя."
              />
              
              <MaintenanceItem 
                title="Проверка и регулировка цепи"
                period="Каждые 500-1000 км"
                difficulty="Средний"
                tools={["Измерительная линейка", "Набор ключей", "Смазка для цепи"]}
                steps={[
                  "Установите мотоцикл на центральную подставку или подъемник",
                  "Проверьте провисание цепи в средней точке между звездами",
                  "Норма провисания обычно составляет 25-35 мм (проверьте в мануале)",
                  "При необходимости отрегулируйте натяжение цепи",
                  "Проверьте состояние звеньев цепи и звезд на износ",
                  "Очистите и смажьте цепь специальной смазкой"
                ]}
                description="Правильное натяжение цепи критически важно для безопасности и эффективности работы трансмиссии. Слабая цепь может соскочить, а перетянутая - быстро износится и повредит звезды."
              />
              
              <MaintenanceItem 
                title="Проверка тормозной системы"
                period="Перед каждой поездкой; тормозная жидкость - раз в 2 года"
                difficulty="Средний"
                tools={["Динамометрический ключ", "Тормозная жидкость DOT4", "Шприц или вакуумный насос для прокачки"]}
                steps={[
                  "Проверьте уровень тормозной жидкости в бачках",
                  "Осмотрите тормозные шланги на наличие трещин или повреждений",
                  "Проверьте толщину тормозных колодок (мин. 1.5 мм материала)",
                  "Оцените состояние тормозных дисков",
                  "При необходимости замените колодки или прокачайте систему",
                  "Помните: новые колодки требуют обкатки (200-300 км)"
                ]}
                description="Тормозная система - важнейший элемент безопасности. Регулярно проверяйте состояние всех компонентов и не экономьте на качестве запчастей."
              />
            </div>
          </TabsContent>
          
          <TabsContent value="documents">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <FileText className="h-5 w-5 text-blue-400" />
                    Регистрация мототехники
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">
                    Все мотоциклы с объемом двигателя более 50 куб. см подлежат обязательной регистрации в ГИБДД. 
                    Срок регистрации - 10 дней с момента приобретения.
                  </p>
                  
                  <div className="space-y-2">
                    <h3 className="text-white font-medium">Необходимые документы:</h3>
                    <ul className="text-gray-300 space-y-1">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Паспорт гражданина РФ
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        ПТС (паспорт транспортного средства)
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Договор купли-продажи или иной документ, подтверждающий право собственности
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Полис ОСАГО
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Квитанция об оплате госпошлины
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-white font-medium">Госпошлины (2025 г.):</h3>
                    <ul className="text-gray-300 space-y-1">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Регистрация ТС с выдачей СТС и ГРЗ: 2850 руб.
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Внесение изменений в ПТС: 350 руб.
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <FileText className="h-5 w-5 text-blue-400" />
                    Водительское удостоверение
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">
                    Для управления мотоциклом требуется водительское удостоверение категории "A". 
                    Для управления скутерами и мопедами объемом до 50 куб. см необходима категория "M".
                  </p>
                  
                  <div className="space-y-2">
                    <h3 className="text-white font-medium">Процесс получения прав:</h3>
                    <ul className="text-gray-300 space-y-1">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">1.</span>
                        Обучение в автошколе (теория и практика)
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">2.</span>
                        Медицинское освидетельствование
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">3.</span>
                        Сдача теоретического экзамена в ГИБДД
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">4.</span>
                        Сдача практического экзамена на площадке
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">5.</span>
                        Сдача практического экзамена в городе
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-4">
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                      <h3 className="text-blue-400 font-medium mb-1">Важно:</h3>
                      <p className="text-gray-300 text-sm">
                        Срок действия водительского удостоверения - 10 лет. 
                        Управление мотоциклом без прав соответствующей категории влечет штраф 
                        от 5 000 до 15 000 рублей.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Clock className="h-5 w-5 text-blue-400" />
                    Технический осмотр
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">
                    По действующему законодательству, для мотоциклов требуется регулярное прохождение технического осмотра.
                  </p>
                  
                  <div className="space-y-2">
                    <h3 className="text-white font-medium">Периодичность ТО:</h3>
                    <ul className="text-gray-300 space-y-1">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Новые мотоциклы: через 4 года после выпуска
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Мотоциклы возрастом от 4 до 10 лет: каждые 2 года
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Мотоциклы старше 10 лет: ежегодно
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-white font-medium">Проверяется на ТО:</h3>
                    <ul className="text-gray-300 space-y-1">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Тормозная система
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Рулевое управление
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Внешние световые приборы
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Шины и колеса
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Двигатель (уровень шума, выбросы)
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Wrench className="h-5 w-5 text-blue-400" />
                    Сервисная книжка
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">
                    Сервисная книжка - важный документ, фиксирующий историю обслуживания мотоцикла. Регулярное заполнение 
                    поможет сохранить гарантию и увеличит стоимость при перепродаже.
                  </p>
                  
                  <div className="space-y-2">
                    <h3 className="text-white font-medium">Что фиксируется:</h3>
                    <ul className="text-gray-300 space-y-1">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Даты и пробег при техобслуживании
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Выполненные работы и замененные детали
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Гарантийные ремонты
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Отметки о прохождении ТО
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-4">
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                      <h3 className="text-blue-400 font-medium mb-1">Совет:</h3>
                      <p className="text-gray-300 text-sm">
                        Даже если у вас нет оригинальной сервисной книжки, заведите журнал 
                        самостоятельно. Записывайте все работы, замены масла и запчастей с указанием 
                        дат и пробега. Сохраняйте чеки и акты выполненных работ.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="insurance">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <CreditCard className="h-5 w-5 text-blue-400" />
                    ОСАГО для мотоциклов
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">
                    ОСАГО (Обязательное страхование автогражданской ответственности) - 
                    обязательный вид страхования для всех мотоциклов, выезжающих на дороги общего пользования.
                  </p>
                  
                  <div className="space-y-2">
                    <h3 className="text-white font-medium">Особенности ОСАГО для мотоциклов:</h3>
                    <ul className="text-gray-300 space-y-1">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Страховой полис имеет сезонный характер (можно оформить на период с апреля по октябрь)
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Стоимость полиса зависит от мощности мотоцикла, региона регистрации, стажа водителя
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Средняя стоимость полиса в Тюмени: 3000-7000 рублей
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-4">
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                      <h3 className="text-blue-400 font-medium mb-1">Что покрывает ОСАГО:</h3>
                      <p className="text-gray-300 text-sm">
                        ОСАГО компенсирует ущерб, причиненный жизни, здоровью или имуществу третьих лиц. 
                        Не покрывает ущерб вашему мотоциклу и вашему здоровью.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <CreditCard className="h-5 w-5 text-blue-400" />
                    КАСКО для мотоциклов
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">
                    КАСКО - добровольный вид страхования, который защищает ваш мотоцикл от различных рисков, 
                    независимо от того, кто виновник происшествия.
                  </p>
                  
                  <div className="space-y-2">
                    <h3 className="text-white font-medium">Что покрывает КАСКО:</h3>
                    <ul className="text-gray-300 space-y-1">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Ущерб при ДТП (независимо от вины)
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Кража, угон мотоцикла
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Повреждения от пожара, стихийных бедствий
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Противоправные действия третьих лиц
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-4">
                    <div className="bg-amber-600/20 border border-amber-500/30 rounded-lg p-3">
                      <h3 className="text-amber-400 font-medium mb-1">Важно знать:</h3>
                      <p className="text-gray-300 text-sm">
                        КАСКО для мотоциклов стоит дороже, чем для автомобилей, из-за более высоких рисков повреждения.
                        Многие страховые компании предлагают сезонное КАСКО, что позволяет сэкономить в зимний период.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <AlertTriangle className="h-5 w-5 text-blue-400" />
                    Что делать при ДТП
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">
                    Мотоциклисты более уязвимы при ДТП, поэтому важно знать последовательность действий в такой ситуации.
                  </p>
                  
                  <div className="space-y-2">
                    <h3 className="text-white font-medium">Порядок действий:</h3>
                    <ol className="text-gray-300 space-y-1">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">1.</span>
                        Остановитесь и выключите двигатель
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">2.</span>
                        Включите аварийную сигнализацию и выставьте знак аварийной остановки
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">3.</span>
                        Если есть пострадавшие, вызовите скорую помощь (103 или 112)
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">4.</span>
                        Вызовите ГИБДД (102 или 112)
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">5.</span>
                        Запишите данные свидетелей, сделайте фото и видео места ДТП с разных ракурсов
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">6.</span>
                        Заполните извещение о ДТП (Европротокол) по возможности
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">7.</span>
                        Сообщите о случившемся в страховую компанию
                      </li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <CreditCard className="h-5 w-5 text-blue-400" />
                    Страхование от несчастных случаев
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">
                    Дополнительный вид страхования, который покрывает ущерб здоровью мотоциклиста при несчастном случае или ДТП.
                  </p>
                  
                  <div className="space-y-2">
                    <h3 className="text-white font-medium">Что покрывает:</h3>
                    <ul className="text-gray-300 space-y-1">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Травмы, полученные в результате ДТП
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Временная или постоянная утрата трудоспособности
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Расходы на медицинское обслуживание и реабилитацию
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-4">
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                      <h3 className="text-blue-400 font-medium mb-1">Рекомендация:</h3>
                      <p className="text-gray-300 text-sm">
                        Учитывая высокий риск получения травм при езде на мотоцикле, 
                        страхование от несчастных случаев является разумным дополнением 
                        к обязательному ОСАГО. Стоимость полиса относительно невысока (от 3000 до 10000 рублей в год), 
                        но покрытие может значительно помочь в случае серьезного ДТП.
                      </p>
                    </div>
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

interface MaintenanceItemProps {
  title: string;
  period: string;
  difficulty: string;
  tools: string[];
  steps: string[];
  description: string;
}

const MaintenanceItem: React.FC<MaintenanceItemProps> = ({ title, period, difficulty, tools, steps, description }) => {
  return (
    <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Wrench className="h-5 w-5 text-blue-400" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-gray-400">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-blue-400" />
            <span>Периодичность: {period}</span>
          </div>
          <div className="flex items-center">
            <Wrench className="h-4 w-4 mr-1 text-blue-400" />
            <span>Сложность: {difficulty}</span>
          </div>
        </div>
        
        <p className="text-gray-300">{description}</p>
        
        <div>
          <h3 className="text-white font-medium mb-2">Необходимые инструменты:</h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                {tool}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-medium mb-2">Процедура:</h3>
          <ol className="space-y-1">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start text-gray-300">
                <span className="text-blue-400 mr-2">{index + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </CardContent>
    </Card>
  );
};

export default TechnicalInfo;
