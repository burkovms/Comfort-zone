import './Loader.scss';

const Loader = () => {
  return (
    <div className="p-block loader">
      <div className="loader__wrap">
        <svg viewBox="0 0 69 129" width={69} height={129} fill="none">
          <path
            d="M0 101.05V121.552C0 125.659 3.35081 129 7.46925 129H61.5308C65.6492 129 69 125.659 69 121.552V101.05H0Z"
            fill="#1CC27C"
          />
          <path
            className="battery-opacity"
            d="M69 96.75V16.0476C69 11.9411 65.6492 8.6 61.5308 8.6H47.4375V0H21.5625V8.6H7.46925C3.35081 8.6 0 11.9411 0 16.0476V96.75H69ZM4.3125 16.0476C4.3125 14.3104 5.727 12.9 7.46925 12.9H61.5308C63.273 12.9 64.6875 14.3104 64.6875 16.0476V66.65H4.3125V16.0476Z"
            fill="#1CC27C"
          />
        </svg>
        <div className="loader__text text-lg">Loading</div>
      </div>
    </div>
  );
};

export default Loader;
