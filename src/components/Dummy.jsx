export function Dummy() {
    return (
      <div className="p-8 max-w-6xl mx-auto">
        <h1 className="text-4xl mb-8 text-center">Font System with Tailwind v4</h1>
  
        {/* Using direct CSS classes */}
        <div className="space-y-4 mb-8">
          <p className="rethink-sans-400">Rethink Sans Regular (400)</p>
          <p className="rethink-sans-700">Rethink Sans Bold (700)</p>
          <p className="rethink-sans-400-italic">Rethink Sans Italic</p>
          <p className="space-grotesk-300">Space Grotesk Light</p>
          <p className="space-grotesk-700">Space Grotesk Bold</p>
          <p className="lexend-deca-100">Lexend Deca Thin</p>
          <p className="lexend-deca-900">Lexend Deca Black</p>
        </div>
  
        {/* Using Tailwind utilities with custom fonts */}
        <div className="space-y-4 mb-8">
          <p className="font-lexend font-bold text-xl">Lexend Deca with Tailwind</p>
          <p className="font-space font-light">Space Grotesk Light</p>
          <p className="font-caveat text-2xl">Caveat Handwriting</p>
          <p className="font-bad-script text-xl">Bad Script Cursive</p>
        </div>
  
        {/* Using component classes */}
        <div className="space-y-6 mb-8">
          <h2 className="font-display">Display Heading</h2>
          <p className="font-body">This is body text using the font-body component class.</p>
          <blockquote className="font-handwritten italic border-l-4 pl-4">
            Handwritten quote using Caveat
          </blockquote>
          <p className="font-cursive">Cursive text with Bad Script</p>
        </div>
  
        {/* Responsive example */}
        <div className="mb-8">
          <h3 className="text-lg md:text-xl lg:text-2xl font-heading">
            Responsive Heading
          </h3>
          <p className="text-sm sm:text-base md:text-lg font-rethink">
            This text grows with screen size
          </p>
        </div>
  
        {/* Font weight demonstration */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-3 border rounded">
            <p className="font-thin">Font Thin (100)</p>
            <p className="font-light">Font Light (300)</p>
            <p className="font-normal">Font Normal (400)</p>
            <p className="font-medium">Font Medium (500)</p>
            <p className="font-semi-bold">Font Semi-bold (600)</p>
            <p className="font-bold">Font Bold (700)</p>
            <p className="font-extra-bold">Font Extra-bold (800)</p>
          </div>
          
          <div className="p-3 border rounded">
            <p className="tracking-tight-font">Tight Tracking</p>
            <p className="tracking-normal-font">Normal Tracking</p>
            <p className="tracking-wide-font">Wide Tracking</p>
            <p className="text-shadow">With Text Shadow</p>
          </div>
          
          <div className="p-3 border rounded md:col-span-1 col-span-2">
            <button className="btn-font bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Button with Custom Font
            </button>
            <p className="font-elegant mt-2">Elegant serif text</p>
            <p className="font-gloock text-lg">Gloock display font</p>
          </div>
        </div>
      </div>
    );
  }
  
