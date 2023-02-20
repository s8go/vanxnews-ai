type props = {};

function Header() {
  return (
    <header>
      <div className="top">
        <h1>Vanx</h1>
        <p>Aided powered by AI</p>
      </div>

      <div className="bottom">
        <div className="guide guide-yellow">
          <h5>To Get Latest News</h5>

          <div className="instruction">
            <p className="try">Try saying:</p>
            <p className="order">Give me the latest news</p>
          </div>
        </div>

        <div className="guide guide-red">
          <h5>To Get News By A Topic</h5>

          <div className="instruction">
            <p className="try">Try saying:</p>
            <p className="eg">Give me the latest news on Ronaldo</p>
          </div>
        </div>

        <div className="guide guide-green">
          <h5>To Get News By Categories</h5>

          <div className="instruction">
            <p>Different categories:</p>
            <p className="order">
            General, Nation, Sports, Entertainment, Science, Business,
              Health
            </p>
          </div>

          <div className="instruction">
            <p className="try">Try saying:</p>
            <p className="order">Give me the latest news in Entertainment</p>
          </div>
        </div>

        
      </div>
    </header>
  );
}

export default Header;