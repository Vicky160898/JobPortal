import JobCard from "@/components/cards";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {[...Array(5)].map((item, i) => (
          <div>
            <JobCard />
          </div>
        ))}
      </div>
    </>
  );
}
