import React from "react";

interface TableProps {
  headers: { label: string, value: string }[];
  cells: { [key: string]: any }[];
}

const Table = ({ headers, cells }: TableProps) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {
              headers.map(({ label }) => (
                <th scope="col" className="px-6 py-3">
                  {label}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            cells.map((row) => (
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                {
                  headers.map(({ value }) => (
                    <td className="px-6 py-4">
                      {row[value]}
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>

  )
}

export default Table;