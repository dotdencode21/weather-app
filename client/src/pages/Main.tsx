import Container from "@/components/Container";
import CurrentWeather from "@/components/CurrentWeather";
import CreateWeatherForm from "@/components/forms/CreateWeather";
import { useState } from "react";

export default function MainPage() {
  const [city, setCity] = useState("Kyiv");

  return (
    <Container className="pt-[104px] flex justify-center items-center gap-4 sm:pt-[67px] sm:flex-col">
      <CurrentWeather city={city} />
      <CreateWeatherForm onSelect={setCity} />
    </Container>
  )
}