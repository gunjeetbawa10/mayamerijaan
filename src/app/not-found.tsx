import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl">Artwork Not Found</h1>
      <p className="mt-5 text-muted-foreground">
        The artwork you are looking for does not exist or may have been moved.
      </p>
      <Link
        href="/gallery"
        className="mt-8 rounded-full bg-foreground px-6 py-3 text-sm text-background transition hover:opacity-90"
      >
        Back to Gallery
      </Link>
    </div>
  );
}
