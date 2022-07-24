import Options from "./notUsing/options";

const ContestComp = ({
  name,
  url,
  start_time,
  end_time,
  site,
  status,
  handleInterested,
  handleNotInterested,
}) => {
  return (
    <div>
      <h3>{name}</h3>
      <a href={url} rel="noreferrer noopener" target="_blank">
        {url}
      </a>
      <ul>
        <li>Start Time: {start_time}</li>
        <li>End Time: {end_time}</li>
        <li>Location: {site}</li>
        <li>Status: {status}</li>
      </ul>
      <button onClick={handleInterested}>Interested</button>
      <button onClick={handleNotInterested}>Not Interested</button>

      <Options />
    </div>
  );
};

export default ContestComp;
