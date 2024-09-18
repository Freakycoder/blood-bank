import "@/styles/globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {

  return <RecoilRoot>
            <Component {...pageProps} />;
        </RecoilRoot>
}
