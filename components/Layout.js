import { Header } from "./Header";
import { Footer } from "./Footer";
import { Bounded } from "./Bounded";

export const Layout = ({
  navigation,
  settings,
  withHeaderDivider,
  withProfile,
  withSignUpForm,
  children,
}) => {
  return (
    <div className="text-slate-700">
      <Header
        withProfile={withProfile}
        withDivider={withHeaderDivider}
        navigation={navigation}
        settings={settings}
      />
      <main>{children}</main>
      <Bounded as="footer">
        <div className="grid grid-cols-1 justify-items-center gap-24">
          <h2>@FIT ČVUT 2023</h2>
        </div>
      </Bounded>
    </div>
  );
};
