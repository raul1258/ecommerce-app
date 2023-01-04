import React, { useEffect } from "react";
import AddCategories from "./AddCategories";
import AddBanner from "./AddBanner";
import AddFeaturedProducts from "./AddFeaturedProducts";
import AddFooter from "./AddFooter";
import { v4 as uuidv4 } from "uuid";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../FirebaseConfig";
function LandingPageCMS() {
  
  const saveLandingPageInfo = async (section, data) => {
    //call firebase query to store this data in landing page collection at doc_id=section

    await setDoc(doc(db, "landingPage", section), {
      ...data,
    });
    alert(`${section} Added`);
  };

  return (
    <div>
      <AddCategories saveLandingPageInfo={saveLandingPageInfo} />
      <AddBanner saveLandingPageInfo={saveLandingPageInfo}/>
      <AddFeaturedProducts />
      <AddFooter />
    </div>
  );
}

export default LandingPageCMS;
