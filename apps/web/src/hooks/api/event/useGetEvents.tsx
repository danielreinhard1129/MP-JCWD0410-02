"use client";

import useAxios from "@/hooks/useAxios";
import { Event } from "@/types/event";
import { PageableResponse, PaginationQueries } from "@/types/pagination";
import { useQuery } from "@tanstack/react-query";

interface GetBlogQueries extends PaginationQueries {
  search?: string;
}

const useGetBlogs = (queries: GetBlogQueries) => {
  const { axiosInstance } = useAxios();

  return useQuery({
    queryKey: ["blogs", queries],
    queryFn: async () => {
      const { data } = await axiosInstance.get<PageableResponse<Event>>(
        "/blogs",
        { params: queries },
      );

      return data;
    },
  });
};

export default useGetBlogs;
