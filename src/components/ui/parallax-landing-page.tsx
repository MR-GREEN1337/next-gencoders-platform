"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

export function HeroParallaxComp() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "OpenAI",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/parallax/openai.png",
  },
  {
    title: "Mistral",
    link: "https://mistral.ai",
    thumbnail:
      "/parallax/mistral.png",
  },
  {
    title: "Coding",
    link: "https://polycoders.vercel.app",
    thumbnail:
      "/parallax/coding.jpg",
  },
  {
    title: "Anthropic",
    link: "https://www.anthropic.com/",
    thumbnail:
      "/parallax/anthropic.png",
  },
];
