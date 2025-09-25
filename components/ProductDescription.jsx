'use client'
import { ArrowRight, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/navigation"
import Counter from "@/components/Counter"
import { addToCart } from "@/lib/features/cart/cartSlice"

// В реальном проекте сюда лучше подгружать товары из Redux или API
const mockSimilar = [
  {
    id: 1,
    name: "Casio G-Shock GA-2100",
    price: 120,
    image: "https://swisstime-exclusive.kg/wp-content/uploads/2024/03/GA-2100FF-8AER.jpg",
  },
  {
    id: 2,
    name: "Seiko Prospex Diver",
    price: 240,
    image: "https://swisstime-exclusive.kg/wp-content/uploads/2024/03/GA-2100FF-8AER.jpg",
  },
  {
    id: 3,
    name: "Citizen Eco-Drive",
    price: 180,
    image: "https://swisstime-exclusive.kg/wp-content/uploads/2024/03/GA-2100FF-8AER.jpg",
  },
  {
    id: 4,
    name: "Tissot PRX Quartz",
    price: 350,
    image: "https://swisstime-exclusive.kg/wp-content/uploads/2024/03/GA-2100FF-8AER.jpg",
  },
]

const ProductDescription = ({ product }) => {
  const [selectedTab, setSelectedTab] = useState("Description")

  const dispatch = useDispatch()
  const router = useRouter()
  const cart = useSelector((state) => state.cart.items || {})
  const productId = product?.id

  const addToCartHandler = (item) => {
    dispatch(addToCart(item))
  }

  return (
    <div className="my-18 text-sm text-slate-600 flex max-lg:flex-col gap-12">
      {/* Left side */}
      <div className="flex-1">
        {/* Tabs */}
        <div className="flex border-b border-slate-200 mb-6 max-w-2xl">
          {["Description", "Reviews"].map((tab, index) => (
            <button
              key={index}
              onClick={() => setSelectedTab(tab)}
              className={`px-3 py-2 font-medium ${
                tab === selectedTab
                  ? "border-b-[1.5px] border-slate-700 font-semibold"
                  : "text-slate-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Description */}
        {selectedTab === "Description" && (
          <p className="max-w-xl">{product.description}</p>
        )}

        {/* Reviews */}
        {selectedTab === "Reviews" && (
          <div className="flex flex-col gap-3 mt-14">
            {product.rating.map((item, index) => (
              <div key={index} className="flex gap-5 mb-10">
                <Image
                  src={item.user.image}
                  alt=""
                  className="size-10 rounded-full"
                  width={100}
                  height={100}
                />
                <div>
                  <div className="flex items-center">
                    {Array(5)
                      .fill("")
                      .map((_, idx) => (
                        <StarIcon
                          key={idx}
                          size={18}
                          className="text-transparent mt-0.5"
                          fill={
                            item.rating >= idx + 1 ? "#00C950" : "#D1D5DB"
                          }
                        />
                      ))}
                  </div>
                  <p className="text-sm max-w-lg my-4">{item.review}</p>
                  <p className="font-medium text-slate-800">
                    {item.user.name}
                  </p>
                  <p className="mt-3 font-light">
                    {new Date(item.createdAt).toDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Store Page */}
        <div className="flex gap-3 mt-14">
          <Image
            src={product.store.logo}
            alt=""
            className="size-11 rounded-full ring ring-slate-400 object-contain"
            width={100}
            height={100}
          />
          <div>
            <p className="font-medium text-slate-600">
              Product by {product.store.name}
            </p>
            <Link
              href={`/brand/${product.store.username}`}
              className="flex items-center gap-1.5 text-blue-500"
            >
              view store <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Right side: similar products */}

    </div>
  )
}

export default ProductDescription
