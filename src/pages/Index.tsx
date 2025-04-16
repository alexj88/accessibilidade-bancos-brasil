
import Header from "@/components/Header";
import AccessibilityRanking from "@/components/AccessibilityRanking";
import Footer from "@/components/Footer";
import WcagLevelsInfo from "@/components/WcagLevelsInfo";
import AccessibilityStats from "@/components/AccessibilityStats";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <AccessibilityStats />
          <WcagLevelsInfo />
          <AccessibilityRanking />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
