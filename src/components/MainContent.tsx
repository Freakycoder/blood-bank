import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { requestAtom } from "@/store/atoms/availableRequest"
import { useSetRecoilState } from "recoil"


export const MainContent = () => {
    const setRequestState = useSetRecoilState(requestAtom);

    const RequestHandler = () => {
        setRequestState(true);
    }

    return <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card
                className="sm:col-span-2 transition-all hover:scale-105" x-chunk="dashboard-05-chunk-0"
            >
                <CardHeader className="pb-3">
                    <CardTitle className="mb-2">Requests</CardTitle>
                    <CardDescription className="max-w-lg text-balance leading-relaxed">
                        Stay informed and up-to-date with the latest blood donation requests from hospitals and medical centers in need
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button onClick={RequestHandler} className="mt-2 transition-all hover:scale-110">View Requests</Button>
                </CardFooter>
            </Card>
            <Card className="transition-all hover:scale-105" x-chunk="dashboard-05-chunk-1">
                <CardHeader className="pb-2">
                    <CardDescription>This Week </CardDescription>
                    <CardTitle className="text-4xl">0</CardTitle>
                    <CardDescription>Donations</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-xs text-muted-foreground">
                        +25% from last week
                    </div>
                </CardContent>
                <CardFooter>
                    <Progress value={25} aria-label="25% increase" />
                </CardFooter>
            </Card>
            <Card className="transition-all hover:scale-105" x-chunk="dashboard-05-chunk-2">
                <CardHeader className="pb-2">
                    <CardDescription>This Month</CardDescription>
                    <CardTitle className="text-4xl">0</CardTitle>
                    <CardDescription>Donations</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-xs text-muted-foreground">
                        +10% from last month
                    </div>
                </CardContent>
                <CardFooter>
                    <Progress value={50} aria-label="50% increase" />
                </CardFooter>
            </Card>
        </div>
        <Tabs defaultValue="week">
            <div className="flex items-center">
                <TabsList>
                    <TabsTrigger value="week">Week</TabsTrigger>
                    <TabsTrigger value="month">Month</TabsTrigger>
                    <TabsTrigger value="year">Year</TabsTrigger>
                </TabsList>
            </div>
            <ScrollArea className="">
                <TabsContent value="week">
                    <Card x-chunk="dashboard-05-chunk-3">
                        <CardHeader className="px-7">
                            <CardTitle>Leaderboard Rankings</CardTitle>
                            <CardDescription>
                                Top donors ranked by their contributions
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="max-h-96 overflow-y-scroll">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Doner Name</TableHead>
                                            <TableHead className="hidden sm:table-cell">
                                                Total Donations
                                            </TableHead>
                                            <TableHead className="hidden sm:table-cell">
                                                Life Saved
                                            </TableHead>
                                            <TableHead className="hidden md:table-cell">
                                                Recent Donation
                                            </TableHead>
                                            <TableHead className="text-right">Rankings</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow className="bg-accent">
                                            <TableCell>
                                                <div className="font-medium">Liam Johnson</div>
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">
                                                50
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">
                                                <Badge className="text-xs" variant="secondary">
                                                    20
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                26-08-24
                                            </TableCell>
                                            <TableCell className="text-right">#1</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <div className="font-medium">Olivia Smith</div>
                                                <div className="hidden text-sm text-muted-foreground md:inline">
                                                    olivia@example.com
                                                </div>
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">
                                                Refund
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">
                                                <Badge className="text-xs" variant="outline">
                                                    Declined
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                2023-06-24
                                            </TableCell>
                                            <TableCell className="text-right">$150.00</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <div className="font-medium">Noah Williams</div>
                                                <div className="hidden text-sm text-muted-foreground md:inline">
                                                    noah@example.com
                                                </div>
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">
                                                Subscription
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">
                                                <Badge className="text-xs" variant="secondary">
                                                    Fulfilled
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                2023-06-25
                                            </TableCell>
                                            <TableCell className="text-right">$350.00</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <div className="font-medium">Olivia Smith</div>
                                                <div className="hidden text-sm text-muted-foreground md:inline">
                                                    olivia@example.com
                                                </div>
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">
                                                Refund
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">
                                                <Badge className="text-xs" variant="outline">
                                                    Declined
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                2023-06-24
                                            </TableCell>
                                            <TableCell className="text-right">$150.00</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <div className="font-medium">Olivia Smith</div>
                                                <div className="hidden text-sm text-muted-foreground md:inline">
                                                    olivia@example.com
                                                </div>
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">
                                                Refund
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">
                                                <Badge className="text-xs" variant="outline">
                                                    Declined
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                2023-06-24
                                            </TableCell>
                                            <TableCell className="text-right">$150.00</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <div className="font-medium">Olivia Smith</div>
                                                <div className="hidden text-sm text-muted-foreground md:inline">
                                                    olivia@example.com
                                                </div>
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">
                                                Refund
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">
                                                <Badge className="text-xs" variant="outline">
                                                    Declined
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                2023-06-24
                                            </TableCell>
                                            <TableCell className="text-right">$150.00</TableCell>
                                        </TableRow>
                                        {/* Additional rows will be scrollable */}
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </ScrollArea>
        </Tabs>
    </div>
}



