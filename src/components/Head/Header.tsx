type props = {};

function Header() {
  return (
    <header>
      <div className="top">
        <h1>Vanx</h1>
        <p>Aided with Alan</p>
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
            <h6>Different categories:</h6>
            <p className="order">
              Technology, Sports, Entertainment, Science, General, Business,
              Health
            </p>
          </div>

          <div className="instruction">
            <p className="try">Try saying:</p>
            <p className="order">Give me the latest news in Entertainment</p>
          </div>
        </div>

        <div className="guide guide-blue">
          <h5>To Get News on a Topic in a category</h5>

          <div className="instruction">
            <p className="try">Try saying:</p>
            <p className="order">
              Give me the latest news on Cristiano Ronaldo in Sports
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
