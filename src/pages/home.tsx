import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { SideBarWrapper } from "@/components/Sidebar";
import { useRecoilValue } from "recoil";
import { viewRequestAtom } from "@/store/atoms/viewRequest";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ChatComponent from "@/components/Chat";
import DemoPage from "@/components/RequestFolder/page";
import { GraphComponent } from "@/components/Graph";


const Home = () => {
    
    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 5, y: 0 }}

                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "backIn",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4  min-h-screen w-full bg-muted/40"
            >
                <div className="flex min-h-screen flex-col bg-muted/40">
                    <SideBarWrapper> <Dashboard/></SideBarWrapper>
                </div>
            </motion.div>
        </AuroraBackground >
    )
}

export default Home;

const Dashboard = () => {
    const viewRequest = useRecoilValue(viewRequestAtom);
    return <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
                {viewRequest ?
                    (<GraphComponent></GraphComponent>)
                    : (<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                        {/* Main tag contains two div container, one for the request & leaderboard and another for chat  */}
                        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                                <Card
                                    className="sm:col-span-2 transition-all hover:scale-105" x-chunk="dashboard-05-chunk-0"
                                >
                                    <CardHeader className="pb-3">
                                        <CardTitle className="mb-2">New Requests</CardTitle>
                                        <CardDescription className="max-w-lg text-balance leading-relaxed">
                                            Submit and manage your blood donation requests to connect promptly with available donors."
                                        </CardDescription>
                                    </CardHeader>
                                    <CardFooter>
                                        <Link href="/newrequest">
                                        <Button variant="default" className="mt-2 transition-all hover:scale-110 border-gray-800">Make Request</Button>
                                        </Link>
                                    </CardFooter>
                                </Card>
                                <Card
                                    className="sm:col-span-2 transition-all hover:scale-105" x-chunk="dashboard-05-chunk-0"
                                >
                                    <CardHeader className="pb-3">
                                        <CardTitle className="mb-2">Past Requests</CardTitle>
                                        <CardDescription className="max-w-lg text-balance leading-relaxed">
                                            Submit and manage your blood donation requests to connect promptly with available donors."
                                        </CardDescription>
                                    </CardHeader>
                                    <CardFooter>
                                        <Link href="/profile">
                                        <Button variant="outline" className="mt-2 transition-all hover:scale-110 border-gray-800">View Requests</Button>
                                        </Link>
                                    </CardFooter>
                                </Card>

                            </div>
                            <Card className="p-4">
                                <CardTitle> Track all your Requests...</CardTitle>
                                <DemoPage ></DemoPage>
                            </Card>
                        </div>
                        <div className="lg:grid-cols-1">

                            <ChatComponent></ChatComponent>
                        </div>
                    </main>)}
            </div>
};