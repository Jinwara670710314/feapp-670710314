//import logo from './logo.svg';
//import './App.css';

//function App() {
//const name = 'Jinwara';
//const year = 2026;

//return (
//<div>
//<h1>สวัสดี {name}!</h1>
//<p>ปีนี้คือปี {year} อีก 4 ปีจะเป็นปี {year + 4}</p>
//<p>ตอนนี้เวลา {new Date().toLocaleTimeString('th-TH')}</p>
//</div>
//);
//}

//export default App;


// import Hello from './Hello';  // 1. import เข้ามา (./ = โฟลเดอร์เดียวกัน)

// function App() {
//   return (
//     <div>
//       <h1>แอปของฉัน</h1>
//       <Hello />               {/* 2. ใช้เหมือนแท็ก HTML */}
//       <Hello />               {/* 3. ใช้ซ้ำกี่ครั้งก็ได้! */}
//       <Hello />
//     </div>
//   );
// }

// export default App;


// function Header() {
//   return <header><h1>🎬 MovieHub</h1></header>;
// }

// function MovieList() {
//   return (
//     <main>
//       <p>รายการหนังจะมาอยู่ตรงนี้...</p>
//     </main>
//   );
// }

// function Footer() {
//   return <footer><p>© 2026 วิชา 520 341</p></footer>;
// }

// function App() {
//   return (
//     <div>
//       <Header />
//       <MovieList />
//       <Footer />
//     </div>
//   );
// }

// export default App;


// import './App.css';
// import Header from './components/Header';
// import MovieList from './components/MovieList';
// import Footer from './components/Footer';

// import Greeting from './components/Greeting';
// import Card from './components/Card';


// function App() {
//   return (
//     <div>
//       <Header />
//       <MovieList />
//        <Greeting name="mai" year={3} />
//        <Greeting name="gun" year={2} />
//        <Greeting name="dew" year={1} />
//       <Footer />
//     </div>
//   );
// }

// const students = [
//   { name: 'mai', year: 3 },
//   { name: 'gun', year: 2 },
//   { name: 'dew', year: 1 }
// ];

// function App() {
//   return (
//     <div>

//       <Card title="ประกาศ">
//         <p>สัปดาห์หน้าเรียนเรื่อง <b>State & Forms</b></p>
//         <p>อย่าลืม push การบ้านขึ้น GitHub!</p>
//       </Card>

//       <h1>รายชื่อนักศึกษา</h1>
//       {students.map((s) => (
//         <Greeting key={s.id} name={s.name} year={s.year} />
//       ))}
//     </div>
//   );
// }

// export default App;

import ProfileCard from './components/ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'จิณห์วรา ด้วงช้าง', nickname: 'ไหม',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['โกโก้', 'หมา'] },
  
  { id: 2, name: 'ภานุกร กี่อนุกูล', nickname: 'กัน',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'หมา'] },
  
  { id: 3, name: 'จิราพัชร ด้วงช้าง', nickname: 'ดิว',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาไทย', 'แมว'] },
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
