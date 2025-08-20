import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <div style={{color:'#fff', padding:20}}>
    <h1>Home OK</h1>
    <p><Link to="/dao">go /dao</Link></p>
  </div>;
}
function Dao() { return <div style={{color:'#fff', padding:20}}><h1>DAO OK</h1></div>; }

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dao" element={<Dao/>} />
    </Routes>
  );
}
