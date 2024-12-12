import { Link } from "react-router";
import { Button } from "../ui/button";
import { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "../ui/input";
import { useMutation } from "react-query";
import { weatherService } from "@/services/weather/weather.service";
import { queryClient } from "@/main";

interface CreateWeatherFormProps {
  onSelect: (city: string) => void;
}

export default function CreateWeatherForm({ onSelect }: CreateWeatherFormProps) {
  const [city, setCity] = useState(localStorage.getItem("city") || "");

  const { mutate, isLoading } = useMutation(weatherService.createWeather, {
    onSuccess: () => queryClient.invalidateQueries("weatherByCity")
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ city });

    !isLoading && onSelect(city);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    localStorage.setItem("city", value)
    setCity(value);
  }

  return (
    <div className="flex flex-col justify-between items-start gap-[52px] p-10 w-full max-w-[572px]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
        <label className="flex flex-col justify-start items-start gap-3">
          <span className="text-[#56626F] text-sm">Enter the city</span>
          <Input
            value={city}
            onChange={handleChange}
            placeholder="Start entering the name of the city"
            className="placeholder:text-[#8E9AA7] placeholder:text-sm py-4"
          />
        </label>
        <Button type="submit" className="w-full bg-gradient-to-b from-[#2F5AF4] to-[#0FA2AB] uppercase focus:ring-0">
          <span className="text-white text-base font-bold">submit</span>
        </Button>
      </form>
      <Link to="/history" className="w-full flex justify-center">
        <span className="text-[#8E9AA7] text-sm underline">
          Show history
        </span>
      </Link>
    </div>
  )
}