import React, { useEffect, useState } from "react";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  ActivistCampaignsPage,
  ActivistOrganizationsPage,
  ActivistUserForm,
  AddCampaignPage,
  AddProductPage,
  AfterSighInpage,
  BoughtProductsPage,
  BusinessCampaignPage,
  BusinessUserForm,
  CampaingsPage,
  CheckTweetsAndGivePoints,
  ClaimRwardsForActivist,
  FormContext,
  HomePage,
  LoginPage,
  MyDonationsPage,
  NavBarComponent,
  NewRegisterPage,
  NonProfitUserForm,
  OwnerUserForm,
  PurchesOFActivist,
  ReportParamsPage,
  RoleState,
  UpadateCampaignPage,
  UserRoleContext,
  checkIfExsits,
  getRole,
} from "./components/pages/index";

function App() {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const [RoleContext, setRoleContext] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [RoleRecoil, setRoleRecoil] = useRecoilState(RoleState);

  const checkingExsits = async () => {
    if (isAuthenticated) {
      var role = await getRole(user.sub);
      if (role.length === 0) {
        ///just set the state for preventing junmping screens
        setIsNew(true);
      }
      const RoleIt = role[0].name;
      let result = await checkIfExsits(user.email, RoleIt);
      setFormSubmitted(result === "true");
      if (formSubmitted) {
        setRoleContext([RoleIt]);
      }
    }
  };

  useEffect(() => {
    checkingExsits();
  }, [isAuthenticated]);

  if (isLoading) {
    return <div className="App">Loading</div>;
  } else if (isNew && isAuthenticated) {
    return <NewRegisterPage />;
  } else if (isAuthenticated) {
    return (
      <div className="App">
        <FormContext.Provider value={{ formSubmitted, setFormSubmitted }}>
          <UserRoleContext.Provider value={{ RoleContext, setRoleContext }}>
            <NavBarComponent onFormSubmit={formSubmitted} />
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/MyDonates" element={<MyDonationsPage />}></Route>
              <Route
                path="/activist/listOfOrganization"
                element={<ActivistOrganizationsPage />}
              ></Route>
              <Route
                path="/activist/Purches"
                element={<PurchesOFActivist />}
              ></Route>
              <Route
                path="/business/ShipmentPage"
                element={<BoughtProductsPage />}
              ></Route>
              <Route
                path="/activist/campaignsProducts"
                element={<ClaimRwardsForActivist />}
              ></Route>
              <Route
                path="/activist/specificCampaigns"
                element={<ActivistCampaignsPage />}
              ></Route>
              <Route
                path="/business/Campaigns"
                element={<BusinessCampaignPage />}
              ></Route>
              <Route path="/newRegister" element={<NewRegisterPage />}></Route>
              <Route
                path="//editCampaing"
                element={<UpadateCampaignPage />}
              ></Route>
              <Route
                path="/checkTweets"
                element={<CheckTweetsAndGivePoints />}
              ></Route>
              <Route path="/thankYou" element={<AfterSighInpage />}></Route>
              <Route path="/donateProduct" element={<AddProductPage />}></Route>
              <Route path="/addCampagin" element={<AddCampaignPage />}></Route>
              <Route path="/MyCampagins" element={<CampaingsPage />}></Route>
              <Route
                path="/Activist/addingAInfo"
                element={<ActivistUserForm onFormSubmit={setFormSubmitted} />}
              ></Route>
              <Route
                path="/Business/addingBInfo"
                element={<BusinessUserForm onFormSubmit={setFormSubmitted} />}
              ></Route>
              <Route
                path="/NonProfit/addingNInfo"
                element={<NonProfitUserForm onFormSubmit={setFormSubmitted} />}
              ></Route>
              <Route
                path="/Admin/addingOInfo"
                element={<OwnerUserForm onFormSubmit={setFormSubmitted} />}
              ></Route>
              <Route
                path="/Admin/Reports"
                element={<ReportParamsPage />}
              ></Route>
            </Routes>
          </UserRoleContext.Provider>
        </FormContext.Provider>
      </div>
    );
  } else if (!isAuthenticated) {
    return <LoginPage />;
  }
}

export default App;

//import { NavBarComponent } from "./components/navBar/navBar";
//import { LoginPage } from "./components/pages/LoginPage/LoginPage";
//import { HomePage } from "./components/pages/HomePage/homePage";
//import { UserRoleContext } from "./context/context";
//import { ActivistUserForm } from "./components/pages/UniqePaths/ActivistUser/signIn/addingInfo.Activist.page";
//import { BusinessUserForm } from "./components/pages/UniqePaths/BusinessUser/signIn/addingInfo.Business.page";
//import { NonProfitUserForm } from "./components/pages/UniqePaths/NonProfitUser/SignIn/addingInfo.NonProfit.page";
//import { OwnerUserForm } from "./components/pages/UniqePaths/Owner/SignIn/addingInfo.Owner.page";
//import { FormContext } from "./context/context";
//import { AfterSighInpage } from "./components/pages/afterSignIn/afterSighIn.page";
//import { AddCampaignPage } from "./components/pages/UniqePaths/NonProfitUser/addCampagin/addCampaign.page";
//import { CampaingsPage } from "./components/pages/UniqePaths/NonProfitUser/MyCampaings/myCampaing.page";
//import { UpadateCampaignPage } from "./components/pages/UniqePaths/NonProfitUser/UpdateACampaing/updateCampaign.page";
//import { NewRegisterPage } from "./components/pages/HomePage/newRegister.page";
//import { AddProductPage } from "./components/pages/UniqePaths/BusinessUser/addProduct/addProduct.page";
//import { checkIfExsits, getRole } from "./services/serviceToAll";
//import { BusinessCampaignPage } from "./components/pages/UniqePaths/BusinessUser/allCampaigns/business.campaign.page";
//import { MyDonationsPage } from "./components/pages/UniqePaths/BusinessUser/myDonates/myDonations.page.jsx";
//import { ActivistOrganizationsPage } from "./components/pages/UniqePaths/ActivistUser/organizationsPage/organizations.page";
//import { ActivistCampaignsPage } from "./components/pages/UniqePaths/ActivistUser/campaignsPage/campaigns.page";
//import { ClaimRwardsForActivist } from "./components/pages/UniqePaths/ActivistUser/claimRewardsPage/productsAsRewards.page";
//import { PurchesOFActivist } from "./components/pages/UniqePaths/ActivistUser/purchesPage/purches.page";
//import { BoughtProductsPage } from "./components/pages/UniqePaths/BusinessUser/shipment/products.Page";
//import { CheckTweetsAndGivePoints } from "./components/pages/UniqePaths/Owner/checkingTweets/checkTweets.page";
//import { ReportParamsPage } from "./components/pages/UniqePaths/Owner/reportsPage/reportParams.page";
//import { RoleState } from "./shareState/RoleState";
