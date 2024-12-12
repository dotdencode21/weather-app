import { formatTemperature } from "@/lib/utils";

interface CardProps {
  city: string;
  country: string;
  temperature: number;
  temperatureText: string,
  image: string;
}

export default function Card({ city, country, temperature, temperatureText, image }: CardProps) {
  return (
    <div className="w-full bg-[#F2F6FF] p-3 rounded-[8px] flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <span className="text-black font-bold text-base">{city}, {country}</span>
        <span className="text-black text-base">{temperatureText}</span>
      </div>
      <div className="flex justify-end items-center gap-1">
        <span className="text-[#1C242B] text-base font-bold">{formatTemperature(temperature)}</span>
        <img src={image} alt="weather icon" className="size-[51px]"/>
      </div>
    </div>
  )
}