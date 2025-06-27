import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

export default function NotFoundPage() {
  notFound();

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404 - Not Found</h1>
      <p className="mt-4 text-gray-500 dark:text-gray-400">
        Halaman yang kamu cari tidak ditemukan.
      </p>
      <Button className="mt-6" asChild>
        <a href="/">Kembali ke Beranda</a>
      </Button>
    </div>
  );
}
