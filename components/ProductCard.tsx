import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { formatPrice } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
}

interface ProductCardProps {
  product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative block overflow-hidden rounded-lg">
      <Link href={`/products/${product.id}`} className="relative">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={400}
          className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4">
          <div>
            <h3 className="text-sm font-medium text-white">{product.name}</h3>
            <p className="mt-1 text-xs text-gray-300">{formatPrice(product.price)}</p>
          </div>
        </div>
      </Link>
      <div className="absolute right-4 top-4">
        <Button size="icon" variant="secondary">
          <ShoppingBag className="h-4 w-4" />
          <span className="sr-only">Add to cart</span>
        </Button>
      </div>
    </div>
  )
}

