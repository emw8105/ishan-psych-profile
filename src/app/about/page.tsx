export default function AboutPage() {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-gray-700">
          Welcome to the About page! This is a simple test to verify the routing and Navbar functionality.
        </p>
      </div>
    );
  }

  export const metadata = {
    title: "About - Ishan Vengurlekar",
    description: "Welcome to the Home Page of Ishan Vengurlekar's personal website.",
  };
  
  // an introduction type section with a single primary statement
  // a secondary introduction type section with a couple paragraphs
  // a section highlighting education and background