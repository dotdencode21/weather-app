import Card from "@/components/Card";
import Container from "@/components/Container";
import Spinner from "@/components/Spinner";
import { weatherService } from "@/services/weather/weather.service";
import { ArrowLeft } from "lucide-react";
import { useQuery } from "react-query";
import { Link } from "react-router";

export default function HistoryPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["weathers"],
    queryFn: () => weatherService.getAllWeathers()
  })

  if (isLoading) {
    return <Spinner className="size-[48px]" />;
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <Container className="py-10 px-[140px] w-full sm:px-4">
      <div className="flex flex-col justify-start items-start gap-8">
        <Link to="/" className="flex justify-start items-center gap-6">
          <ArrowLeft />
          <span className="text-[#121212] text-lg font-semibold">
            Weather history
          </span>
        </Link>
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 w-full sm:grid-cols-1">
          {
            data?.map(item => (
              <Card key={item._id} {...item} />
            ))
          }
        </div>
      </div>
    </Container>
  )
}