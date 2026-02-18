export default function Tabs({ tabs, activeTab, setActiveTab } : { tabs: { id: string; icon: string }[]; activeTab: string; setActiveTab: (id: string) => void }) {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab ${activeTab === tab.id ? "active" : ""}`}
          onClick={() => setActiveTab(tab.id)}
        >
          <span className="tab-icon">{tab.icon}</span>
        </button>
      ))}
    </div>
  );
}
