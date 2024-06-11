// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./App.scss";
import logoImage from "./assets/images/グループ 13.png";
import contentLeftImage1 from "./assets/images/グループ 40.png";
import contentLeftImage2 from "./assets/images/グループ 44.png";
import contentRightImage from "./assets/images/fav_hp-05.png";

function App() {
  return (
    <div className="introduce">
      <div className="header">
        <div className="logo">
          <img src={logoImage} className="logo-image" alt="logo" />
        </div>
        <div className="navbar">
          <div>HOME</div>
          <div>新規会員登録</div>
          <div>会社概要</div>
          <div>お知らせ</div>
          <button className="button__header">お問い合わせ</button>
        </div>
      </div>
      <div className="introduce__content-left">
        <div className="content-1">Dear Partner_</div>
        <div className="content-2">
          大切な家族が
          <br />
          安心して
          <br />
          暮らせる未来へ
        </div>
        <div className="content-3">
          飼い主同⼠の⽀え合い
          <br />
          ペットコミュニティ -FAV-
        </div>
        <div className="introduce__content__image">
          <img
            src={contentLeftImage1}
            className="introduce__content__image-1"
            alt="logo"
          />
          <img
            src={contentLeftImage2}
            className="introduce__content__image-2"
            alt="logo"
          />
        </div>
        <div className="content-4">COMING SOON…</div>
      </div>
      <div className="introduce__content-right">
        <div className="content-1">
          2024年上旬
          <br />
          リリース予定!
        </div>
        <div className="content-2">
          ※リリース開始時期は前後する可能性がございます。
        </div>
        <img
          src={contentRightImage}
          className="content-right__image"
          alt="logo"
        />
      </div>
    </div>
  );
}

export default App;
