import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

const AlertTemplate = ({ message, options }) => {
  return (
    <div
      className={`mt-2 px-3 py-2 container text-bg-${options.bgColor} rounded-pill bg-${options.bgColor}`}
    >
      <InfoRoundedIcon /> ALERT: {message}
    </div>
  );
};

export default AlertTemplate;
