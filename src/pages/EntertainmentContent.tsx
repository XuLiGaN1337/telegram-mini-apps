import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Play, Film, Book, Music, Youtube } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const EntertainmentContent = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          Развлекательный контент
        </h1>
        
        <p className="text-center text-gray-400 mb-8">
          Фильмы, книги, музыка и другие материалы для мотолюбителей
        </p>
        
        <Tabs defaultValue="movies" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="movies">Фильмы</TabsTrigger>
            <TabsTrigger value="books">Книги</TabsTrigger>
            <TabsTrigger value="music">Музыка</TabsTrigger>
            <TabsTrigger value="videos">YouTube</TabsTrigger>
          </TabsList>
          
          <TabsContent value="movies">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MovieCard 
                title="На дороге"
                originalTitle="On the Road"
                year="2012"
                director="Уолтер Саллес"
                description="Экранизация культового романа Джека Керуака о поколении битников и их путешествиях по Америке."
                image="https://images.unsplash.com/photo-1566133055117-e66794afbad3?q=80&w=600"
                tags={["Драма", "Приключения"]}
              />
              
              <MovieCard 
                title="Дикари"
                originalTitle="The Wild One"
                year="1953"
                director="Ласло Бенедек"
                description="Классический фильм с Марлоном Брандо в роли лидера мотоциклетной банды. Один из первых фильмов, сформировавших образ байкера в массовой культуре."
                image="https://images.unsplash.com/photo-1525160354320-d8e92641c563?q=80&w=600"
                tags={["Драма", "Криминал"]}
              />
              
              <MovieCard 
                title="Беспечный ездок"
                originalTitle="Easy Rider"
                year="1969"
                director="Деннис Хоппер"
                description="Культовый фильм о двух байкерах, путешествующих по Америке. Символ свободы, контркультуры и дорожных приключений."
                image="https://images.unsplash.com/photo-1517686530628-ebedb0de91ac?q=80&w=600"
                tags={["Драма", "Приключения"]}
              />
              
              <MovieCard 
                title="Мотоциклистки"
                originalTitle="Motorcycle Diaries"
                year="2004"
                director="Уолтер Саллес"
                description="История путешествия молодого Че Гевары и его друга Альберто Гранадо по Южной Америке на мотоцикле Norton 500."
                image="https://images.unsplash.com/photo-1502613374390-8da7aa532177?q=80&w=600"
                tags={["Биография", "Драма", "Приключения"]}
              />
              
              <MovieCard 
                title="Мир скорости"
                originalTitle="The World's Fastest Indian"
                year="2005"
                director="Роджер Дональдсон"
                description="Основанная на реальных событиях история Берта Монро, новозеландца, установившего мировой рекорд скорости на своем модифицированном мотоцикле Indian Scout 1920 года."
                image="https://images.unsplash.com/photo-1623612827673-ae6c6be4535b?q=80&w=600"
                tags={["Биография", "Драма", "Спорт"]}
              />
              
              <MovieCard 
                title="Безумный Макс: Дорога ярости"
                originalTitle="Mad Max: Fury Road"
                year="2015"
                director="Джордж Миллер"
                description="Постапокалиптический экшн с большим количеством модифицированных транспортных средств, включая мотоциклы."
                image="https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?q=80&w=600"
                tags={["Боевик", "Приключения", "Фантастика"]}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="books">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BookCard 
                title="Дзен и искусство ухода за мотоциклом"
                author="Роберт Пирсиг"
                year="1974"
                description="Философский роман о путешествии отца и сына через США на мотоцикле, объединяющий автобиографию, философию и размышления о технике."
                image="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600"
              />
              
              <BookCard 
                title="Гонщик"
                author="Тим Крабб"
                year="1978"
                description="Короткий, но мощный роман о велосипедных гонках, который стал культовым среди любителей двухколесного транспорта."
                image="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=600"
              />
              
              <BookCard 
                title="На дороге"
                author="Джек Керуак"
                year="1957"
                description="Легендарный роман поколения битников о путешествиях по Америке, свободе и поиске себя."
                image="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600"
              />
              
              <BookCard 
                title="Ангелы ада"
                author="Хантер С. Томпсон"
                year="1966"
                description="Журналистское расследование о знаменитом мотоклубе, которое Томпсон провел, живя среди байкеров в течение года."
                image="https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=600"
              />
              
              <BookCard 
                title="Мотоцикл Че Гевары"
                author="Альберто Гранадо"
                year="1978"
                description="Мемуары о легендарном путешествии по Южной Америке, которое молодой Эрнесто Гевара и его друг Альберто Гранадо совершили на стареньком мотоцикле."
                image="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=600"
              />
              
              <BookCard 
                title="Длинный путь вниз"
                author="Юэн Макгрегор, Чарли Борман"
                year="2004"
                description="Книга о путешествии на мотоциклах BMW из Лондона в Нью-Йорк через Европу, Азию и Северную Америку."
                image="https://images.unsplash.com/photo-1456081101716-74e616ab23d8?q=80&w=600"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="music">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-white mb-4">Классические мото-треки</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                    <CardContent className="p-4 flex items-center">
                      <div className="h-16 w-16 bg-gray-800 rounded-md mr-4 flex items-center justify-center flex-shrink-0">
                        <Music className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Born to Be Wild</h3>
                        <p className="text-gray-400 text-sm">Steppenwolf</p>
                        <p className="text-gray-500 text-xs mt-1">Альбом: Steppenwolf (1968)</p>
                      </div>
                      <button className="ml-auto bg-blue-500 hover:bg-blue-600 transition-colors p-2 rounded-full">
                        <Play className="h-5 w-5 text-white" />
                      </button>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                    <CardContent className="p-4 flex items-center">
                      <div className="h-16 w-16 bg-gray-800 rounded-md mr-4 flex items-center justify-center flex-shrink-0">
                        <Music className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Motorcycle Emptiness</h3>
                        <p className="text-gray-400 text-sm">Manic Street Preachers</p>
                        <p className="text-gray-500 text-xs mt-1">Альбом: Generation Terrorists (1992)</p>
                      </div>
                      <button className="ml-auto bg-blue-500 hover:bg-blue-600 transition-colors p-2 rounded-full">
                        <Play className="h-5 w-5 text-white" />
                      </button>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                    <CardContent className="p-4 flex items-center">
                      <div className="h-16 w-16 bg-gray-800 rounded-md mr-4 flex items-center justify-center flex-shrink-0">
                        <Music className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Highway to Hell</h3>
                        <p className="text-gray-400 text-sm">AC/DC</p>
                        <p className="text-gray-500 text-xs mt-1">Альбом: Highway to Hell (1979)</p>
                      </div>
                      <button className="ml-auto bg-blue-500 hover:bg-blue-600 transition-colors p-2 rounded-full">
                        <Play className="h-5 w-5 text-white" />
                      </button>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                    <CardContent className="p-4 flex items-center">
                      <div className="h-16 w-16 bg-gray-800 rounded-md mr-4 flex items-center justify-center flex-shrink-0">
                        <Music className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Rider on the Storm</h3>
                        <p className="text-gray-400 text-sm">The Doors</p>
                        <p className="text-gray-500 text-xs mt-1">Альбом: L.A. Woman (1971)</p>
                      </div>
                      <button className="ml-auto bg-blue-500 hover:bg-blue-600 transition-colors p-2 rounded-full">
                        <Play className="h-5 w-5 text-white" />
                      </button>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-white mb-4">Современные мото-треки</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                    <CardContent className="p-4 flex items-center">
                      <div className="h-16 w-16 bg-gray-800 rounded-md mr-4 flex items-center justify-center flex-shrink-0">
                        <Music className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Kings of the Road</h3>
                        <p className="text-gray-400 text-sm">Fu Manchu</p>
                        <p className="text-gray-500 text-xs mt-1">Альбом: King of the Road (2000)</p>
                      </div>
                      <button className="ml-auto bg-blue-500 hover:bg-blue-600 transition-colors p-2 rounded-full">
                        <Play className="h-5 w-5 text-white" />
                      </button>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                    <CardContent className="p-4 flex items-center">
                      <div className="h-16 w-16 bg-gray-800 rounded-md mr-4 flex items-center justify-center flex-shrink-0">
                        <Music className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Ride</h3>
                        <p className="text-gray-400 text-sm">Twenty One Pilots</p>
                        <p className="text-gray-500 text-xs mt-1">Альбом: Blurryface (2015)</p>
                      </div>
                      <button className="ml-auto bg-blue-500 hover:bg-blue-600 transition-colors p-2 rounded-full">
                        <Play className="h-5 w-5 text-white" />
                      </button>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                    <CardContent className="p-4 flex items-center">
                      <div className="h-16 w-16 bg-gray-800 rounded-md mr-4 flex items-center justify-center flex-shrink-0">
                        <Music className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Motorcycle Drive By</h3>
                        <p className="text-gray-400 text-sm">Third Eye Blind</p>
                        <p className="text-gray-500 text-xs mt-1">Альбом: Third Eye Blind (1997)</p>
                      </div>
                      <button className="ml-auto bg-blue-500 hover:bg-blue-600 transition-colors p-2 rounded-full">
                        <Play className="h-5 w-5 text-white" />
                      </button>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                    <CardContent className="p-4 flex items-center">
                      <div className="h-16 w-16 bg-gray-800 rounded-md mr-4 flex items-center justify-center flex-shrink-0">
                        <Music className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Motorcycle</h3>
                        <p className="text-gray-400 text-sm">Colter Wall</p>
                        <p className="text-gray-500 text-xs mt-1">Альбом: Songs of the Plains (2018)</p>
                      </div>
                      <button className="ml-auto bg-blue-500 hover:bg-blue-600 transition-colors p-2 rounded-full">
                        <Play className="h-5 w-5 text-white" />
                      </button>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="bg-amber-600/20 border border-amber-500/30 rounded-lg p-4">
                <div className="flex">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    Все представленные музыкальные композиции служат только для ознакомления.
                    Для прослушивания рекомендуем использовать легальные музыкальные сервисы.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="videos">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-white mb-4">Популярные мото-каналы</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <YoutubeChannelCard 
                    title="МотоНовости"
                    subscribers="265K"
                    description="Новости мотоиндустрии, тест-драйвы новинок и обзоры популярных моделей"
                  />
                  
                  <YoutubeChannelCard 
                    title="МотоПутешественник"
                    subscribers="128K"
                    description="Мотопутешествия по России и странам СНГ, советы начинающим мототуристам"
                  />
                  
                  <YoutubeChannelCard 
                    title="Garage73"
                    subscribers="320K"
                    description="Ремонт и обслуживание мотоциклов своими руками, полезные советы"
                  />
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-white mb-4">Рекомендуемые видео</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <YoutubeVideoCard 
                    title="Как выбрать первый мотоцикл - полное руководство"
                    channel="МотоНовости"
                    views="125K"
                    date="2 месяца назад"
                    duration="18:24"
                    image="https://images.unsplash.com/photo-1558979158-65a1eaa08691?q=80&w=600"
                  />
                  
                  <YoutubeVideoCard 
                    title="10 ошибок новичков на мотоцикле"
                    channel="MotoVlogger"
                    views="489K"
                    date="5 месяцев назад"
                    duration="12:47"
                    image="https://images.unsplash.com/photo-1599912027611-484b9fc447af?q=80&w=600"
                  />
                  
                  <YoutubeVideoCard 
                    title="Путешествие на Байкал на мотоцикле - часть 1"
                    channel="МотоПутешественник"
                    views="98K"
                    date="1 год назад"
                    duration="24:31"
                    image="https://images.unsplash.com/photo-1564019472231-4586c552dc27?q=80&w=600"
                  />
                  
                  <YoutubeVideoCard 
                    title="Правильное обслуживание мотоцикла перед сезоном"
                    channel="Garage73"
                    views="203K"
                    date="1 месяц назад"
                    duration="27:12"
                    image="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=600"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

