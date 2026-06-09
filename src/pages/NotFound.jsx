import Button from '@/components/common/Button';

/**
 * 404 fallback page.
 */
export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-muted py-20">
      <div className="container text-center">
        <h1 className="text-8xl font-extrabold text-accent md:text-9xl">404</h1>
        <h2 className="mt-4 text-2xl font-bold md:text-3xl">
          Oops! Page Not Found
        </h2>
        <p className="mx-auto mt-3 max-w-md">
          The page you are looking for might have been removed, renamed, or is
          temporarily unavailable.
        </p>
        <Button to="/" className="mt-8">
          Back To Home
        </Button>
      </div>
    </section>
  );
}
