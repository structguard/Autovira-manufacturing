// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function Navbar() {
//   const [active, setActive] = useState("Home");

//   const navItems = [
//     { name: "Home", id: "home" },
//     { name: "What We Do", id: "whatwedo" },
//     { name: "Products", id: "products" },
//     // { name: "Services", id: "services" },
//     // { name: "Events", id: "events" },
//     // { name: "Gallery", id: "gallery" },
//     { name: "About", id: "about" },
//     { name: "Contact", id: "contact" }
//   ];

//   const scrollToSection = (id, name) => {
//     setActive(name);
//     const section = document.getElementById(id);
//     section?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <motion.nav
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       style={styles.nav}
//     >
//       {/* LOGO */}
//       <motion.h2
//         style={styles.logo}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3 }}
//       >
//         AUTOVIRA
//       </motion.h2>

//       {/* LINKS */}
//       <div style={styles.links}>
//         {navItems.map((item, index) => (
//           <motion.div
//             key={item.name}
//             style={styles.linkWrapper}
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 + index * 0.08 }}
//             onClick={() => scrollToSection(item.id, item.name)}
//           >
//             <span
//               style={{
//                 ...styles.link,
//                 color: active === item.name ? "#00c6ff" : "#ccc"
//               }}
//             >
//               {item.name}
//             </span>

//             {/* UNDERLINE */}
//             <motion.div
//               style={{
//                 ...styles.underline,
//                 width: active === item.name ? "100%" : "0%"
//               }}
//               whileHover={{ width: "100%" }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.div>
//         ))}
//       </div>
//     </motion.nav>
//   );
// }
// const styles = {
//   nav: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "18px 60px",
//     position: "sticky",
//     top: 0,
//     background: "rgba(10,10,10,0.9)",
//     backdropFilter: "blur(10px)",
//     zIndex: 1000
//   },

//   logo: {
//     color: "#fff",
//     letterSpacing: 3,
//     fontWeight: 700,
//     fontSize: 20,
//     cursor: "pointer"
//   },

//   links: {
//     display: "flex",
//     gap: 28,
//     alignItems: "center"
//   },

//   linkWrapper: {
//     position: "relative",
//     cursor: "pointer"
//   },

//   link: {
//     fontSize: 14,
//     fontWeight: 500,
//     textTransform: "uppercase",
//     transition: "color 0.3s ease"
//   },

//   underline: {
//     height: 2,
//     background: "#00c6ff",
//     position: "absolute",
//     bottom: -6,
//     left: 0
//   }
// };


