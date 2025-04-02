import { GetCategories } from "@/core/services/apis/get/get-categories";
import { CategoriesType } from "@/core/services/models/category-models";
import Link from "next/link";
import { use } from "react";

const RecommendedTopics = () => {
  const data: CategoriesType[] = use(GetCategories());

  const Chip = ({ children }: { children: string }) => {
    return (
      <span className="px-4 py-2 bg-[#F2F2F2] rounded-full font-Habibi">
        {children}
      </span>
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-Cinzel text-xl mb-2">Recommended topics</h1>
      <div className="flex flex-wrap gap-2">
        {data.slice(0, 7).map((item) => (
          <Chip key={item.id}>{item.name}</Chip>
        ))}
      </div>
      <Link href={"/topics"} className="text-sm text-gray-400 hover:underline">
        See more topics
      </Link>
    </div>
  );
};

export default RecommendedTopics;
