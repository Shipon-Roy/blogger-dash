"use client";

import PostPage from "@/components/admin/postPage";
import SectionsPage from "@/components/admin/sections";
import { useSearchParams } from "next/navigation";

function Page() {
  const searchParams = useSearchParams();
  const tab: string | undefined = (searchParams as any).get("tab");

  return (
    <div className="p-4 pl-0">
      {tab === "new-doc" && <PostPage />}
      {tab === "sections" && <SectionsPage />}
    </div>
  );
}

export default Page;
