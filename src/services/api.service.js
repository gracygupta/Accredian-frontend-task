import axios from "axios";
import { BACKEND_API } from "./constants";

const giveReferral = async (formData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      `${BACKEND_API}/api/referrals`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      }
    );

    if (response.status === 201) {
      return JSON.stringify({
        success: true,
        message: "Referral created successfully!",
      });
    } else {
      return JSON.stringify({
        success: false,
        message: response.data.error || "Failed to create referral",
      });
    }
  } catch (error) {
    return JSON.stringify({
      success: false,
      message: "An error occurred while creating the referral",
    });
  }
};

export default giveReferral;
