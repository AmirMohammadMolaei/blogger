import Card from "@/components/pages/topics/Card";
import SearchBox from "@/components/pages/topics/SearchBox";
import { GetCategories } from "@/core/services/apis/get/get-categories";
import { CategoriesType } from "@/core/services/models/category-models";

export default async function Topics() {
  const data: CategoriesType[] = await GetCategories();

  return (
    <div className="flex flex-col items-center gap-6 py-24">
      <h1 className="font-Cinzel text-5xl max-sm:text-4xl">Explore Topics</h1>
      <SearchBox />
      <ul className="font-Habibi flex gap-x-3 text-sm max-sm:flex-wrap">
        <li>Recommended:</li>
        {data.slice(0, 3).map((i) => (
          <li key={i.id}>{i.name}</li>
        ))}
      </ul>
      <div className="w-full mt-8 py-8 border-t-1 flex flex-wrap gap-8 justify-center">
        {data.map((i) => (
          <Card key={i.id} name={i.name} />
        ))}
      </div>
    </div>
  );
}
