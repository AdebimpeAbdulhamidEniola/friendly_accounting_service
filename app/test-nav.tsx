import Navigation from "@/components/common/navigation";

export default function TestNavPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Navigation Test Page</h1>
        <p>This page only renders the navigation component for testing.</p>
        <p className="mt-2">Resize your browser to test responsive behavior:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Mobile: Should show "Book"</li>
          <li>Tablet/Desktop: Should show "Book an appointment"</li>
        </ul>
      </div>
    </div>
  );
}
