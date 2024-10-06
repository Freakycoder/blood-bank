"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
    IconArrowLeft,
    IconBrandTabler,
    IconSettings,
    IconUserBolt,
    
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "./ui/button";
import ChatComponent from "@/components/Chat";
import { ProfileForm } from "@/components/Form";
import GraphComponent from "./Graph";
import DemoPage from "@/components/RequestFolder/page";
import { useSetRecoilState, useRecoilValue } from "recoil"
import { useRef } from "react";
import { viewRequestAtom } from "@/store/atoms/viewRequest";


export function SideBarDashboard() {
    const links = [
        {
            label: "Dashboard",
            href: "/home",
            icon: (
                <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Profile",
            href: "/profile",
            icon: (
                <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "New Request",
            href: "#",
            icon: (
                <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Settings",
            href: "#",
            icon: (
                <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Logout",
            href: "#",
            icon: (
                <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
    ];
    const [open, setOpen] = useState(false);
    return (
        <div
            className={cn(
                "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-screen flex-1 border border-neutral-200 dark:border-neutral-700 overflow-hidden",
                "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
            )}
        >
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        {open ? <Logo /> : <LogoIcon />}
                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink key={idx} link={link} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <SidebarLink
                            link={{
                                label: "Manu Arora",
                                href: "#",
                                icon: (
                                    <Image
                                        src="https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                                        className="h-7 w-7 flex-shrink-0 rounded-full"
                                        width={50}
                                        height={50}
                                        alt="Avatar"
                                    />
                                ),
                            }}
                        />
                    </div>
                </SidebarBody>
            </Sidebar>
            <Dashboard />
        </div>
    );
}
export const Logo = () => {
    return (
        <Link
            href="#"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
        >
            <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-medium text-black dark:text-white whitespace-pre"
            >
                Acet Labs
            </motion.span>
        </Link>
    );
};
export const LogoIcon = () => {
    return (
        <Link
            href="#"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
        >
            <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
        </Link>
    );
};

// Dummy dashboard component with content
const Dashboard = () => {
    const viewRequest = useRecoilValue(viewRequestAtom);
    return (
        <div className="flex flex-1">
            <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
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
        </div>
    );
};
