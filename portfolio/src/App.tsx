import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';
import Logbook from "./components/Logbook.tsx";
import "./App.css";

export default function App() {
  return (
    <>
      <Logbook />
      <Tooltip id="my-tooltip" style={{ backgroundColor: '#d88bb3', color: '#fff', borderRadius: '12px', fontSize: '8px' }}/>
    </>
  );
}
