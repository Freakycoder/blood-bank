import React from 'react';
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { title } from 'process';

const chartData = [
    { month: "January", requests: 186 },
    { month: "February", requests: 305 },
    { month: "March", requests: 237 },
    { month: "April", requests: 73 },
    { month: "May", requests: 209 },
    { month: "June", requests: 214 },
]

const chartConfig = {
    requests: {
        label: "Requests",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

// Sample data for the table
const requestsData = [
    { id: 1, date: "2024-06-15", title: "Cardiology", status: "Completed" },
    { id: 2, date: "2024-06-14", title: "Pediatrics", status: "Pending" },
    { id: 3, date: "2024-06-13", title: "Neurology", status: "In Progress" },
    { id: 3, date: "2024-06-13", title: "Neurology", status: "In Progress" },
    { id: 3, date: "2024-06-13", title: "Neurology", status: "In Progress" },
    { id: 3, date: "2024-06-13", title: "Neurology", status: "In Progress" },
    { id: 3, date: "2024-06-13", title: "Neurology", status: "In Progress" }
    
]

const GraphComponent = () => {
    return (
        <main className="grid gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-2">
            <Card >
                <CardHeader>
                    <CardTitle>Past Requests</CardTitle>
                    <CardDescription>Recent hospital requests</CardDescription>
                </CardHeader>
                <CardContent className='grid grid-cols-4 gap-2'>
                {requestsData.map((request) => (
                                <Card key={request.id} className='col-span-2'>
                                    <CardHeader>

                                    <CardTitle>{request.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>

                                    <CardDescription>{request.status}</CardDescription>
                                    </CardContent>
                                    <CardFooter>{request.date}</CardFooter>
                                </Card>
                            ))}
                </CardContent>
            </Card>

            <Card className="bg-transparent border-transparent shadow-transparent">
                <CardHeader>
                    <CardTitle>Requests by Month</CardTitle>
                    <CardDescription>January - June 2024</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig}>
                        <BarChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                top: 20,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Bar dataKey="requests" fill="var(--color-requests)" radius={8}>
                                <LabelList
                                    position="top"
                                    offset={12}
                                    className="fill-foreground"
                                    fontSize={12}
                                />
                            </Bar>
                        </BarChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </main>
    )
}

export default GraphComponent;