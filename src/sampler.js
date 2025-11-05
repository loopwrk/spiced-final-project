import React, { useState, useEffect } from "react";
import * as Tone from "tone";
import App from './app'
// import {showModal} from './app'

export default function Sampler() {
const [showModalValue, setShowModalValue] = useState(true);
const [keyPressAnimation, storeKeyPressAnimation] = useState();
const [keyPressAnimation2, storeKeyPressAnimation2] = useState();
const [keyPressAnimation3, storeKeyPressAnimation3] = useState();
const [keyPressAnimation4, storeKeyPressAnimation4] = useState();
const [keyPressAnimation5, storeKeyPressAnimation5] = useState();
const [keyPressAnimation6, storeKeyPressAnimation6] = useState();
const [keyPressAnimation7, storeKeyPressAnimation7] = useState();
const [keyPressAnimation8, storeKeyPressAnimation8] = useState();
const [keyPressAnimation9, storeKeyPressAnimation9] = useState();
const [keyPressAnimation10, storeKeyPressAnimation10] = useState();
const [keyPressAnimation11, storeKeyPressAnimation11] = useState();
const [keyPressAnimation12, storeKeyPressAnimation12] = useState();
const [keyPressAnimation13, storeKeyPressAnimation13] = useState();
const [keyPressAnimation14, storeKeyPressAnimation14] = useState();
const [keyPressAnimation15, storeKeyPressAnimation15] = useState();
const [keyPressAnimation16, storeKeyPressAnimation16] = useState();
  const [startMetronome, setStartMetronome] = useState(false);
  const [playButton, setPlayButton] = useState("/images/play-button.png")
  const [bpm, setBpm] = useState(375);
  const [defaultBpm, setDefaultBpm] = useState("750.5");
  const [showBpm, setShowBpm] = useState("80");
  const [distortionValue, setDistortionValue] = useState(0);
  const [reverbValue, setReverbValue] = useState(0);
  const [pitchValue, setPitchValue] = useState(0);
  const [pingPongValue, setPingPongValue] = useState(0);
  const [sample1Value, setSample1Value] = useState();
  const [timer, setTimer] = useState();

  var distortion = new Tone.Distortion(distortionValue).toMaster();

  var pingPong = new Tone.PingPongDelay({
    delayTime: pingPongValue,
    maxDelayTime: 1
  }).toMaster();

  var reverb = new Tone.JCReverb({
    roomSize: reverbValue,
    wet: reverbValue
  }).toMaster();

  var pitch = new Tone.PitchShift({
    pitch: pitchValue,
    windowSize: 0.05,
    delayTime: 0,
    feedback: 0
  }).toMaster();

  const snareLoop = e => {
    if (startMetronome === false) {
      setStartMetronome(true);
      setPlayButton("/images/stop.png")
      var sampler = new Tone.Sampler(
        {
          C3: "/samples/metronome2.wav"
        },
        function timeout() {
          setTimer(
            setTimeout(function() {
              sampler.triggerAttack("C3");
              timeout();
            }, bpm)
          );
        }
      ).toMaster();
  } else if (startMetronome === true) {
      clearTimeout(timer);
      setStartMetronome(false);
      setPlayButton("/images/play-button.png")
    }
  };

  const sample1 = e => new Tone.Sampler(
    {
       C3: "/samples/kick.wav"
    },
    function() {
      sampler.triggerAttack("C3");
    }
  ).chain(distortion, reverb, pitch, pingPong);

  //KEYPRESSES

  const keyUp = e => {
      if (e.key === "1") {
      storeKeyPressAnimation("")
  };

  if (e.key === "2") {
  storeKeyPressAnimation2("")
};

if (e.key === "3") {
storeKeyPressAnimation3("")
};

if (e.key === "4") {
storeKeyPressAnimation4("")
};

if (e.key === "q") {
storeKeyPressAnimation5("")
};

if (e.key === "w") {
storeKeyPressAnimation6("")
};

if (e.key === "e") {
storeKeyPressAnimation7("")
};

if (e.key === "r") {
storeKeyPressAnimation8("")
};

if (e.key === "a") {
storeKeyPressAnimation9("")
};

if (e.key === "s") {
storeKeyPressAnimation10("")
};

if (e.key === "d") {
storeKeyPressAnimation11("")
};

if (e.key === "f") {
storeKeyPressAnimation12("")
};

if (e.key === "z") {
storeKeyPressAnimation13("")
};

if (e.key === "x") {
storeKeyPressAnimation14("")
};

if (e.key === "c") {
storeKeyPressAnimation15("")
};

if (e.key === "v") {
storeKeyPressAnimation16("")
};

      }

  const keyPress = e => {
    if (e.key === "1") {
      var sampler = new Tone.Sampler(
        {
          C3: "/samples/kick.wav"
        },
        function() {
        storeKeyPressAnimation("key-press-animation")
          sampler.triggerAttack("C3");

        }
      ).chain(distortion, reverb, pitch, pingPong);
    }

    if (e.key === "2") {
      var sampler = new Tone.Sampler(
        {
          C3: "/samples/snare-g.wav"
        },
        function() {
            storeKeyPressAnimation2("key-press-animation")
          sampler.triggerAttack("C3");
        }
      ).chain(distortion, reverb, pitch, pingPong);
    }

    if (e.key === "3") {
      var sampler = new Tone.Sampler(
        {
          C3: "/samples/clap.wav"
        },
        function() {
            storeKeyPressAnimation3("key-press-animation")
          sampler.triggerAttack("C3");
        }
      ).chain(distortion, reverb, pitch, pingPong);
    }

    if (e.key === "4") {
      var sampler = new Tone.Sampler(
        {
          C3: "/samples/tom1.wav"
        },
        function() {
            storeKeyPressAnimation4("key-press-animation")
          sampler.triggerAttack("C3");
        }
      ).chain(distortion, reverb, pitch, pingPong);
    }

    if (e.key === "q") {
      var sampler = new Tone.Sampler(
        {
          C3: "/samples/closehihat.wav"
        },
        function() {
            storeKeyPressAnimation5("key-press-animation")
          sampler.triggerAttack("C3");
        }
      ).chain(distortion, reverb, pitch, pingPong);
    }

    if (e.key === "w") {
      var sampler = new Tone.Sampler(
        {
          C3: "/samples/openhihat.wav"
        },
        function() {
            storeKeyPressAnimation6("key-press-animation")
          sampler.triggerAttack("C3");
        }
      ).chain(distortion, reverb, pitch, pingPong);
    }

    if (e.key === "e") {
      var sampler = new Tone.Sampler(
        {
          C3: "/samples/crash.wav"
        },
        function() {
            storeKeyPressAnimation7("key-press-animation")
          sampler.triggerAttack("C3");
        }
      ).chain(distortion, reverb, pitch, pingPong);
    }

    if (e.key === "r") {
      var sampler = new Tone.Sampler(
        {
          C3: "/samples/ride.wav"
        },
        function() {
            storeKeyPressAnimation8("key-press-animation")
          sampler.triggerAttack("C3");
        }
      ).chain(distortion, reverb, pitch, pingPong);
    }

    if (e.key === "a") {
      var sampler = new Tone.Sampler(
        {
          C3: "/samples/marcus-1.wav"
        },
        function() {
            storeKeyPressAnimation9("key-press-animation")
          sampler.triggerAttack("C3");
        }
      ).chain(distortion, reverb, pitch, pingPong);
    }

    if (e.key === "s") {
      var sampler = new Tone.Sampler(
        {
          C3: "/samples/marcus-2.wav"
        },
        function() {
            storeKeyPressAnimation10("key-press-animation")
          sampler.triggerAttack("C3");
        }
      ).chain(distortion, reverb, pitch, pingPong);
    }

    if (e.key === "d") {
      var sampler = new Tone.Sampler(
        {
          C3: "/samples/marcus-3.wav"
        },
        function() {
            storeKeyPressAnimation11("key-press-animation")
          sampler.triggerAttack("C3");
        }
      ).chain(distortion, reverb, pitch, pingPong);
    }

    if (e.key === "f") {
      var sampler = new Tone.Sampler(
        {
          C3: "/samples/marcus-4.wav"
        },
        function() {
            storeKeyPressAnimation12("key-press-animation")
          sampler.triggerAttack("C3");
        }
      ).chain(distortion, reverb, pitch, pingPong);
    }

    if (e.key === 'z') {
      var sampler = new Tone.Sampler(
        {
          C3: "/samples/marcus-5.wav"
        },
        function() {
            storeKeyPressAnimation13("key-press-animation")
          sampler.triggerAttack("C3");
        }
      ).chain(distortion, reverb, pitch, pingPong);
    }

    if (e.key === 'x') {
      var sampler = new Tone.Sampler(
        {
          C3: "/samples/marcus-6.wav"
        },
        function() {
            storeKeyPressAnimation14("key-press-animation")
          sampler.triggerAttack("C3");
        }
      ).chain(distortion, reverb, pitch, pingPong);
    }

    if (e.key === 'c') {
      var sampler = new Tone.Sampler(
        {
          C3: "/samples/marcus-7.wav"
        },
        function() {
            storeKeyPressAnimation15("key-press-animation")
          sampler.triggerAttack("C3");
        }
      ).chain(distortion, reverb, pitch, pingPong);
    }

    if (e.key === 'v') {
      var sampler = new Tone.Sampler(
        {
          C3: "/samples/marcus-8.wav"
        },
        function() {
            storeKeyPressAnimation16("key-press-animation")
          sampler.triggerAttack("C3");
        }
      ).chain(distortion, reverb, pitch, pingPong);
    }

  if (e.key === "9") {
    snareLoop();
  }
};

  const onUserChange = e => {
    setBpm(parseInt(e.target.value, 10) * 4.69);
    setShowBpm(String(240 - e.target.value));

  };

  const onUserChangeDistortion = e => {
    setDistortionValue(parseInt(e.target.value, 10) / 10);
  };

  const onUserChangeReverb = e => {
    setReverbValue(parseInt(e.target.value, 10) / 10);
  };

  const onUserChangePitch = e => {
    setPitchValue(parseInt(e.target.value, 10));
  };

  const onUserChangePingPong = e => {
    setPingPongValue(parseInt(e.target.value, 10) / 10);
  };

    const playSample1 = e => {
        var sampler = new Tone.Sampler(
          {
            C3: "/samples/kick.wav"
          },
          function() {
            sampler.triggerAttack("C3");
          }
        ).chain(distortion, reverb, pitch, pingPong);
    };

    const playSample2 = e => {
        var sampler = new Tone.Sampler(
          {
            C3: "/samples/snare.wav"
          },
          function() {
            sampler.triggerAttack("C3");
          }
        ).chain(distortion, reverb, pitch, pingPong);
    };

    const playSample3 = e => {
        var sampler = new Tone.Sampler(
          {
            C3: "/samples/clap.wav"
          },
          function() {
            sampler.triggerAttack("C3");
          }
        ).chain(distortion, reverb, pitch, pingPong);
    };

    const playSample4 = e => {
        var sampler = new Tone.Sampler(
          {
            C3: "/samples/tom1.wav"
          },
          function() {
            sampler.triggerAttack("C3");
          }
        ).chain(distortion, reverb, pitch, pingPong);
    };

    const playSample5 = e => {
        var sampler = new Tone.Sampler(
          {
            C3: "/samples/closehihat.wav"
          },
          function() {
            sampler.triggerAttack("C3");
          }
        ).chain(distortion, reverb, pitch, pingPong);
    };

    const playSample6 = e => {
        var sampler = new Tone.Sampler(
          {
            C3: "/samples/openhihat.wav"
          },
          function() {
            sampler.triggerAttack("C3");
          }
        ).chain(distortion, reverb, pitch, pingPong);
    };

    const playSample7 = e => {
        var sampler = new Tone.Sampler(
          {
            C3: "/samples/crash.wav"
          },
          function() {
            sampler.triggerAttack("C3");
          }
        ).chain(distortion, reverb, pitch, pingPong);
    };

    const playSample8 = e => {
        var sampler = new Tone.Sampler(
          {
            C3: "/samples/ride.wav"
          },
          function() {
            sampler.triggerAttack("C3");
          }
        ).chain(distortion, reverb, pitch, pingPong);
    };

    const playSample9 = e => {
        var sampler = new Tone.Sampler(
          {
            C3: "/samples/marcus-1.wav"
          },
          function() {
            sampler.triggerAttack("C3");
          }
        ).chain(distortion, reverb, pitch, pingPong);
    };

    const playSample10 = e => {
        var sampler = new Tone.Sampler(
          {
            C3: "/samples/marcus-2.wav"
          },
          function() {
            sampler.triggerAttack("C3");
          }
        ).chain(distortion, reverb, pitch, pingPong);
    };

    const playSample11 = e => {
        var sampler = new Tone.Sampler(
          {
            C3: "/samples/marcus-3.wav"
          },
          function() {
            sampler.triggerAttack("C3");
          }
        ).chain(distortion, reverb, pitch, pingPong);
    };

    const playSample12 = e => {
        var sampler = new Tone.Sampler(
          {
            C3: "/samples/marcus-4.wav"
          },
          function() {
            sampler.triggerAttack("C3");
          }
        ).chain(distortion, reverb, pitch, pingPong);
    };

    const playSample13 = e => {
        var sampler = new Tone.Sampler(
          {
            C3: "/samples/marcus-5.wav"
          },
          function() {
            sampler.triggerAttack("C3");
          }
        ).chain(distortion, reverb, pitch, pingPong);
    };

    const playSample14 = e => {
        var sampler = new Tone.Sampler(
          {
            C3: "/samples/marcus-6.wav"
          },
          function() {
            sampler.triggerAttack("C3");
          }
        ).chain(distortion, reverb, pitch, pingPong);
    };

    const playSample15 = e => {
        var sampler = new Tone.Sampler(
          {
            C3: "/samples/marcus-7.wav"
          },
          function() {
            sampler.triggerAttack("C3");
          }
        ).chain(distortion, reverb, pitch, pingPong);
    };

    const playSample16 = e => {
        var sampler = new Tone.Sampler(
          {
            C3: "/samples/marcus-8.wav"
          },
          function() {
            sampler.triggerAttack("C3");
          }
        ).chain(distortion, reverb, pitch, pingPong);
    };

  useEffect(() => {
  }, []);

  useEffect(() => {
    document.onkeydown = keyPress;
  });

  useEffect(() => {
    document.onkeyup = keyUp;
  });

  return (
    <React.Fragment>
      <div className="sampler-modal">
      <h1>SAMPLER</h1>
        <div className="pad-container">

                        <div
                            onClick={playSample1} id={keyPressAnimation}
                            className={["pad1", "sampler-pad1"].join(" ")}
                        ><h3>1</h3></div>

                        <div onClick={playSample2} id={keyPressAnimation2}  className={["pad2", "sampler-pad1", {keyPressAnimation}].join(" ")}>
                            <h3>2</h3>
                        </div>
                        <div onClick={playSample3} id={keyPressAnimation3} className={["pad3", "sampler-pad1"].join(" ")}>
                            <h3>3</h3>
                        </div>
                        <div onClick={playSample4} id={keyPressAnimation4} className={["pad4", "sampler-pad1"].join(" ")}>
                            <h3>4</h3>
                        </div>
                        <div onClick={playSample5} id={keyPressAnimation5} className={["pad5", "sampler-pad2"].join(" ")}>
                            <h3>Q</h3>
                        </div>
                        <div onClick={playSample6} id={keyPressAnimation6} className={["pad6", "sampler-pad2"].join(" ")}>
                            <h3>W</h3>
                        </div>
                        <div onClick={playSample7} id={keyPressAnimation7} className={["pad7", "sampler-pad2"].join(" ")}>
                            <h3>E</h3>
                        </div>
                        <div onClick={playSample8} id={keyPressAnimation8} className={["pad8", "sampler-pad2"].join(" ")}>
                            <h3>R</h3>
                        </div>
                        <div onClick={playSample9} id={keyPressAnimation9} className={["pad9", "sampler-pad3"].join(" ")}>
                            <h3>A</h3>
                        </div>
                        <div onClick={playSample10} id={keyPressAnimation10} className={["pad10", "sampler-pad3"].join(" ")}>
                            <h3>S</h3>
                        </div>
                        <div onClick={playSample11} id={keyPressAnimation11} className={["pad11", "sampler-pad3"].join(" ")}>
                            <h3>D</h3>
                        </div>
                        <div onClick={playSample12} id={keyPressAnimation12} className={["pad12", "sampler-pad3"].join(" ")}>
                            <h3>F</h3>
                        </div>
                        <div onClick={playSample13} id={keyPressAnimation13} className={["pad13", "sampler-pad4"].join(" ")}>
                            <h3>Z</h3>
                        </div>
                        <div onClick={playSample14} id={keyPressAnimation14} className={["pad14", "sampler-pad4"].join(" ")}>
                            <h3>X</h3>
                        </div>
                        <div onClick={playSample15} id={keyPressAnimation15} className={["pad15", "sampler-pad4"].join(" ")}>
                            <h3>C</h3>
                        </div>
                        <div onClick={playSample16} id={keyPressAnimation16} className={["pad16", "sampler-pad4"].join(" ")}>
                            <h3>V</h3>
                        </div>
                    </div>

        <h3 className="bpm-label"> {showBpm}</h3>
        <h3 className="metronome-label">METRONOME</h3>
        <h3 className="set-bpm-label">SET BPM</h3>
        <h3 className="start-stop-label">START<br></br>STOP</h3>


        <div className="metronome-play-button" onClick={snareLoop}> <img
                     src={playButton}
         /></div>

        <div className="set-bpm">
          <input
            onChange={onUserChange}
            defaultValue="160"
            type="range"
            name="points"
            min="80"
            max="160"
          />
        </div>
        <h3 className="distortion-label">DISTORTION</h3>
        <div className="set-distortion">
          <input
            onChange={onUserChangeDistortion}
            defaultValue="0"
            type="range"
            name="points"
            min="0"
            max="10"
          />
        </div>
        <h3 className="reverb-label">REVERB</h3>
        <div className="set-reverb">
          <input
            onChange={onUserChangeReverb}
            defaultValue="0"
            type="range"
            name="points"
            min="0"
            max="5"
          />
        </div>
        <h3 className="pitch-label">PITCH</h3>
        <div className="set-pitch">
          <input
            onChange={onUserChangePitch}
            defaultValue="-40"
            type="range"
            name="points"
            min="-40"
            max="40"
          />
        </div>
        <h3 className="pingpong-label">PINGPONG DELAY</h3>
        <div className="set-pingpong">
          <input
            onChange={onUserChangePingPong}
            defaultValue="0"
            type="range"
            name="points"
            min="0"
            max="5"
          />
        </div>
      </div>
    </React.Fragment>
  );
}
