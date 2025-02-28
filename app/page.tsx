"use client"

import { useState, useEffect } from "react"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ErrorBoundary } from "react-error-boundary"
import {
  ArrowRight,
  ChevronRight,
  Search,
  ShoppingBag,
  User,
  Menu,
  X,
  Heart,
  Star,
  MessageCircle,
  Instagram,
  Twitter,
  Facebook,
  ChevronDown,
  Clock,
  Truck,
  RefreshCw,
  ArrowUp,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ProductCard } from "@/components/ProductCard"
import { type CarouselApi } from "@/components/ui/carousel"

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-2xl font-bold">Опа! Нещо се обърка.</h1>
        <p className="mb-4 text-muted-foreground">{error.message}</p>
        <Button onClick={resetErrorBoundary}>Опитай отново</Button>
      </div>
    </div>
  )
}

const trendingProducts = [
  {
    id: "1",
    name: "Минималистична Черна Рокля",
    price: 156.99,
    image: "/blackdress.jpg",
    category: "women",
  },
  {
    id: "2",
    name: "Класическа Бяла Риза",
    price: 98.99,
    image: "/whiteshirt.jpg",
    category: "men",
  },
  {
    id: "3",
    name: "Кожена Чанта за Рамо",
    price: 254.99,
    image: "/leatherbag.jpg",
    category: "accessories",
  },
  {
    id: "4",
    name: "Ленен Панталон на Райета",
    price: 136.99,
    image: "/rayetpants.jpg",
    category: "women",
  },
  {
    id: "5",
    name: "Слим Фит Дънки",
    price: 117.99,
    image: "/slimfitpants.jpg",
    category: "men",
  },
  {
    id: "6",
    name: "Сребърни Обеци Халки",
    price: 78.99,
    image: "/sliverearings.jpg",
    category: "accessories",
  },
]

const categories = [
  {
    name: "Рокли",
    href: "/dresses",
    image: "/dress.jpg",
  },
  {
    name: "Блузи",
    href: "/tops",
    image: "/tops.jpg",
  },
  {
    name: "Панталони",
    href: "/bottoms",
    image: "/bottoms.jpg",
  },
  {
    name: "Аксесоари",
    href: "/accessories",
    image: "/accessories.jpg",
  },
]

const testimonials = [
  {
    name: "Мария Иванова",
    location: "София",
    text: "Обожавам минималистичните дизайни и висококачествените материи. Rift Fashion е моят избор за модерна мода.",
    avatar: "/maria.jpg",
  },
  {
    name: "Георги Димитров",
    location: "Пловдив",
    text: "Дрехите са удобни и стилни. Винаги получавам комплименти, когато нося Rift Fashion.",
    avatar: "/georgi.jpg",
  },
  {
    name: "Петя Петрова",
    location: "Варна",
    text: "Страхотно обслужване и бърза доставка. Много съм доволна от покупката си.",
    avatar: "/petq.jpg",
  },
]

const instagramPosts = [
  { image: "/placeholder.svg?height=300&width=300" },
  { image: "/placeholder.svg?height=300&width=300" },
  { image: "/placeholder.svg?height=300&width=300" },
  { image: "/placeholder.svg?height=300&width=300" },
  { image: "/placeholder.svg?height=300&width=300" },
  { image: "/placeholder.svg?height=300&width=300" },
]

const brands = [{}, {}, {}, {}, {}, {}]

export default function HomePage() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HomePageContent />
    </ErrorBoundary>
  )
}

