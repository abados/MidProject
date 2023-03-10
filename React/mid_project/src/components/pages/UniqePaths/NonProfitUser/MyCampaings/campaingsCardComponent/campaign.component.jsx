import React from "react";
import "./cardStyle.css";

export const CampaignCardComponent = ({
  campaing,
  handleUpadate,
  handleDelete,
}) => {
  return (
    <div class="card show-card campaignCard">
      <div className="card-header">{campaing.campaignHashtag}</div>
      <div className="card-text">
        <h5 className="card-title">{campaing.campaignName}</h5>
        <h6 className="card-text">{campaing.campaignInfo}</h6>
        <div className="buttons">
          <button
            className="btn btn-primary "
            onClick={() => handleUpadate(campaing)}
          >
            Edit
          </button>
          <button
            className=" btnCampaign"
            onClick={() => handleDelete(campaing.campaignName)}
          >
            <span class="text">Delete</span>
            <span class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
