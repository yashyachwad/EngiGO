// import React, { useEffect } from "react";


// const SmokeTrail = () => {
//   useEffect(() => {
//     const createSmoke = (x, y) => {
//       const smoke = document.createElement("span");
//       smoke.className = "smoke";
//       smoke.style.left = `${x}px`;
//       smoke.style.top = `${y}px`;
//       document.body.appendChild(smoke);

//       setTimeout(() => {
//         smoke.remove();
//       }, 500); // remove after 1s
//     };

//     const handleMove = (e) => {
//       createSmoke(e.pageX, e.pageY);
//     };

//     window.addEventListener("mousemove", handleMove);
//     return () => window.removeEventListener("mousemove", handleMove);
//   }, []);

//   return null;
// };

// export default SmokeTrail;






import React, { useEffect } from "react";

const SmokeTrail = () => {
  useEffect(() => {
    let lastX = 0, lastY = 0;
    let isFirst = true;

    const handleMove = (e) => {
      if (isFirst) {
        lastX = e.pageX;
        lastY = e.pageY;
        isFirst = false;
        return;
      }

      const dx = e.pageX - lastX;
      const dy = e.pageY - lastY;
      const distance = Math.hypot(dx, dy);
      const steps = Math.max(1, Math.floor(distance / 5));

      for (let i = 0; i < steps; i++) {
        const x = lastX + (dx / steps) * i;
        const y = lastY + (dy / steps) * i;

        const smoke = document.createElement("span");
        smoke.className = "smoke";
        smoke.style.left = `${x}px`;
        smoke.style.top = `${y}px`;
        document.body.appendChild(smoke);

        setTimeout(() => smoke.remove(), 500);
      }

      lastX = e.pageX;
      lastY = e.pageY;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return null;
};

export default SmokeTrail;
