import FloatingDecor from '../FloatingDecor';

export default function FloatingDecorExample() {
  return (
    <div className="relative h-screen bg-gradient-to-br from-background to-card">
      <FloatingDecor />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="font-serif text-4xl font-bold">Floating Decorative Elements</h1>
      </div>
    </div>
  );
}
