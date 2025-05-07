
import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: number;
  name: string;
  tagline: string;
  description: string;
  votes: number;
  category: string;
  image: string;
  maker: {
    name: string;
    avatar: string;
  };
  tags: string[];
}

const ProductHunt = () => {
  const [products, setProducts] = React.useState<Product[]>([
    {
      id: 1,
      name: "Поехали!",
      tagline: "Платформа для создания и запуска веб-приложений",
      description: "Быстрая разработка SPA-приложений с помощью ИИ.",
      votes: 253,
      category: "Разработка",
      image: "https://source.unsplash.com/random/100x100?app",
      maker: {
        name: "Юра",
        avatar: "https://source.unsplash.com/random/40x40?person",
      },
      tags: ["AI", "WebDev", "Tool"],
    },
    {
      id: 2,
      name: "FigmaTailwind",
      tagline: "Преобразуйте дизайн Figma в Tailwind CSS за секунды",
      description: "Плагин для мгновенного экспорта Figma в Tailwind CSS код.",
      votes: 187,
      category: "Дизайн",
      image: "https://source.unsplash.com/random/100x100?design",
      maker: {
        name: "Алексей Рузаев",
        avatar: "https://source.unsplash.com/random/40x40?man",
      },
      tags: ["Figma", "CSS", "Plugin"],
    },
    {
      id: 3,
      name: "TaskMaster AI",
      tagline: "Ваш персональный AI ассистент для управления проектами",
      description: "Автоматизирует рутинные задачи и помогает планировать работу.",
      votes: 142,
      category: "Продуктивность",
      image: "https://source.unsplash.com/random/100x100?productivity",
      maker: {
        name: "Мария Соколова",
        avatar: "https://source.unsplash.com/random/40x40?woman",
      },
      tags: ["AI", "Productivity", "Management"],
    },
    {
      id: 4,
      name: "CryptoTrackr",
      tagline: "Отслеживайте и анализируйте криптовалютные инвестиции",
      description: "Подробная аналитика и уведомления о движениях на рынке.",
      votes: 98,
      category: "Финансы",
      image: "https://source.unsplash.com/random/100x100?crypto",
      maker: {
        name: "Николай Петров",
        avatar: "https://source.unsplash.com/random/40x40?developer",
      },
      tags: ["Crypto", "Finance", "Analytics"],
    },
    {
      id: 5,
      name: "EcoShop",
      tagline: "Маркетплейс экологичных товаров с нулевым следом",
      description: "Найдите проверенные товары, которые не вредят планете.",
      votes: 76,
      category: "E-commerce",
      image: "https://source.unsplash.com/random/100x100?eco",
      maker: {
        name: "Ольга Зеленина",
        avatar: "https://source.unsplash.com/random/40x40?woman2",
      },
      tags: ["Eco", "Shopping", "Sustainable"],
    },
  ]);

  const handleVote = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, votes: product.votes + 1 }
          : product
      )
    );
  };

  const today = new Date().toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const categories = [
    "Все", "Разработка", "Дизайн", "Продуктивность", 
    "Финансы", "E-commerce", "AI", "Мобильные"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Навигация */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1 rounded">
                <Icon name="Rocket" className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold">ProductRussia</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-600 hover:text-gray-900">Главная</Link>
              <Link to="/discussions" className="text-gray-600 hover:text-gray-900">Обсуждения</Link>
              <Link to="/upcoming" className="text-gray-600 hover:text-gray-900">Скоро</Link>
              <Link to="/jobs" className="text-gray-600 hover:text-gray-900">Вакансии</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative mr-2 hidden md:block">
              <input
                type="text"
                placeholder="Поиск..."
                className="py-2 pl-10 pr-4 w-64 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Icon
                name="Search"
                className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
            <Button variant="outline" size="sm" className="hidden md:flex">
              Войти
            </Button>
            <Button size="sm">
              <Icon name="Plus" className="mr-2 h-4 w-4" />
              Добавить продукт
            </Button>
          </div>
        </div>
      </header>

      {/* Основное содержимое */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Левая колонка */}
          <div className="md:w-3/4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Сегодня · {today}</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Icon name="Calendar" className="mr-2 h-4 w-4" />
                  Популярное
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="Filter" className="mr-2 h-4 w-4" />
                  Фильтры
                </Button>
              </div>
            </div>
            
            {/* Категории */}
            <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Badge 
                  key={category} 
                  variant={category === "Все" ? "default" : "outline"}
                  className="px-3 py-1 cursor-pointer"
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Список продуктов */}
            <div className="space-y-4">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex p-4 gap-4">
                      <div className="flex flex-col items-center gap-1 min-w-16">
                        <button
                          onClick={() => handleVote(product.id)}
                          className="flex flex-col items-center justify-center w-12 h-12 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-md transition-colors"
                        >
                          <Icon name="ChevronUp" className="h-5 w-5 text-gray-600" />
                          <span className="text-sm font-medium">{product.votes}</span>
                        </button>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-md border border-gray-200"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg truncate pr-2">
                            {product.name}
                          </h3>
                          <Badge variant="outline" className="text-xs">
                            {product.category}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-2">{product.tagline}</p>
                        <div className="flex flex-wrap gap-2">
                          {product.tags.map((tag) => (
                            <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-100 bg-gray-50 px-4 py-2 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={product.maker.avatar} />
                          <AvatarFallback>{product.maker.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-gray-600">{product.maker.name}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <button className="text-gray-500 hover:text-gray-700 flex items-center gap-1 text-sm">
                          <Icon name="MessageSquare" className="h-4 w-4" />
                          <span>Комментарии</span>
                        </button>
                        <button className="text-gray-500 hover:text-gray-700 flex items-center gap-1 text-sm">
                          <Icon name="Share2" className="h-4 w-4" />
                          <span>Поделиться</span>
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Button variant="outline" className="w-full mt-6">
              Загрузить больше
            </Button>
          </div>
          
          {/* Правая колонка */}
          <div className="md:w-1/4 space-y-6">
            <Card>
              <CardContent className="p-5">
                <h3 className="font-semibold mb-4">Запустите свой продукт</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Представьте свой проект сообществу и получите первых пользователей и ценные отзывы.
                </p>
                <Button className="w-full">
                  <Icon name="Plus" className="mr-2 h-4 w-4" />
                  Добавить продукт
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-5">
                <h3 className="font-semibold mb-4">Популярные разделы</h3>
                <div className="space-y-2">
                  {categories.filter(c => c !== "Все").slice(0, 5).map((category) => (
                    <div key={category} className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">{category}</span>
                      <Badge variant="secondary" className="text-xs">
                        {Math.floor(Math.random() * 100) + 10}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-5">
                <h3 className="font-semibold mb-4">Подписаться на обновления</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Получайте лучшие продукты каждый день на вашу почту
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Ваш email"
                    className="flex-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <Button size="sm">
                    <Icon name="Send" className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      {/* Подвал */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-primary p-1 rounded">
                  <Icon name="Rocket" className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-lg font-bold">ProductRussia</h2>
              </div>
              <p className="text-sm text-gray-600 max-w-xs">
                Платформа для открытия и продвижения интересных продуктов и стартапов.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium mb-3">Платформа</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-sm text-gray-600 hover:text-gray-900">О нас</Link></li>
                  <li><Link to="/" className="text-sm text-gray-600 hover:text-gray-900">Блог</Link></li>
                  <li><Link to="/" className="text-sm text-gray-600 hover:text-gray-900">API</Link></li>
                  <li><Link to="/" className="text-sm text-gray-600 hover:text-gray-900">Контакты</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Сообщество</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-sm text-gray-600 hover:text-gray-900">Обсуждения</Link></li>
                  <li><Link to="/" className="text-sm text-gray-600 hover:text-gray-900">FAQ</Link></li>
                  <li><Link to="/" className="text-sm text-gray-600 hover:text-gray-900">Правила</Link></li>
                  <li><Link to="/" className="text-sm text-gray-600 hover:text-gray-900">Мероприятия</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Соцсети</h3>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Icon name="Twitter" className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Icon name="Instagram" className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Icon name="Linkedin" className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-sm text-gray-500">
              © 2025 ProductRussia. Все права защищены.
            </p>
            <div className="flex gap-6">
              <Link to="/" className="text-sm text-gray-500 hover:text-gray-700">Условия использования</Link>
              <Link to="/" className="text-sm text-gray-500 hover:text-gray-700">Политика конфиденциальности</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductHunt;
