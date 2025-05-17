import { AboutGaia } from '../aboutGaia/aboutGaia';
import { SustainabilityPillars } from './sustaintabilityPillars/sustaintabilityPillars.jsx';
import { AboutResearch } from '../texts/texts';
import { DecorationImage } from '../images/images';
import './sectionAbout.css';

export const SectionAbout = () => {
  return (
    <section className="sectionAbout">
      <DecorationImage />
      <AboutGaia />
      <AboutResearch />
      <SustainabilityPillars />
    </section>
  );
};
