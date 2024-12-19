import mainData from "../data/config.json";
import faqData from "../data/faq.json";
import scheduleData from "../data/schedule.json";
import sessionsData from "../data/sessions.json";
import speakersData from "../data/speakers.json";
import sponsorsData from "../data/sponsors.json";
import teamData from "../data/team.json";
import organizersData from "../data/organizers.json";
import gdgleadsData from "../data/gdg-leads.json";
import cocData from "../data/coc.json";
import navbarData from "../data/navbar.json";
import track1schedule from "../data/track1schedule.json"
import track2schedule from "../data/track2schedule.json"
import finalschedule from '../data/finalschedule.json'

export const useJSONData = () => {
  return {
    mainData,
    faqData,
    scheduleData,
    finalschedule,
    sessionsData,
    track1schedule,
    track2schedule,
    speakersData,
    sponsorsData,
    teamData,
    cocData,
    navbarData,
    organizersData,
    gdgleadsData
  };
};
