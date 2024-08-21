// "use client";

// import useGetBlogs from "@/hooks/api/event/useGetEvents";
// import { Loader2 } from "lucide-react";
// import { useState } from "react";
// import EventCard from "./EventCard";

// const BlogList = () => {
//   const [page, setPage] = useState(1);
//   const { data, isPending } = useGetBlogs({
//     page,
//     take: 3,
//   });

//   const onPageChange = ({ selected }: { selected: number }) => {
//     setPage(selected + 1);
//   };

//   if (isPending) {
//     return <Loader2 className="m-auto animate-spin" />;
//   }

//   if (!data) {
//     return <h3>Blog tidak ditemukan</h3>;
//   }
//   return (
//     <>
//       <section className="grid grid-cols-3 gap-x-3">
//         {data?.data.map((blog, index) => {
//           return (
//             <EventCard
//               key={index}
//               title={blog.title}
//               organizer={blog.user.name}
//               category={blog.category}
//               description={blog.description}
//               thumbnail={blog.thumbnail}
//             />
//           );
//         })}
//       </section>
//       <div className="my-8 flex justify-end">
//         <Pagination
//           total={data.meta.total}
//           take={data.meta.take}
//           onPageChange={onPageChange}
//           page={page}
//         />
//       </div>
//     </>
//   );
// };

// export default BlogList;
