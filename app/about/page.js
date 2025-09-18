export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-10">
      <div className="max-w-md text-center">
        <img
          src="/images/Ayomide.jpg"
          alt="Ayomide Oluyemi"
          className="w-40 h-40 mx-auto rounded-full border-4 border-blue-600 shadow-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-2 text-slate-800">Ayomide Oluyemi</h1>
        <p className="text-gray-600 text-lg">
          I’m currently a computer science interning as a software engineer 
          but I'm really passionate about storyteling in various mediums, 
          especially through writing and design. I volunteered in several roles to build this passion to 
          something profitable.
        </p>
      </div>
    </main>
  );
}