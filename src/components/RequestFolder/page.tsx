import { ColumnsData, columns } from "./columns"
import { DataTable } from "./data-table"


export default function DemoPage() {
   
    return (
      <div className="container mx-auto pt-4">
        <DataTable columns={columns} data={ColumnsData} />
      </div>
    )
  }