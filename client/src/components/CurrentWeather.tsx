import { weatherService } from "@/services/weather/weather.service";
import { useQuery } from "react-query";
import Spinner from "./Spinner";
import { formatTemperature } from "@/lib/utils";

interface CurrentWeatherProps {
  city: string;
}

export default function CurrentWeather({ city }: CurrentWeatherProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['weatherByCity', city],
    queryFn: () => weatherService.getWeatherByCity(city)
  })

  if (isLoading) {
    return <Spinner className="size-[48px]" />;
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  if (!data) {
    return <span className="text-3xl font-bold">Nothing to show...</span>;
  }
  
  return (
    <div className="flex flex-col justify-between items-center gap-20 px-[147px] sm:px-4 sm:gap-12">
      <img src={data?.image} alt="weather image" className="size-[278px] sm:size-[160px]"/>
      <div className="flex flex-col justify-between items-center gap-4">
        <span className="text-[#1C242B] font-bold text-xl">{data?.city}, {data?.country}</span>
        <div className="flex flex-col justify-between items-center gap-1">
          <span className="text-[#1C242B] font-bold text-[54px]">{formatTemperature(data.temperature)}</span>
          <span className="text-[#35424F] text-sm">{data?.temperatureText}</span>
        </div>
      </div>
    </div>
  )
}