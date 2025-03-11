import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { Fragment, ReactNode } from "react";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <Header />
      <main className="max-sm:px-10 max-lg:px-20 px-40">{children}</main>
      <Footer />
    </Fragment>
  );
}
