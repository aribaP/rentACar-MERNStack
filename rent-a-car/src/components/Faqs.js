import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import './Faqs.css';

function Faqs() {
  return (
    <>
      <body>
        <section id="faqs">
          <div className="FAQS">
        <div className="FAQS-Title">FAQS</div>
        <div className="Main-BodyFAQS">
          <main>
            <details open>
              <summary>Who can rent a car?</summary>
              <div class="faq__content">
                <p>
                  The car with driver can be rented by anyone above the age of
                  16. However, in case of self-drive, minimum age for hiring a
                  car is 21 years and your license needs to be at least 1 year
                  old. If you are a resident of Pakistan, you need to have a
                  valid driving license along with NIC. If you are on a tourist
                  visa then you need to have a valid home country license OR an
                  international driving license and valid passport with visa
                  stamp.
                </p>
              </div>
            </details>

            <details>
              <summary> How can I pay the rent?</summary>
              <div class="faq__content">
                <p>Payment can only be done in cash.</p>
              </div>
            </details>

            <details>
              <summary>What are the delivery and collection timings?</summary>
              <div class="faq__content">
                <p>
                  The car delivery and collection time is from 8:00 am to
                  11.30pm.
                </p>
              </div>
            </details>

            <details>
              <summary>Where can the car be delivered?</summary>
              <div class="faq__content">
                <p>
                  We deliver all over Karachi.The delivery is subject to
                  availability.
                </p>
              </div>
            </details>

            <details closed>
              <summary>What is your fuel policy?</summary>
              <div class="faq__content">
                <p>
                  Customers are responsible for paying for their own fuel
                  consumption. Each car is provided with a level of fuel and
                  customers have to return the vehicle with the same level of
                  fuel as they were given. We also provide an option to the
                  customers, where they can pay for the number of kilometers
                  done by the car at the specified rates for each car category,
                  starting from the point the car leaves the office / Car
                  Owners / Drivers location.
                </p>
              </div>
            </details>
          </main>
        </div>
        </div>
        </section>
      </body>
    </>
  );
}

export default Faqs;
