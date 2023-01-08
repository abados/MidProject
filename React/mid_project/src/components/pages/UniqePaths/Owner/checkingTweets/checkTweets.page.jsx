import React from "react";
import "../css/checkTweet.css";
import { CheckTweets } from "../../../../../services/ownerService";

const checkAndPay = () => {
  //1. להשיג את שמות המשתמשים של כל הפעילים שנרשמו לקמפיינים
  //2.לראות לאיזה קמפיינים נרשם כל פעיל
  //3.להשיג את ההשטגים הספציפיים עבור כל קמפיין
  //4. לבדוק האם הפעילים פרסמו את האשטאג הספציפי ביממה האחרונה ולהוסיף להם כסף

  CheckTweets();
};

export const CheckTweetsAndGivePoints = () => {
  return (
    <div className="containerTweetPage">
      <h1>
        Click the button to check the promotion of the campaigns and make the
        payment for the promotion
      </h1>
      <button className="btnTweet" onClick={() => checkAndPay()}>
        <span className="spanTweet">TWEET🐥</span>
        <div className="containerTweet">
          <svg
            height="35"
            width="35"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1024 1024"
            className="iconTweet"
          >
            <path
              fill=""
              d="M962.267429 233.179429q-38.253714 56.027429-92.598857 95.451429 0.585143 7.972571 0.585143 23.990857 0 74.313143-21.723429 148.260571t-65.974857 141.970286-105.398857 120.32-147.456 83.456-184.539429 31.158857q-154.843429 0-283.428571-82.870857 19.968 2.267429 44.544 2.267429 128.585143 0 229.156571-78.848-59.977143-1.170286-107.446857-36.864t-65.170286-91.136q18.870857 2.852571 34.889143 2.852571 24.576 0 48.566857-6.290286-64-13.165714-105.984-63.707429t-41.984-117.394286l0-2.267429q38.838857 21.723429 83.456 23.405714-37.741714-25.161143-59.977143-65.682286t-22.308571-87.990857q0-50.322286 25.161143-93.110857 69.12 85.138286 168.301714 136.265143t212.260571 56.832q-4.534857-21.723429-4.534857-42.276571 0-76.580571 53.979429-130.56t130.56-53.979429q80.018286 0 134.875429 58.294857 62.317714-11.995429 117.174857-44.544-21.138286 65.682286-81.115429 101.741714 53.174857-5.705143 106.276571-28.598857z"
            ></path>
          </svg>
          <svg
            height="35"
            width="35"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1024 1024"
            className="iconTweet"
          >
            <path
              fill=""
              d="M123.52064 667.99143l344.526782 229.708899 0-205.136409-190.802457-127.396658zM88.051421 585.717469l110.283674-73.717469-110.283674-73.717469 0 147.434938zM556.025711 897.627196l344.526782-229.708899-153.724325-102.824168-190.802457 127.396658 0 205.136409zM512 615.994287l155.406371-103.994287-155.406371-103.994287-155.406371 103.994287zM277.171833 458.832738l190.802457-127.396658 0-205.136409-344.526782 229.708899zM825.664905 512l110.283674 73.717469 0-147.434938zM746.828167 458.832738l153.724325-102.824168-344.526782-229.708899 0 205.136409zM1023.926868 356.00857l0 311.98286q0 23.402371-19.453221 36.566205l-467.901157 311.98286q-11.993715 7.459506-24.57249 7.459506t-24.57249-7.459506l-467.901157-311.98286q-19.453221-13.163834-19.453221-36.566205l0-311.98286q0-23.402371 19.453221-36.566205l467.901157-311.98286q11.993715-7.459506 24.57249-7.459506t24.57249 7.459506l467.901157 311.98286q19.453221 13.163834 19.453221 36.566205z"
            ></path>
          </svg>
        </div>
      </button>
    </div>
  );
};
