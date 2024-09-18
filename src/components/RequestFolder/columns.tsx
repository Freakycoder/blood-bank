import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "../ui/button"
import { Checkbox } from "@/components/ui/checkbox"

type Request = {
    id: string
    title: string
    status: "pending" | "in progress" | "success"
    priority: "low" | "meduim" | "high"
}

export const ColumnsData: Request[] = [
    {
        id: "1ajd928",
        title: "Need the blood asap",
        status: "pending",
        priority: "meduim",
    },
    {
        id: "dwni876",
        title: "urgently required please",
        status: "in progress",
        priority: "high",
    },
]

export const columns: ColumnDef<Request>[] = [
    {
        accessorKey: "id",
        header: "Id",
    },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "status",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Status
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "priority",
        header: "Priority",
    },
]