function HomePageContent() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [cartCount, setCartCount] = useState(3)
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [api, setApi] = useState<CarouselApi>()

  // Auto-rotate carousel
  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 3000)

    return () => clearInterval(interval)
  }, [api])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setProducts(trendingProducts)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Rift Fashion - Модерна Мода за Съвременния Начин на Живот</title>
        <meta
          name="description"
          content="Открийте колекцията на Rift Fashion от минималистични дизайни, създадени за модерния индивид. Пазарувайте най-новите тенденции в дамската и мъжката мода."
        />
        <link rel="canonical" href="https://www.riftfashion.com" />
        <meta property="og:title" content="Rift Fashion - Модерна Мода за Съвременния Начин на Живот" />
        <meta
          property="og:description"
          content="Открийте колекцията на Rift Fashion от минималистични дизайни, създадени за модерния индивид. Пазарувайте най-новите тенденции в дамската и мъжката мода."
        />
        <meta property="og:image" content="https://www.riftfashion.com/og-image.jpg" />
        <meta property="og:url" content="https://www.riftfashion.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 py-2 text-center text-white">
        <p className="text-sm font-medium">
          Безплатна доставка над 180 лв • Ограничена оферта: 20% отстъпка с код RIFT20
        </p>
      </div>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px]">
              <div className="flex h-full flex-col">
                <div className="flex items-center border-b py-4 px-4">
                  <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold tracking-tighter">Rift Fashion</span>
                  </Link>
                </div>
                <nav className="flex-1 space-y-2 overflow-auto py-6">
                  <Link href="#" className="group flex items-center py-3 text-base font-medium hover:bg-gray-100 px-4 rounded-lg transition-colors">
                    Нови Предложения
                  </Link>
                  <Link href="#" className="group flex items-center py-3 text-base font-medium hover:bg-gray-100 px-4 rounded-lg transition-colors">
                    Жени
                  </Link>
                  <Link href="#" className="group flex items-center py-3 text-base font-medium hover:bg-gray-100 px-4 rounded-lg transition-colors">
                    Мъже
                  </Link>
                  <Link href="#" className="group flex items-center py-3 text-base font-medium hover:bg-gray-100 px-4 rounded-lg transition-colors">
                    Аксесоари
                  </Link>
                  <Link href="#" className="group flex items-center py-3 text-base font-medium hover:bg-gray-100 px-4 rounded-lg transition-colors">
                    Промоции
                  </Link>
                </nav>
                <div className="border-t py-4 px-4">
                  <div className="flex flex-col gap-3">
                    <Button variant="outline" className="w-full justify-start" size="lg">
                      <User className="mr-2 h-4 w-4" />
                      Вход
                    </Button>
                    <Button className="w-full justify-start" size="lg">
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Количка ({cartCount})
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tighter">Rift Fashion</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground">
              Нови Предложения
            </Link>
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-foreground/60 transition-colors hover:text-foreground">
                Жени
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full z-50 hidden w-48 rounded-lg border bg-white p-4 shadow-lg group-hover:block">
                <div className="space-y-2">
                  <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Рокли
                  </Link>
                  <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Блузи
                  </Link>
                  <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Панталони
                  </Link>
                  <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Аксесоари
                  </Link>
                </div>
              </div>
            </div>
            <Link href="#" className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground">
              Мъже
            </Link>
            <Link href="#" className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground">
              Аксесоари
            </Link>
            <Link href="#" className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground">
              Промоции
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search - Desktop */}
            <div className="hidden md:flex relative">
              <Input
                type="search"
                placeholder="Търсене..."
                className="w-[200px] lg:w-[300px] pl-8 rounded-full bg-gray-100/50 border-0 focus-visible:ring-1"
              />
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="text-foreground/60 hover:text-foreground">
                <Search className="h-5 w-5 md:hidden" />
                <User className="h-5 w-5 hidden md:block" />
                <span className="sr-only">Account</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground/60 hover:text-foreground hidden md:flex">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
              </Button>
              <div className="relative">
                <Button variant="ghost" size="icon" className="text-foreground/60 hover:text-foreground">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="sr-only">Cart</span>
                </Button>
                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] w-full overflow-hidden">
          <video autoPlay muted loop className="absolute inset-0 h-full w-full object-cover">
            <source
              src="mixkit-man-putting-on-a-jacket-151-4k.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold tracking-tight">
                Преоткриване на Модерната Мода
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-200">
                Открийте нашата нова колекция от минималистични дизайни, създадени за съвременния начин на живот
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="rounded-full bg-white text-black hover:bg-gray-200 w-full sm:w-auto">
                  Нови Предложения
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-white bg-white/10 text-white hover:bg-white hover:text-black transition-colors duration-300 w-full sm:w-auto"
                >
                  Разгледай Колекциите
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Bar */}
        <section className="border-y bg-gray-50">
          <div className="container py-4">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="flex items-center justify-center gap-2 text-center">
                <Truck className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">Безплатна Доставка</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-center">
                <RefreshCw className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">Лесно Връщане</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-center">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">24/7 Поддръжка</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-center">
                <ShoppingBag className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">Сигурно Плащане</span>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="container py-16">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">Пазарувай по Категория</h2>
            <p className="mt-4 text-muted-foreground">
              Разгледайте нашите подбрани колекции, създадени за модерния начин на живот
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={category.href} className="group relative block overflow-hidden rounded-lg">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={500}
                    height={600}
                    className="h-[350px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
                    <div>
                      <h3 className="text-xl font-medium text-white">{category.name}</h3>
                      <p className="mt-1 flex items-center text-sm text-gray-300">
                        Пазарувай сега <ChevronRight className="ml-1 h-4 w-4" />
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Brand Partners Carousel */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">Нашите Партньори</h2>
              <p className="mt-4 text-muted-foreground">Открийте нашата селекция от премиум модни марки</p>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true
              }}
              setApi={setApi}
              className="mx-auto max-w-6xl"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {[
                  { src: "/0046515_replay_350.png", alt: "Replay" },
                  { src: "/0046516_camper_350.png", alt: "Camper" },
                  { src: "/0048656_karl-lagerfeld_350.png", alt: "Karl Lagerfeld" },
                  { src: "/0049641_love-moschino_350.png", alt: "Love Moschino" },
                  { src: "/0050634_campomaggicaterina-lucchi_350.png", alt: "Campomaggio Caterina Lucchi" },
                  { src: "/0056204_cruyff_350.png", alt: "Cruyff" },
                  { src: "/0083828_converse_350.png", alt: "Converse" },
                  { src: "/0151349_cruyff-sports_350.png", alt: "Cruyff Sports" },
                  { src: "/0151436_john-richmond_350.png", alt: "John Richmond" },
                  { src: "/0152547_new-balance_350.png", alt: "New Balance" },
                  { src: "/0181916_les-hommes_350.png", alt: "Les Hommes" }
                ].map((brand, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <motion.div 
                      className="flex items-center justify-center p-6"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image 
                        src={brand.src} 
                        alt={brand.alt} 
                        width={175} 
                        height={88} 
                        className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300" 
                      />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8">
                <CarouselPrevious className="static hover:bg-gray-100" />
                <CarouselNext className="static ml-2 hover:bg-gray-100" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* Trending Now Section */}
        <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
          <div className="container">
            <div className="mb-10 text-center">
              <Badge variant="outline" className="mb-2">
                Актуално Сега
              </Badge>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">Тенденции Тази Седмица</h2>
              <p className="mt-4 text-muted-foreground">Най-популярните ни стилове, които всички харесват в момента</p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center">
                <TabsList className="mb-8">
                  <TabsTrigger value="all">Всички</TabsTrigger>
                  <TabsTrigger value="women">Жени</TabsTrigger>
                  <TabsTrigger value="men">Мъже</TabsTrigger>
                  <TabsTrigger value="accessories">Аксесоари</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {error && (
                    <div className="text-center text-red-500 my-8">
                      <p>{error}</p>
                      <Button onClick={() => window.location.reload()} className="mt-4">
                        Try Again
                      </Button>
                    </div>
                  )}
                  {isLoading ? (
                    <div>Loading...</div>
                  ) : (
                    products.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <ProductCard product={product} />
                      </motion.div>
                    ))
                  )}
                </div>
              </TabsContent>

              <TabsContent value="women" className="mt-0">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {error && (
                    <div className="text-center text-red-500 my-8">
                      <p>{error}</p>
                      <Button onClick={() => window.location.reload()} className="mt-4">
                        Try Again
                      </Button>
                    </div>
                  )}
                  {isLoading ? (
                    <div>Loading...</div>
                  ) : (
                    products
                      .filter((p) => p.category === "women")
                      .map((product, index) => (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <ProductCard product={product} />
                        </motion.div>
                      ))
                  )}
                </div>
              </TabsContent>

              <TabsContent value="men" className="mt-0">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {error && (
                    <div className="text-center text-red-500 my-8">
                      <p>{error}</p>
                      <Button onClick={() => window.location.reload()} className="mt-4">
                        Try Again
                      </Button>
                    </div>
                  )}
                  {isLoading ? (
                    <div>Loading...</div>
                  ) : (
                    products
                      .filter((p) => p.category === "men")
                      .map((product, index) => (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <ProductCard product={product} />
                        </motion.div>
                      ))
                  )}
                </div>
              </TabsContent>

              <TabsContent value="accessories" className="mt-0">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {error && (
                    <div className="text-center text-red-500 my-8">
                      <p>{error}</p>
                      <Button onClick={() => window.location.reload()} className="mt-4">
                        Try Again
                      </Button>
                    </div>
                  )}
                  {isLoading ? (
                    <div>Loading...</div>
                  ) : (
                    products
                      .filter((p) => p.category === "accessories")
                      .map((product, index) => (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <ProductCard product={product} />
                        </motion.div>
                      ))
                  )}
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 flex justify-center">
              <Button variant="outline" className="rounded-full">
                Разгледай Всички Продукти <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Collection */}
        <section className="py-16">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/seasonal.jpg"
                  alt="Специална колекция"
                  width={600}
                  height={800}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 p-6">
                  <div className="max-w-md text-center text-white">
                    <Badge variant="outline" className="mb-4 border-white text-white">
                      Нова Колекция
                    </Badge>
                    <h2 className="text-3xl font-bold md:text-4xl">Устойчива Мода</h2>
                    <p className="mt-4">Екологични материи срещат безвременен дизайн в нашата нова устойчива колекция.</p>
                    <Button className="mt-6 rounded-full bg-white text-black hover:bg-gray-200">Разгледай Колекцията</Button>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="/summer.jpg"
                    alt="Летни стилове"
                    width={300}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-medium">Летни Стилове</h3>
                      <Link href="#" className="mt-2 inline-flex items-center text-sm">
                        Пазарувай Сега <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="/accessories.jpg"
                    alt="Аксесоари"
                    width={300}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-medium">Аксесоари</h3>
                      <Link href="#" className="mt-2 inline-flex items-center text-sm">
                        Пазарувай Сега <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-lg sm:col-span-2">
                  <Image
                    src="/seasonal2.jpg"
                    alt="Нов сезон"
                    width={600}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 p-6">
                    <div className="text-center text-white">
                      <h3 className="text-xl font-medium">Нови Сезонни Предложения</h3>
                      <p className="mt-2 text-sm">До 30% отстъпка на избрани артикули</p>
                      <Button
                        className="mt-4 rounded-full bg-white text-black hover:bg-black hover:text-white transition-colors duration-300"
                        size="sm"
                      >
                        Разгледай Промоциите
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">Какво Казват Нашите Клиенти</h2>
              <p className="mt-4 text-muted-foreground">Реални отзиви от нашата общност</p>
            </div>

            <Carousel className="mx-auto max-w-5xl">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="h-full rounded-lg border bg-card p-6">
                      <div className="flex items-center gap-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <blockquote className="mt-4">
                        <p className="text-sm text-muted-foreground">"{testimonial.text}"</p>
                      </blockquote>
                      <div className="mt-6 flex items-center gap-4">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg?height=40&width=40"}
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                          <p className="text-sm font-medium">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </section>

        {/* Instagram Feed */}
        <section className="py-16">
          <div className="container">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">Последвайте ни в Instagram</h2>
              <p className="mt-4 text-muted-foreground">@riftfashion • Присъединете се към нашата модна общност</p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
              {instagramPosts.map((post, index) => (
                <Link key={index} href="#" className="group relative overflow-hidden rounded-lg">
                  <Image
                    src={post.image || "/placeholder.svg?height=300&width=300"}
                    alt="Instagram post"
                    width={300}
                    height={300}
                    className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
                    <Instagram className="h-6 w-6 text-white" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="rounded-full">
                Вижте Повече в Instagram <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-black py-16 text-white">
          <div className="container">
            <div className="mx-auto max-w-xl text-center">
              <Badge variant="outline" className="mb-4 border-gray-700 text-gray-400">
                Бъдете Информирани
              </Badge>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">Абонирайте се за Нашия Бюлетин</h2>
              <p className="mt-4 text-gray-400">
                Бъдете първите, които ще научават за нови колекции, ексклузивни оферти и модни съвети.
              </p>
              <div className="mt-6">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Input
                    type="email"
                    placeholder="Вашият имейл адрес"
                    className="flex-1 rounded-full border-gray-800 bg-gray-900 text-white"
                  />
                  <Button className="rounded-full">Абониране</Button>
                </div>
                <p className="mt-4 text-xs text-gray-500">
                  С абонирането си се съгласявате с нашата Политика за поверителност и давате съгласие да получавате актуализации от нашата компания.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              size="icon"
              className="h-12 w-12 rounded-full shadow-lg"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ArrowUp className="h-6 w-6" />
              <span className="sr-only">Нагоре</span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Support Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="icon" className="h-14 w-14 rounded-full shadow-lg">
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Чат Поддръжка</span>
        </Button>
      </div>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold tracking-tighter">Rift Fashion</span>
              </Link>
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                Rift Fashion е премиум модна марка, предлагаща модерно, минималистично облекло за съвременния начин на живот.
              </p>
              <div className="mt-6 flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-medium">Пазаруване</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Нови Предложения
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Жени
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Мъже
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Аксесоари
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Промоции
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Колекции
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-medium">Компания</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    За Нас
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Кариери
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Устойчивост
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Медия
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Партньори
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-medium">Обслужване на Клиенти</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Контакти
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Доставка и Връщане
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Често Задавани Въпроси
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Размери
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Проследи Поръчка
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row">
            <p className="text-sm text-muted-foreground">© 2025 Rift Fashion. Всички права запазени.</p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Общи Условия
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Поверителност
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Бисквитки
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Достъпност
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