import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "What We Do", id: "whatwedo" },
    { name: "Products", id: "products" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" }
  ];

  // Changes background blur on page scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id, name) => {
    setActive(name);
    setMenuOpen(false);
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          ...styles.nav,
          background: isScrolled ? "rgba(10, 10, 10, 0.95)" : "rgba(10, 10, 10, 0.75)",
          borderBottom: isScrolled ? "1px solid rgba(212, 175, 55, 0.15)" : "1px solid rgba(255, 255, 255, 0.03)",
          boxShadow: isScrolled ? "0 10px 30px rgba(0, 0, 0, 0.5)" : "none"
        }}
      >
        {/* LOGO WITH GLOW */}
        <motion.h2
          style={styles.logo}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          onClick={() => scrollToSection("home", "Home")}
          whileHover={{ scale: 1.02 }}
        >
          AUTOVIRA<span style={styles.logoDot}></span>
        </motion.h2>

        {/* DESKTOP LINKS */}
        <div style={styles.desktopLinks}>
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              style={styles.linkWrapper}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              onClick={() => scrollToSection(item.id, item.name)}
              className="nav-item"
            >
              <span
                style={{
                  ...styles.link,
                  color: active === item.name ? "#D4AF37" : "#E2E8F0",
                  fontWeight: active === item.name ? "700" : "500"
                }}
              >
                {item.name}
              </span>

              {/* ACTIVE LINE INDICATOR */}
              {active === item.name && (
                <motion.div
                  layoutId="activeIndicator"
                  style={styles.underline}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <motion.div 
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }} 
            style={styles.hamburgerLine} 
          />
          <motion.div 
            animate={{ opacity: menuOpen ? 0 : 1, x: menuOpen ? -10 : 0 }} 
            style={styles.hamburgerLine} 
          />
          <motion.div 
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }} 
            style={styles.hamburgerLine} 
          />
        </div>
      </motion.nav>

      {/* MOBILE DRAWER INTAKE */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
            style={styles.mobileMenu}
          >
            <div style={styles.mobileLinksContainer}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  style={styles.mobileLinkWrapper}
                  onClick={() => scrollToSection(item.id, item.name)}
                >
                  <span
                    style={{
                      ...styles.mobileLink,
                      color: active === item.name ? "#D4AF37" : "#FFFFFF"
                    }}
                  >
                    {item.name}
                  </span>
                  {active === item.name && <div style={styles.mobileActiveDot} />}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 8%",
    position: "sticky",
    top: 0,
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    zIndex: 9000,
    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
    boxSizing: "border-box",
    width: "100%"
  },
  logo: {
    color: "#FFFFFF",
    letterSpacing: "4px",
    fontWeight: "900",
    fontSize: "22px",
    cursor: "pointer",
    margin: 0,
    display: "flex",
    alignItems: "center",
    textShadow: "0 0 20px rgba(255,255,255,0.1)"
  },
  logoDot: {
    width: "6px",
    height: "6px",
    backgroundColor: "#D4AF37",
    borderRadius: "50%",
    marginLeft: "4px",
    boxShadow: "0 0 10px #D4AF37"
  },
  desktopLinks: {
    display: "flex",
    gap: "36px",
    alignItems: "center",
    // Standard CSS media query replacement trick via React state or hiding using window dimensions
    // Controlled visually inside the layout container mapping structure
    [`@media (maxWidth: 991px)`]: {
      display: "none"
    }
  },
  linkWrapper: {
    position: "relative",
    padding: "6px 0",
    cursor: "pointer"
  },
  link: {
    fontSize: "13px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    transition: "color 0.2s ease"
  },
  underline: {
    height: "2px",
    background: "linear-gradient(90deg, #D4AF37, #EAD065)",
    position: "absolute",
    bottom: "-2px",
    left: 0,
    right: 0,
    borderRadius: "2px",
    boxShadow: "0 2px 8px rgba(212,175,55,0.4)"
  },
  hamburger: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "24px",
    height: "14px",
    cursor: "pointer",
    zIndex: 9500
  },
  hamburgerLine: {
    width: "100%",
    height: "2px",
    backgroundColor: "#FFFFFF",
    transformOrigin: "left center",
    borderRadius: "2px"
  },
  mobileMenu: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "280px",
    height: "100vh",
    background: "linear-gradient(135deg, #0A0A0A 0%, #121212 100%)",
    borderLeft: "1px solid rgba(212, 175, 55, 0.2)",
    padding: "100px 40px 40px 40px",
    boxSizing: "border-box",
    zIndex: 8500,
    boxShadow: "-10px 0 40px rgba(0,0,0,0.6)"
  },
  mobileLinksContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "32px"
  },
  mobileLinkWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer"
  },
  mobileLink: {
    fontSize: "16px",
    fontWeight: "600",
    letterSpacing: "1.5px",
    textTransform: "uppercase"
  },
  mobileActiveDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: "#D4AF37",
    boxShadow: "0 0 8px #D4AF37"
  }
};

// Simple global injection to handle responsive layout switches directly via window viewports
if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    @media (max-width: 991px) {
      .nav-item { display: none !important; }
    }
    @media (min-width: 992px) {
      div[style*="hamburger"] { display: none !important; }
    }
  `;
  document.head.appendChild(style);
}
