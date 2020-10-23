import * as React from "react";
import * as ReactDOM from "react-dom";

const WheresThis: React.FC = (): React.ReactElement => {
  const showMap = () => {
    document.getElementById("mapWrapper").classList.add("show");
  };

  React.useEffect(() => {
    document.getElementById("showMapWrapper").style.display = "none";
  });

  const close = () => {
    document.getElementById("mapWrapper").classList.remove("show");
    ReactDOM.unmountComponentAtNode(
      document.getElementById("mapWrapper").parentElement
    );
    document.getElementById("showMapWrapper").style.display = "block";
    document
      .getElementById("showMapWrapper")
      .addEventListener("click", () =>
        ReactDOM.render(<WheresThis />, document.getElementById("mapWrapper"))
      );
  };
  return (
    <div>
      <button id="closeMapWrapper" onClick={close}>
        {" "}
        X{" "}
      </button>
      <div>
        <iframe
          onLoad={showMap}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51477.890508772085!2d29.385746763009855!3d36.25483989642333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c02cd0df202115%3A0x75fbdb7bfae9cdf8!2sKalkan%2C%2007580%20Ka%C5%9F%2FAntalya%2C%20Turkey!5e0!3m2!1sen!2suk!4v1603406560074!5m2!1sen!2suk"
          width="600"
          height="450"
        ></iframe>
      </div>
    </div>
  );
};

document
  .getElementById("showMapWrapper")
  .addEventListener("click", () =>
    ReactDOM.render(<WheresThis />, document.getElementById("mapWrapper"))
  );