interface MovieCardProps {
  title: string;
  originalTitle: string;
  year: string;
  director: string;
  description: string;
  image: string;
  tags: string[];
}

const MovieCard = ({ title, originalTitle, year, director, description, image, tags }: MovieCardProps) => {
  return (
    <Card className="border-primary/20 bg-black/60 backdrop-blur-sm overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 h-48 md:h-auto">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-2/3 p-5">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-sm text-gray-400">{originalTitle}, {year}</p>
          <p className="text-sm text-gray-400 mb-2">Режиссер: {director}</p>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <Badge key={index} className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">
                {tag}
              </Badge>
            ))}
          </div>
          
          <p className="text-gray-300 text-sm line-clamp-3">{description}</p>
          
          <div className="mt-3 flex justify-end">
            <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              <Film className="h-4 w-4 mr-1" />
              <span className="text-sm">Смотреть трейлер</span>
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

interface BookCardProps {
  title: string;
  author: string;
  year: string;
  description: string;
  image: string;
}

const BookCard = ({ title, author, year, description, image }: BookCardProps) => {
  return (
    <Card className="border-primary/20 bg-black/60 backdrop-blur-sm overflow-hidden flex flex-col">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-400 mb-2">{author}, {year}</p>
        <p className="text-gray-300 text-sm line-clamp-4">{description}</p>
      </CardContent>
      <div className="p-4 pt-0 mt-auto">
        <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
          <Book className="h-4 w-4 mr-1" />
          <span className="text-sm">Подробнее</span>
        </button>
      </div>
    </Card>
  );
};

