'use client'
import { Suspense, useState, useMemo } from "react"
import ProductCard from "@/components/ProductCard"
import { MoveLeftIcon, Search } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useSelector } from "react-redux"
import CustomSelect from "@/shared/CustomSelect"


function ShopContent() {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const router = useRouter()

  const products = useSelector(state => state.product.list)
  const [sortBy, setSortBy] = useState("default")
  const [brand, setBrand] = useState("all")
  const [localSearch, setLocalSearch] = useState(search || "")

  // бренды
  const brands = useMemo(() => {
    const uniqueBrands = Array.from(new Set(products.map(p => p.brand)))
    return uniqueBrands
  }, [products])

  // фильтрация
  let filteredProducts = search
    ? products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    : products

  if (brand !== "all") {
    filteredProducts = filteredProducts.filter(p => p.brand === brand)
  }

  // сортировка
  if (sortBy === "price-asc") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
  } else if (sortBy === "price-desc") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
  } else if (sortBy === "rating") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    router.push(`/shop?search=${localSearch}`)
  }

  return (
    <div className="min-h-[70vh] mx-6">
      <div className="max-w-7xl mx-auto">
        <h1
          onClick={() => router.push('/shop')}
          className="text-2xl text-slate-500 my-6 flex items-center gap-2 cursor-pointer"
        >
          {search && <MoveLeftIcon size={20} />} All{" "}
          <span className="text-slate-700 font-medium">Products</span>
        </h1>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="flex items-center w-full sm:w-1/2 gap-2 bg-slate-100 px-4 py-2 rounded-full"
          >
            <Search size={18} className="text-slate-500" />
            <input
              type="text"
              placeholder="Search products..."
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              className="w-full bg-transparent outline-none text-sm text-slate-700"
            />
          </form>

          {/* Sorting + Brands */}
          <div className="flex gap-4 w-full sm:w-auto">
            <CustomSelect
              value={sortBy}
              onChange={setSortBy}
              options={[
                { value: "default", label: "Default" },
                { value: "price-asc", label: "Price: Low → High" },
                { value: "price-desc", label: "Price: High → Low" },
                { value: "rating", label: "Rating" },
              ]}
              className="w-[160px]"
            />

            <CustomSelect
              value={brand}
              onChange={setBrand}
              options={[
                { value: "all", label: "All brands" },
                ...brands.map(b => ({ value: b, label: b }))
              ]}
              className="w-[160px]"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:flex flex-wrap gap-6 xl:gap-12 mx-auto mb-32">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Shop() {
  return (
    <Suspense fallback={<div>Loading shop...</div>}>
      <ShopContent />
    </Suspense>
  )
}
