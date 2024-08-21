import ClientComponent from "./components/client/clientComponent";
import FooterComponent from "./components/footer/footer";
import FooterSiteComponent from "./components/footerSite";
import HomeComponent from "./components/hero/heroComponent";
import StatisticsComponent from "./components/statistics";

export default function Home() {
  return (
    <>
      <HomeComponent />
      <ClientComponent />
      <StatisticsComponent />
      <FooterSiteComponent />
      <FooterComponent />
    </>
  );
}
