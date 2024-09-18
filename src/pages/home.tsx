import DemoPage from "@/components/RequestFolder/page"
import ChatComponent from "@/components/Chat";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Image from "next/image"
import Link from "next/link"
import {
    HomeIcon,
    LineChart,
    Package,
    Package2,
    PanelLeft,
    Search,
    Settings,
    ShoppingCart,
    Users2,
    SyringeIcon
} from "lucide-react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area";
import { viewRequestAtom } from "@/store/atoms/viewRequest";
import { useRecoilValue } from "recoil";
import GraphComponent from "@/components/Graph";
import { useSetRecoilState } from "recoil"
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { ProfileForm } from "@/components/Form";
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
import { useRef } from "react"

const Home = () => {
    const setViewRequest = useSetRecoilState(viewRequestAtom);
    const viewRequest = useRecoilValue(viewRequestAtom);
    const handler = () => {
        setViewRequest(true)
    }
    const formRef = useRef<{ triggerSubmit: () => void }>()

    const handleSubmit = () => {
        // Logic after form submission (e.g., close modal, show a success message, etc.)
        console.log("Form successfully submitted!")
    }
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
                <div className="flex min-h-screen w-full flex-col bg-muted/40">
                    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
                        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                            <Link
                                href="#"
                                className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                            >
                                <HomeIcon className="h-5 w-5 transition-all group-hover:scale-110" />
                                <span className="sr-only">Acme Inc</span>
                            </Link>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href="request"
                                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                        >
                                            <Users2 className="h-5 w-5" />
                                            <span className="sr-only">Request</span>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">Request</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href="/past-donations"
                                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                        >
                                            <SyringeIcon className="h-5.5 w-5.5" />
                                            <span className="sr-only">Past Donations</span>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">Past Donations</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </nav>
                        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href="#"
                                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                        >
                                            <Settings className="h-5 w-5" />
                                            <span className="sr-only">Settings</span>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">Settings</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </nav>
                    </aside>
                    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button size="icon" variant="outline" className="sm:hidden">
                                        <PanelLeft className="h-5 w-5" />
                                        <span className="sr-only">Toggle Menu</span>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="left" className="sm:max-w-xs">
                                    <nav className="grid gap-6 text-lg font-medium">
                                        <Link
                                            href="#"
                                            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                                        >
                                            <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                                            <span className="sr-only">Acme Inc</span>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                        >
                                            <HomeIcon className="h-5 w-5" />
                                            Home
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center gap-4 px-2.5 text-foreground"
                                        >
                                            <ShoppingCart className="h-5 w-5" />
                                            Requests
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                        >
                                            <Package className="h-5 w-5" />
                                            Blood Donation
                                        </Link>

                                        <Link
                                            href="#"
                                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                        >
                                            <LineChart className="h-5 w-5" />
                                            Settings
                                        </Link>
                                    </nav>
                                </SheetContent>
                            </Sheet>
                            <Breadcrumb className="hidden md:flex">
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink asChild>
                                            <Link href="#">Dashboard</Link>
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink asChild>
                                            <Link href="#">Request</Link>
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink asChild>
                                            <Link href="#">Request</Link>
                                        </BreadcrumbLink>
                                        <BreadcrumbPage>Recent Donations</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                            <div className="relative ml-auto flex-1 md:grow-0">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search..."
                                    className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                                />
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="overflow-hidden rounded-full"
                                    >
                                        <Image
                                            src="/placeholder-user.jpg"
                                            width={36}
                                            height={36}
                                            alt="Avatar"
                                            className="overflow-hidden rounded-full"
                                        />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>

                                    <DropdownMenuItem>Settings</DropdownMenuItem>


                                    <DropdownMenuItem>Logout</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </header>
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
                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <Button className="transition-all hover:scale-110" variant="default">Make a Request</Button>
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>Fill in the Details for the Request to be sent</AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                <ProfileForm onSubmitForm={handleSubmit}
                                                                    ref={formRef} />
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                            <AlertDialogAction onClick={() => {
                                                                formRef.current?.triggerSubmit()
                                                            }}>Send</AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
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
                                                <Button onClick={handler} variant="outline" className="mt-2 transition-all hover:scale-110 border-gray-800">View Requests</Button>
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
            </motion.div>
        </AuroraBackground >
    )
}

export default Home;