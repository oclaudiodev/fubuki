import "./styles/global.css";

import Nav from "./components/Nav";
import Overlay from "./components/Overlay";

import Hero from "./sections/Hero";
import BioSection from "./sections/BioSection";
import QuoteBanner from "./sections/QuoteBanner";
import TeamsSection from "./sections/TeamsSection";
import ResultsSection from "./sections/ResultsSection";
import AchievementsSection from "./sections/AchievementsSection";
import InfoSection from "./sections/InfoSection";
import Footer from "./sections/Footer";

import colors from "./constants/colors";

const Divider = () => (
  <div
    style={{
      height: 1,
      background: `linear-gradient(90deg, transparent, ${colors.border}, transparent)`,
    }}
  />
);

export default function App() {
  return (
    <div style={{ background: colors.black, minHeight: "100vh" }}>
      <Overlay />
      <Nav />
      <Hero />
      <Divider />
      <BioSection />
      <Divider />
      <QuoteBanner />
      <Divider />
      <TeamsSection />
      <Divider />
      <ResultsSection />
      <Divider />
      <AchievementsSection />
      <Divider />
      <InfoSection />
      <Footer />
    </div>
  );
}
