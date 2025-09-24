import { Frame } from "./component/frame";
import { Login} from "./component/login";


export default function App() {
  return (
    <div className="bg-black text-white p-10 min-h-screen max-w-6xl mx-auto">
      <Frame />
      <Login />
    </div>
    
  );
}
