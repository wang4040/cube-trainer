/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/




import React, { useEffect, useState } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import './App.css';

import imgAa from './images/Aa.jpg';
import imgAb from './images/Ab.jpg';
import imgE from  './images/E.jpg';
import imgF from  './images/F.jpg';
import imgGa from './images/Ga.jpg';
import imgGb from './images/Gb.jpg';
import imgGc from './images/Gc.jpg';
import imgGd from './images/Gd.jpg';
import imgH from  './images/H.jpg';
import imgJa from './images/Ja.jpg';
import imgJb from './images/Jb.jpg';
import imgNa from './images/Na.jpg';
import imgNb from './images/Nb.jpg';
import imgRa from './images/Ra.jpg';
import imgRb from './images/Rb.jpg';
import imgT from  './images/T.jpg';
import imgUa from './images/Ua.jpg';
import imgUb from './images/Ub.jpg';
import imgV from  './images/V.jpg';
import imgY from  './images/Y.jpg';
import imgZ from  './images/Z.jpg';

import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';
import img5 from './images/5.png';
import img6 from './images/6.png';
import img7 from './images/7.png';
import img8 from './images/8.png';
import img9 from './images/9.png';
import img10 from './images/10.png';
import img11 from './images/11.png';
import img12 from './images/12.png';
import img13 from './images/13.png';
import img14 from './images/14.png';
import img15 from './images/15.png';
import img16 from './images/16.png';
import img17 from './images/17.png';
import img18 from './images/18.png';
import img19 from './images/19.png';
import img20 from './images/20.png';
import img21 from './images/21.png';
import img22 from './images/22.png';
import img23 from './images/23.png';
import img24 from './images/24.png';
import img25 from './images/25.png';
import img26 from './images/26.png';
import img27 from './images/27.png';
import img28 from './images/28.png';
import img29 from './images/29.png';
import img30 from './images/30.png';
import img31 from './images/31.png';
import img32 from './images/32.png';
import img33 from './images/33.png';
import img34 from './images/34.png';
import img35 from './images/35.png';
import img36 from './images/36.png';
import img37 from './images/37.png';
import img38 from './images/38.png';
import img39 from './images/39.png';
import img40 from './images/40.png';
import img41 from './images/41.png';
import img42 from './images/42.png';
import img43 from './images/43.png';
import img44 from './images/44.png';
import img45 from './images/45.png';
import img46 from './images/46.png';
import img47 from './images/47.png';
import img48 from './images/48.png';
import img49 from './images/49.png';
import img50 from './images/50.png';
import img51 from './images/51.png';
import img52 from './images/52.png';
import img53 from './images/53.png';
import img54 from './images/54.png';
import img55 from './images/55.png';
import img56 from './images/56.png';
import img57 from './images/57.png';

const ollImgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21,
  img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34, img35, img36, img37, img38, img39, img40, img41, img42,
  img43, img44, img45, img46, img47, img48, img49, img50, img51, img52, img53, img54, img55, img56, img57];

const pllImgs = [imgAa, imgAb, imgE, imgF, imgGa, imgGb, imgGc, imgGd, imgH, imgJa, imgJb, imgNa, imgNb, imgRa, imgRb, imgT, imgUa, imgUb, imgV, imgY, imgZ ]


function Button() {
  let ollt = document.getElementsByClassName("OllSection").item(0);
  let pllt = document.getElementsByClassName("PllSection").item(0);

  function handleOllClick() {
    pllt.style.display = "none";
    ollt.style.display = "block";
  }
  function handlePllClick() {
    ollt.style.display = "none";
    pllt.style.display = "block";

  }
  return (
      <div>
        <button onClick={handleOllClick}>Show OLL Algorithms</button>{' '}
        <button onClick={handlePllClick}>Show PLL Algorithms</button>
      </div>
  );
}



