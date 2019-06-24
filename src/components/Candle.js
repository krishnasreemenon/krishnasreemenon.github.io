import React, { useEffect } from 'react';
import './candle.scss';

const Candle = () => {
  useEffect(() => {
    ////////////////////
    //// AUDIO CODE ////
    ////////////////////
    let audioContext;
    let microphone, meter;

    // Get request for microphone usage
    const requestAudioAccess = () => {
      if (navigator.mediaDevices) {
        navigator.mediaDevices
          .getUserMedia({ audio: true })
          .then(stream => setAudioStream(stream))
          .catch(err =>
            alert('Yo. This requires a microphone to work properly')
          );
      } else alert('Your browser does not support required microphone access.');
    };

    // Set up to record volume
    const setAudioStream = stream => {
      audioContext = new AudioContext();
      microphone = audioContext.createMediaStreamSource(stream);
      meter = window.createAudioMeter(audioContext);

      const filter = audioContext.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 400;

      microphone.connect(filter);
      filter.connect(meter);
    };

    // Check if is blowing
    let lowpass = 0;
    const ALPHA = 0.5,
      THRESHOLD = 0.09;
    const isBlowing = () => {
      lowpass = ALPHA * meter.volume + (1.0 - ALPHA) * lowpass;
      return lowpass > THRESHOLD;
    };

    requestAudioAccess();

    /////////////////////
    //// CANDLE CODE ////
    /////////////////////
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const cw = (canvas.width = 800);
    const ch = (canvas.height = 400);

    const particles = [];
    const MAX_PART_COUNT = 100;

    const REIGNITE_RATE = 2; // rate at which flame will recover
    const MAX_PART_DOWNTIME = 15; // max limit at which smothered flame will recover

    const rand = (min, max) => min + Math.random() * (max - min);

    // Fire Particle
    class FlameParticle {
      constructor(x = cw / 2, y = ch / 2) {
        this.radius = 15;
        this.speed = { x: rand(-0.5, 0.5), y: 2.5 };
        this.life = rand(50, 100);
        this.alpha = 0.5;

        this.x = x;
        this.y = y;
        this.curAlpha = this.alpha;
        this.curLife = this.life;
      }

      update = () => {
        if (this.curLife <= 90) {
          this.radius -= Math.min(this.radius, 0.25);
          this.curAlpha -= 0.005;
        }

        if (microphone && isBlowing())
          this.x += rand(-meter.volume, meter.volume) * 50;

        this.curLife -= this.speed.y;
        this.y -= this.speed.y;
        this.draw();
      };

      draw = () => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        ctx.fillStyle = `rgba(254, 252, 207, ${this.curAlpha})`;
        ctx.fill();
        ctx.closePath();
      };
    }

    // Flame Base
    class FlameBase {
      update = (this.draw = () => {
        ctx.beginPath();
        ctx.arc(cw / 2, ch / 2, 14, Math.PI * 2, false);
        ctx.fillStyle = 'rgba(185, 125, 45, 0.4)';
        ctx.fill();
        ctx.closePath();
      });
    }

    ////////////////////
    let base = new FlameBase();
    let particleCount = MAX_PART_COUNT;

    const updateParticles = () => {
      console.log({ particles });

      for (let i = 0; i < particleCount; i++) {
        if (particles[i] && particles[i].curLife < 0)
          particles[i] = new FlameParticle();
        if (particles[i]) {
          particles[i].update();
        }
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, cw, ch);

      // Smother flame if user is blowing
      if (microphone && isBlowing())
        if (particleCount > -MAX_PART_DOWNTIME) particleCount -= 1;

      // draw flame
      updateParticles();

      // draw base
      base.update();
    };

    // Initial particle generation
    for (let i = 0; i < MAX_PART_COUNT; i++)
      particles.push(new FlameParticle());

    // Interval to recover flames if smothered
    setInterval(() => {
      if (particleCount < MAX_PART_COUNT) particleCount += REIGNITE_RATE;
    }, 200);

    animate();
  }, []);
  return (
    <div className="candle">
      <canvas id="canvas" />
      <svg
        id="candle"
        viewBox="0 0 141.166 136.763"
        height="516.898"
        width="533.54"
      >
        <defs>
          <linearGradient id="b">
            <stop offset="0" stopColor="#321007" />
            <stop offset=".294" stopColor="#7e4417" />
            <stop offset=".542" stopColor="#c0752d" />
            <stop offset="1" stopColor="#f7ef6f" />
          </linearGradient>
          <linearGradient id="c">
            <stop offset="0" stopColor="#bb9c46" stopOpacity=".212" />
            <stop offset=".222" stopColor="#433819" stopOpacity="0" />
            <stop offset="1" stopColor="#020201" stopOpacity=".192" />
          </linearGradient>
          <linearGradient
            gradientTransform="matrix(1 0 0 1.27083 0 -42.037)"
            gradientUnits="userSpaceOnUse"
            y2="157"
            x2="325.857"
            y1="138.104"
            x1="325.857"
            id="j"
          />
          <linearGradient id="a">
            <stop offset="0" stopColor="#7e4417" stopOpacity="0" />
            <stop offset="1" stopColor="#220404" />
          </linearGradient>
          <radialGradient
            id="h"
            cx="322.264"
            cy="150.306"
            fx="322.264"
            fy="150.306"
            r="25.495"
            gradientTransform="matrix(8.6617 0 0 2.52296 -2469.086 -221.95)"
            gradientUnits="userSpaceOnUse"
          />
          <radialGradient
            id="i"
            cx="1330.067"
            cy="1011.201"
            fx="1329.597"
            fy="991.312"
            r="65.761"
            gradientTransform="matrix(.40238 -.0005 .00014 .11177 -213.295 -9.579)"
            gradientUnits="userSpaceOnUse"
          />
          <radialGradient
            id="g"
            cx="321.813"
            cy="87.115"
            fx="321.813"
            fy="87.115"
            r="43.354"
            gradientTransform="matrix(1.0667 0 0 1.0667 -194.42 43.2)"
            gradientUnits="userSpaceOnUse"
          />
          <linearGradient id="d">
            <stop offset="0" stopColor="#58450a" />
            <stop offset="1" stopColor="#58450a" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="e"
            cx="321.813"
            cy="87.115"
            fx="321.813"
            fy="87.115"
            r="28.999"
            gradientTransform="translate(-170.83 66.743)"
            gradientUnits="userSpaceOnUse"
          />
          <radialGradient
            id="f"
            cx="321.813"
            cy="87.115"
            fx="321.813"
            fy="87.115"
            r="59.505"
            gradientTransform="matrix(1.18617 0 0 1.09185 -232.869 39.512)"
            gradientUnits="userSpaceOnUse"
          />
        </defs>
        <g transform="translate(-78.274 -69.658)">
          <ellipse
            cx="148.857"
            cy="134.629"
            rx="70.583"
            ry="64.97"
            fill="url(#f)"
            paintOrder="stroke fill markers"
          />
          <ellipse
            ry="46.246"
            rx="46.246"
            cy="136.125"
            cx="148.857"
            opacity=".149"
            fill="url(#g)"
            paintOrder="stroke fill markers"
          />
          <g transform="translate(-172.956 49.01)">
            <path
              d="M321.421 92.595c-.63 0-1.23.014-1.818.034-13.035.363-22.33 3.516-23.017 8.509-.73 5.299-.09 12.27-.022 18.442l.466 37.363h49.407l.466-37.363c.077-6.172.708-13.143-.022-18.442-.688-4.993-9.982-8.146-23.017-8.509a51.726 51.726 0 0 0-1.818-.034l-.313.002-.312-.002z"
              fill="url(#h)"
              paintOrder="stroke fill markers"
            />
            <path
              d="M303.332 104.585s-1.042-.75-1.601-.251c-.56.499.173.971.173.971 4.559 2.327 11.72 3.6 19.29 3.602a65.665 65.665 0 0 0 4.141-.133s.575-.061.549-.586c-.026-.525-.83-.477-.83-.477-.972.044-1.949.074-2.929.074-7.27-.002-14.001-1.109-18.793-3.2zM342.298 103.62c-2.599 1.555-4.753 2.376-7.198 2.833 0 0-1.231-.034-1.396.697-.165.731.701.692.701.692 2.892-.409 6.667-1.573 8.635-3.223.323-.187.446-.602.234-.887-.211-.286-.72-.26-.976-.111z"
              fill="#fdfada"
              fillOpacity=".278"
              paintOrder="stroke fill markers"
            />
            <ellipse
              cx="322.045"
              cy="101.359"
              rx="21.673"
              ry="6.409"
              fill="#daaa49"
              paintOrder="stroke fill markers"
            />
            <ellipse
              cx="322.045"
              cy="102.748"
              rx="16.043"
              ry="3.974"
              fill="#e9dc94"
              fillOpacity=".427"
              paintOrder="stroke fill markers"
            />
            <path
              d="M322.045 94.95c-11.97 0-21.673 2.87-21.673 6.41.007.517.228 1.033.655 1.535 2.381-3.21 11.054-5.119 21.018-5.123 9.96.004 18.63 1.91 21.018 5.118.426-.5.646-1.015.655-1.53 0-3.54-9.703-6.41-21.673-6.41z"
              fill="url(#i)"
              paintOrder="stroke fill markers"
            />
            <path
              fill="url(#j)"
              paintOrder="stroke fill markers"
              d="M297.03 132.83h49.407v24.581H297.03z"
            />
            <ellipse
              ry="2.844"
              rx="10.578"
              cy="102.748"
              cx="322.045"
              fill="#e9dc94"
              fillOpacity=".427"
              paintOrder="stroke fill markers"
            />
            <path
              d="M323.91 101.848c.115 1.828-2.09 1.471-2.879 1.46-.083-.002-.159-.007-.241-.01 1.746 1.43 5.034-.104 3.12-1.45z"
              fill="#ac7736"
              fillOpacity=".525"
              paintOrder="stroke fill markers"
            />
            <path
              d="M322.045 94.285c.483 0 .85.493.871 1.105l.234 6.799c.021.612-.493.824-1.105.824s-1.126-.212-1.105-.824l.234-6.8c.021-.611.389-1.104.871-1.104z"
              fill="#181818"
              paintOrder="stroke fill markers"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Candle;
