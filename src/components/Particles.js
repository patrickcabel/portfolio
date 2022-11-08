import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";

const PatriclesComponent = () => {
  const options = useMemo(() => {
    return {
      fullScreen: {
        enable: true,
        zIndex: -1,
      },

      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
      },
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: ["#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000"],
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#b6b2b2",
          },
        },
        opacity: {
          value: 0.5211089197812949,
          random: false,
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1,
            sync: false,
          },
        },
        size: {
          value: 8.017060304327615,
          random: true,
          animation: {
            enable: true,
            speed: 12.181158184520175,
            minimumValue: 0.1,
            sync: false,
          },
        },
        lineLinked: {
          enable: false,
          distance: 150,
          color: "#c8c8c8",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: false,
          straight: false,
          outMode: "bounce",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);
  return <Particles init={particlesInit} options={options} />;
};

export default PatriclesComponent;
