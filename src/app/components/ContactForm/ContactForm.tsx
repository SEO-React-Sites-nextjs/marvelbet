"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    username: "",
    realName: "",
    password: "",
    email: "",
    phoneNumber: "",
    confirmPassword: "",
    currencyType: "880",
    callingCode: "",
    friendReferCode: "",
    agreeTerms: true,
  });
  const pathname = usePathname();
  const [imageSrc, setImageSrc] = useState("/register-img.png");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const ctype: { [key: string]: number } = {
    "92": 17,
    "880": 8,
    "91": 7,
  };
  const getAffiliateConfig = (pathname: string) => {
    if (pathname.startsWith("/register")) {
      return {
        MerchantID: "JB",
        AffiliateKey: "lligbdjb01",
        AffiliateCode: "aHv1Kimo",
        AffiliateDomain: "jeetbuzz8.xyz",
      };
    } else if (pathname.startsWith("/six6s")) {
      return {
        MerchantID: "Six6s",
        AffiliateKey: "lligin6s02",
        AffiliateCode: "18WxeeKC",
        AffiliateDomain: "sixs8.world",
      };
    } else {
      return {
        MerchantID: "Baji",
        AffiliateKey: "bna02",
        AffiliateCode: "9R85vuqH",
        AffiliateDomain: "bjbaji888.co",
      };
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let errorMessages: string[] = [];
    if (!formData.agreeTerms)
      errorMessages.push("You must agree to the terms and conditions.");
    if (!formData.username) errorMessages.push("Username is required.");
    if (!formData.password) errorMessages.push("Password is required.");
    if (!formData.realName) errorMessages.push("Full Name is required.");
    if (!formData.email) errorMessages.push("Email is required.");
    if (!formData.phoneNumber) errorMessages.push("Phone Number is required.");

    if (formData.password !== formData.confirmPassword) {
      errorMessages.push("Password and Confirm Password must be the same.");
    }

    if (errorMessages.length > 0) {
      setMessage(errorMessages.join("<br />"));
      setShowModal(true);
      return;
    }
    const { MerchantID, AffiliateKey, AffiliateCode, AffiliateDomain } =
      getAffiliateConfig(pathname);
    const formDataEncoded = new URLSearchParams({
      MerchantID: MerchantID,
      UserID: formData.username,
      Name: formData.realName,
      Password: formData.password,
      Email: formData.email,
      Phone: formData.phoneNumber,
      AffiliateKey: AffiliateKey,
      AffiliateCode: AffiliateCode,
      AffiliateDomain: AffiliateDomain,
      CurrencyType: ctype[formData.currencyType].toString(),
      callingCode: formData.currencyType,
    });
    try {
      const response = await axios.post(
        "https://cakecake.co/v1/Api/Register",
        formDataEncoded,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setMessage(`${response.data.message}`);
    } catch (error) {
      console.error("Error details:", error);
      setMessage(
        "An error occurred while registering. Please try again later."
      );
    } finally {
      setShowModal(true);
    }
  };

  const handleCurrencyChange = (e: any) => {
    setFormData({
      ...formData,
      currencyType: e.target.value,
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    if (pathname.startsWith("/register")) setImageSrc("/register-img.png");
    else if (pathname.startsWith("/six6s")) setImageSrc("/contact-img.png");
    else if (pathname.startsWith("/baji999")) setImageSrc("/baji999-img.png");
  }, [pathname]);

  return (
    <section className="contact-wrapper">
      <div className="container">
        <div className="form-wrapper">
          <div className="form-content">
            <div className="form-title">Sign up</div>
            <form onSubmit={handleSubmit} className="form-wrap">
              <div className="form-item">
                <p>Username</p>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  placeholder="4-15 Characters or Number"
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                />
              </div>
              <div className="form-item">
                <p>Password</p>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="6-20 Characters and Numbers"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
              <div className="form-item">
                <p>Confirm Password</p>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  placeholder="Confirm Password"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-item">
                <p>Choose Currency</p>
                <select
                  name="currencyType"
                  value={formData.currencyType}
                  onChange={handleCurrencyChange}
                >
                  <option value="880" data-code="8">
                    BDT
                  </option>
                  <option value="91" data-code="7">
                    INR
                  </option>
                  <option value="92" data-code="17">
                    PKR
                  </option>
                </select>
              </div>
              <div className="form-item hasLine">
                <p>Refer Code</p>
                <input
                  type="text"
                  name="friendReferCode"
                  value={formData.friendReferCode}
                  placeholder="Enter if you have one"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      friendReferCode: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-item">
                <p>Full Name</p>
                <input
                  type="text"
                  name="realName"
                  value={formData.realName}
                  placeholder="Full Name"
                  onChange={(e) =>
                    setFormData({ ...formData, realName: e.target.value })
                  }
                />
              </div>
              <div className="form-item">
                <p>Phone Number</p>
                <div className="input-wrap">
                  <label className={`${formData.currencyType}`}>
                    <img
                      src={`./flag-${formData.currencyType || 880}.png`}
                      alt=""
                    />
                    +{formData.currencyType || 880}
                  </label>
                  <input
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    placeholder="Phone Number"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phoneNumber: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="form-item">
                <p>Email</p>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  placeholder="E-mail"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="form-item check">
                <label htmlFor="check" className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    id="check"
                    name="check"
                    className="checkbox"
                    checked={formData.agreeTerms}
                    onChange={(e) =>
                      setFormData({ ...formData, agreeTerms: e.target.checked })
                    }
                  />
                  <span className="checkmark"></span>
                  <p>I'm 18 years old, and agree to "terms and conditions".</p>
                </label>
              </div>
              <button type="submit" className="sign-up">
                SIGN UP
              </button>
            </form>
          </div>
          <div className="form-img">
            <img src={imageSrc} alt="Register and Bet Big at JeetBuzz168" />
          </div>
        </div>
        {showModal && (
          <div className="modal fade show" aria-modal="true" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div
                  className="modal-body"
                  id="mess"
                  dangerouslySetInnerHTML={{ __html: message }}
                ></div>
                <div className="modal-footer">
                  <span>
                    Any questions please
                    <a
                      onClick={() => alert("Contact us!")}
                      className="text-blue"
                    >
                      contact us
                    </a>
                  </span>
                  <button
                    type="button"
                    className="modal-btn"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