const App = () => {

  const [olls, setOlls] = useState([]);
  const [plls, setPlls] = useState([]);
  //const [algRequest, setAlgRequest] = useState("");
  const [loading, setLoading] = useState(false);

  const [ollEntries, setOllEntries] = useState(
      JSON.parse(localStorage.getItem("ollEntries")) || []
  );
  const [pllEntries, setPllEntries] = useState(
      JSON.parse(localStorage.getItem("pllEntries")) || []
  );


  const [algList, setAlgList] = useState([]);
  const [algListCaseIndex, setAlgListCaseIndex] = useState(0);
  const [mode, setMode] = useState("");

  const [showOverlay, setShowOverlay] = useState(false);

  const unityContextLocation = "/WebGL/CubeGame_v3/Build"

  const { unityProvider, sendMessage } = useUnityContext({
    loaderUrl: `${unityContextLocation}/CubeGame_v3.loader.js`,
    dataUrl: `${unityContextLocation}/CubeGame_v3.data`,
    frameworkUrl: `${unityContextLocation}/CubeGame_v3.framework.js`,
    codeUrl: `${unityContextLocation}/CubeGame_v3.wasm`,
  });



  /*useEffect(() => {
      localStorage.setItem("ollBackgroundColor", JSON.stringify(ollBackgroundColor));
  }, [ollBackgroundColor]);
  useEffect(() => {
      localStorage.setItem("pllBackgroundColor", JSON.stringify(pllBackgroundColor));
  }, [pllBackgroundColor]);*/

  useEffect(() => {
    setLoading(true);
    fetch('oll')
        .then(response => response.json())
        .then(data => {
          setOlls(data);
          setLoading(false);
        })
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch('pll')
        .then(response => response.json())
        .then(data => {
          setPlls(data);
          setLoading(false);
        })
  }, []);




  //Initialize case lists
  const ollCases = [];
  for (let i = 1; i <= 57; i++) {
    ollCases.push(i.toString());
  }
  const pllCases = ["Aa", "Ab", "F", "Ga", "Gb", "Gc", "Gd", "Ja", "Jb", "Ra", "Rb", "T", "E",
    "Na", "Nb", "V", "Y", "H", "Ua", "Ub", "Z"]

  const ollCaseLists = [];
  const pllCaseLists = [];
  let eachCase = [];
  let caseAlgs = [];


  //Fill pll case lists with lists of algorithms for each case
  //Each list element in the case lists will be a list containing 2 elements, one being the case name
  //the second being the list of algs for the case

  for(let i = 0; i < ollCases.length; i++) { //iterate through cases
    eachCase = [];
    caseAlgs = [];
    eachCase.push(ollCases[i]);
    for(let j = 0; j < olls.length; j++) { //iterate through all algs to search for case algs
      if(olls[j].name === ollCases[i]) {
        caseAlgs.push(olls[j].content);
      }
    }
    for(let k = 0; k < ollEntries.length; k++) { //iterate through local algs to search for case algs
      if(ollEntries[k].name === ollCases[i]) {
        caseAlgs.push(ollEntries[k].content);
      }
    }
    eachCase.push(caseAlgs);
    ollCaseLists.push(eachCase);
  }

  for(let i = 0; i < pllCases.length; i++) { //iterate through cases
    eachCase = [];
    caseAlgs = [];
    eachCase.push(pllCases[i]);
    for(let j = 0; j < plls.length; j++) { //iterate through all algs to search for case algs
      if(plls[j].name === pllCases[i]) {
        caseAlgs.push(plls[j].content);
      }
    }
    for(let k = 0; k < pllEntries.length; k++) { //iterate through local algs to search for case algs
      if(pllEntries[k].name === pllCases[i]) {
        caseAlgs.push(pllEntries[k].content);
      }
    }
    eachCase.push(caseAlgs);
    pllCaseLists.push(eachCase);
  }



  function handleSubmitEntry(event) {
    if(mode === "oll") {
      event.preventDefault();
      const entry1 = ollCases[algListCaseIndex];
      const entry2 = event.target.elements.content.value;
      setOllEntries((prevEntries) => [...prevEntries, { name: entry1, content: entry2 }]);
      algList.push(entry2);
      event.target.reset();
    }else if(mode === "pll") {
      event.preventDefault();
      const entry1 = pllCases[algListCaseIndex];
      const entry2 = event.target.elements.content.value;
      setPllEntries((prevEntries) => [...prevEntries, { name: entry1, content: entry2 }]);
      algList.push(entry2);
      event.target.reset();
    }

  }



  useEffect(() => {
    localStorage.setItem("ollEntries", JSON.stringify(ollEntries));
  }, [ollEntries]);

  useEffect(() => {
    localStorage.setItem("pllEntries", JSON.stringify(pllEntries));
  }, [pllEntries]);



  const [shownOll, setShownOll] = useState(JSON.parse(localStorage.getItem("shownOll")) || Array(ollCases.length).fill(0));
  const [shownPll, setShownPll] = useState(JSON.parse(localStorage.getItem("shownPll")) || Array(pllCases.length).fill(0));

  function setShownAlg(caseIndex, shownIndex) {
    if(mode === "oll") {
      let temp = shownOll;
      temp[caseIndex] = shownIndex;
      setShownOll(temp);
      localStorage.setItem("shownOll", JSON.stringify(shownOll))
      closeOverlay();
    }else if(mode === "pll") {
      let temp = shownPll;
      temp[caseIndex] = shownIndex;
      setShownPll(temp);
      localStorage.setItem("shownPll", JSON.stringify(shownPll))
      closeOverlay();
    }
  }

  /*
  useEffect(() => {
      localStorage.setItem("shownOll", JSON.stringify(shownOll))
  }, [shownOll])

  useEffect(() => {
      localStorage.setItem("shownPll", JSON.stringify(shownPll))
  }, [shownPll])
  */

  function handleRemoveEntry(alg) {
    if(mode === "oll") {
      const name = ollCases[algListCaseIndex];
      const updatedOllEntries = [...ollEntries];
      const updatedAlgList = [...algList];
      let removedFlag = false;
      for(let k = 0; k < ollEntries.length; k++) { //iterate through local algs to search for case algs and remove alg
        if(ollEntries[k].name === name && ollEntries[k].content === alg) {
          updatedOllEntries.splice(k, 1);
          setOllEntries(updatedOllEntries);
          removedFlag = true;
        }
      }
      if(removedFlag) { //only remove from algList if it is a user-defined alg
        for(let i = 0; i < algList.length; i++) { //remove alg from algList as well
          if(algList[i] === alg) {
            updatedAlgList.splice(i, 1);
            setAlgList(updatedAlgList);
            if(shownOll[algListCaseIndex] > i) { //decrement the shownOll index for this case if it is after the removed alg
              setShownAlg(algListCaseIndex, shownOll[algListCaseIndex] - 1);
            }else if(shownOll[algListCaseIndex] === i) { //reset the shownOll index for this case to 0 if it is the one shown
              setShownAlg(algListCaseIndex, 0);
            }
          }
        }
      }else {
        window.alert("Cannot remove default algorithms!")
      }
    }
    else if(mode === "pll") {
      const name = pllCases[algListCaseIndex];
      const updatedPllEntries = [...pllEntries];
      const updatedAlgList = [...algList];
      let removedFlag = false;
      for(let k = 0; k < pllEntries.length; k++) { //iterate through local algs to search for case algs and remove alg
        if(pllEntries[k].name === name && pllEntries[k].content === alg) {
          updatedPllEntries.splice(k, 1);
          setPllEntries(updatedPllEntries);
          removedFlag = true;
        }
      }
      if(removedFlag) { //only remove from algList if it is a user-defined alg
        for(let i = 0; i < algList.length; i++) { //remove alg from algList as well
          if(algList[i] === alg) {
            updatedAlgList.splice(i, 1);
            setAlgList(updatedAlgList);
            if(shownPll[algListCaseIndex] > i) { //decrement the shownPll index for this case if it is after the removed alg
              setShownAlg(algListCaseIndex, shownPll[algListCaseIndex] - 1);
            }else if(shownPll[algListCaseIndex] === i) { //reset the shownPll index for this case to 0 if it is the one shown
              setShownAlg(algListCaseIndex, 0);
            }
          }
        }
      }else {
        window.alert("Cannot remove default algorithms!")
      }
    }

  }

  const [ollBackgroundColor, setOllBackgroundColor] = useState(JSON.parse(localStorage.getItem("ollBackgroundColor")) || Array(ollCases.length).fill(0));
  const [pllBackgroundColor, setPllBackgroundColor] = useState(JSON.parse(localStorage.getItem("pllBackgroundColor")) || Array(pllCases.length).fill(0));
  const colors = ['transparent', 'orange', 'green'];


  if (loading) {
    return <p>Loading...</p>;
  }

  function handleClickDoAlg(algRequest) {
    sendMessage("Cube", "DoAlg", algRequest);
  }

  function handleClear() {
    localStorage.clear();
    window.location.reload(false);
  }

  function openOverlay(currentAlgList, caseIndex, currentMode) {
    setShowOverlay(true);
    setMode(currentMode);
    setAlgListCaseIndex(caseIndex);
    setAlgList(currentAlgList);
  }

  function closeOverlay() {
    setShowOverlay(false);
    //window.location.reload(false);
  }



  function handleClickColor(index, mode) {
    if(mode === "oll") {
      const nextColorIndex = (ollBackgroundColor[index] + 1) % colors.length;
      const updatedOllBackgroundColor = ollBackgroundColor;
      updatedOllBackgroundColor[index] = nextColorIndex;
      localStorage.setItem("ollBackgroundColor", JSON.stringify(updatedOllBackgroundColor));
      setOllBackgroundColor(updatedOllBackgroundColor);
    }else if(mode === "pll") {
      const nextColorIndex = (pllBackgroundColor[index] + 1) % colors.length;
      const updatedPllBackgroundColor = pllBackgroundColor;
      updatedPllBackgroundColor[index] = nextColorIndex;
      localStorage.setItem("pllBackgroundColor", JSON.stringify(updatedPllBackgroundColor));
      setPllBackgroundColor(updatedPllBackgroundColor);
    }
  };

  return (
      <div className="App">
        <header className="App-header">

          <div className="App-intro">

            <h1>Cubing Algorithm Trainer</h1>
            <Button />

            <div className="OllSection"><center>
              <h3>OLL Algorithms</h3>
              <table className="OllTable" >
                <tr>
                  <th>Case</th>
                  <th>Diagram</th>
                  <th>Algorithm</th>
                </tr>
                {
                  ollCaseLists.map((Case, index) => <tr>
                    <td onClick={() => handleClickColor(index, "oll")} style={{backgroundColor: colors[ollBackgroundColor[index]]}}>{Case[0]}{' '}</td>
                    <td><img src={ollImgs[index]} alt="loading failed" style={{ width: '75px', height: '75px', display: 'block'}}/></td>
                    <td onClick={() => openOverlay(Case[1], index, "oll")}>{Case[1][ shownOll[index] ]}</td>
                    <td><button onClick={() => handleClickDoAlg(Case[1][ shownOll[index] ])}>Animate</button></td>
                  </tr> )
                }
              </table><br/>
              <button onClick={handleClear}>Clear</button>
            </center></div>

            <div className="PllSection"><center>
              <h3>PLL Algorithms</h3>
              <table className="PllTable" >
                <tr>
                  <th>Case</th>
                  <th>Diagram</th>
                  <th>Algorithm</th>
                </tr>
                {
                  pllCaseLists.map((Case, index) => <tr>
                    <td onClick={() => handleClickColor(index, "pll")} style={{backgroundColor: colors[pllBackgroundColor[index]]}}>{Case[0]}{' '}</td>
                    <td><img src={pllImgs[index]} alt="loading failed" style={{ width: '75px', height: '75px' }}/></td>
                    <td onClick={() => openOverlay(Case[1], index, "pll")}>{Case[1][ shownPll[index] ]}</td>
                    <td><button onClick={() => handleClickDoAlg(Case[1][ shownPll[index] ])}>Animate</button></td>
                  </tr> )
                }
              </table><br/>
              <button onClick={handleClear}>Clear</button>
            </center></div>


          </div><br/><br/>

          {showOverlay && <div className="overlay"><div className="overlayWindow">
            <br/><header>Case: {pllCases[algListCaseIndex]}</header>
            <ul>
              {algList.map((alg, index) => <li>{alg}<button onClick={() => setShownAlg(algListCaseIndex, index)} style={{ margin: '0 10px' }}>Set Active</button>
                <button onClick={() => handleRemoveEntry(alg)} style={{ margin: '0 10px' }}>Remove</button></li> )}
            </ul>
            <form onSubmit={handleSubmitEntry}>
              <label>Algorithm:</label>{' '}
              <input type="text" name="content" id="inputContent" readOnly={false} disabled={false}/>
              <button type="submit">Add</button>
            </form>
            <button onClick={closeOverlay}>Close</button>
          </div></div>}



        </header>
        <div className="right-div">
          <Unity unityProvider={unityProvider} style={{ width: '40vw', height: '55vh' }}/>
        </div>
      </div>

  );


  //return <Unity unityProvider={unityProvider} />;
}

export default App;

