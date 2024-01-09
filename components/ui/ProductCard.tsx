"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/IconButton";
import { ExpandIcon, ShoppingCartIcon } from "lucide-react";
import Currency from "./Currency";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: Product;
}
export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  function handleClick() {
    router.push(`/product/${product?.id}`);
  }
  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Images and actions */}
      <div className="aspect-square bg-gray-100 relative rounded-xl">
        <Image
          src={product?.images[0].url}
          fill
          alt="Product Image"
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-6 justify-center">
            <IconButton
              icon={
                <ExpandIcon size={20} className="text-gray-600" />
              }
            />
            <IconButton
              icon={
                <ShoppingCartIcon
                  size={20}
                  className="text-gray-600"
                />
              }
            />
          </div>
        </div>
      </div>
      {/* Description */}

      <div>
        <p className="font-semibold text-lg">{product.name}</p>
        <p className="text-sm text-gray-500">
          {product.category?.name}
        </p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={product.price} />
      </div>
    </div>
  );
}
