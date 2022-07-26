import "../css/events.css";

const ContestComp = ({
  name,
  url,
  start_time,
  end_time,
  site,
  status,
  handleInterested,
}) => {
  return (
    <div>
      <div className="eventCard">
        <h3 className="eventName">{name}</h3>
        <a href={url} rel="noreferrer noopener" target="_blank">
          {url}
        </a>
        {/* <ul>
          <li>Start Time:{start_time}</li>
          <li>End Time: {end_time}</li>
          <li>Location: {site}</li>
          <li>Status: {status}</li>
        </ul> */}
        <button onClick={handleInterested}>Interested</button>
      </div>
    </div>
  );
};

export default ContestComp;