interface YoutubeChannelCardProps {
  title: string;
  subscribers: string;
  description: string;
}

const YoutubeChannelCard = ({ title, subscribers, description }: YoutubeChannelCardProps) => {
  return (
    <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
      <CardContent className="p-5">
        <div className="flex items-start">
          <div className="bg-red-600 rounded-full p-2 mr-3 flex-shrink-0">
            <Youtube className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-medium">{title}</h3>
            <p className="text-gray-400 text-xs">{subscribers} подписчиков</p>
            <p className="text-gray-300 text-sm mt-2">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface YoutubeVideoCardProps {
  title: string;
  channel: string;
  views: string;
  date: string;
  duration: string;
  image: string;
}

const YoutubeVideoCard = ({ title, channel, views, date, duration, image }: YoutubeVideoCardProps) => {
  return (
    <Card className="border-primary/20 bg-black/60 backdrop-blur-sm overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-44 object-cover" />
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
          {duration}
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/60 transition-opacity">
          <div className="bg-red-600 rounded-full p-3">
            <Play className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-white font-medium line-clamp-2">{title}</h3>
        <p className="text-blue-400 text-sm mt-1">{channel}</p>
        <p className="text-gray-400 text-xs mt-1">{views} просмотров • {date}</p>
      </CardContent>
    </Card>
  );
};

export default EntertainmentContent;
