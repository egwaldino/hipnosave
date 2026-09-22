import type { Metadata } from "next";
import { BlogListing } from "@/components/blog/BlogListing";
import { Footer } from "@/components/landing/footer/Footer";
import { Header } from "@/components/landing/header/Header";

export const metadata: Metadata = {
  title: "Blog — Hipnosave",
  description:
    "Artigos e dicas sobre hipnoterapia, ansiedade, hábitos e saúde mental, escritos para o ajudar a compreender melhor o seu bem-estar.",
};

export default function BlogPage() {
  return (
    <div>
      <Header variant="solid" />
      <BlogListing />
      <Footer />
    </div>
  );
}
