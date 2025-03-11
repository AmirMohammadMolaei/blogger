import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { Fragment, ReactNode } from "react";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <Header />
      <main className="px-40">{children}</main>
      <Footer />
    </Fragment>
  );
}
