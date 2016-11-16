var React = require("react");
var ReactDOM = require("react-dom");
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var Main = React.createClass({
  render: function() {
    return React.createElement(
      "a", {
        href: "#",
        onTouchTap: this.handleTouchTap,
        onClick: this.handleClick
      },
      "Tap Me"
    );
  },

  handleClick: function(e) {
    console.log("click", e);
  },

  handleTouchTap: function(e) {
    console.log("touchTap", e);
  }
});

ReactDOM.render(React.createElement(Main), document.getElementById("container"));
