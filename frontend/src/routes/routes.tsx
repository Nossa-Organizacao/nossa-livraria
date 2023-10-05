import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/Home";
import { LoginPage } from "../pages/login/Login";
import { RegisterPage } from "../pages/register/Register";
import { UserProvider } from "../providers/UserProvider/UserContext";
import { BookProvider } from "../providers/BookProvider/BookContext";
import { ChapterProvider } from "../providers/ChapterProvider/ChapterContext";
import { CommentProvider } from "../providers/CommentProvider/CommentProvider";

// import { RegisterPage } from "../pages/register/register";
// import { LoginPage } from "../pages/login/login";
// import { AdvertPage } from "../pages/advert/advert";
// import { ProfilePage } from "../pages/profile/profile";
// import { AdvertiserPage } from "../pages/advertiser/advertiser";
// import { NotFoundPage } from "../pages/notFound/notFound";
// import { EmailNewPasswordPage } from "../pages/emailNewPassword/emailNewPassword";
// import { ResetPasswordPage } from "../pages/resetPassword/resetPassword";

export const AppRoutes = () => {
  return (
    <UserProvider>
      <BookProvider>
        <ChapterProvider>
          <CommentProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              {/* <Route path="/profile" element={<ProfilePage />} /> */}
              {/* <Route path="/advert/:advertId" element={<AdvertPage />} /> */}
              {/* <Route path="/advertiser/:advertiserId" element={<AdvertiserPage />} /> */}
              {/* <Route path="/emailNewPassword" element={<EmailNewPasswordPage />} /> */}
              {/* <Route path="/resetPassword/:token" element={<ResetPasswordPage />} /> */}
              {/* <Route path="/*" element={<NotFoundPage />} /> */}
            </Routes>
          </CommentProvider>
        </ChapterProvider>
      </BookProvider>
    </UserProvider>
  );
};
