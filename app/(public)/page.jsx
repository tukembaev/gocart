'use client'
import BestSelling from "@/components/BestSelling";
import Hero from "@/components/Hero";
import LatestProducts from "@/components/LatestProducts";
import Newsletter from "@/components/Newsletter";

export default function Home() {
    return (
        <div>
            <Hero />
            <LatestProducts />
            <BestSelling />
            <Newsletter />
        </div>
    );
}
