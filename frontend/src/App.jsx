import BgShapes from "./components/BgShapes.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-600 to-orange-300 flex items-center justify-center relative overflow-hidden ">
      <BgShapes color="bg-orange-100" size="w-64 h-64" top="-5% " left="10%" delay={0} />
      <BgShapes color="bg-orange-900" size="w-48 h-48" top="70% " left="80%" delay={5} />

      <BgShapes color="bg-orange-100" size="w-32 h-32" top="40% " left="-10%" delay={2} />
    </div>
  );
}

export default App;
