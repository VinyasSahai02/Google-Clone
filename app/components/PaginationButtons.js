"use client"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

function PaginationButtons() {
    // const router =useRouter()
    // const startIndex = Number(router.query.start) || 0;

    const searchParams = useSearchParams();
    const searchTerm = searchParams.get("term");
    const startIndex = +searchParams.get("start") || 0;
  
    return (
    <div className="flex max-w-lg justify-between text-blue-700 mb-10">
        {startIndex>= 10 &&(
            <Link href={`/search?term=${searchTerm}&start=${startIndex -10}`}>
                <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
                    <ChevronLeftIcon className="h-5"/>
                    <p>Previous</p>
                </div>
            </Link>
        )}

        <Link href={`/search?term=${searchTerm}&start=${startIndex +10}`}>
            <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
                <ChevronRightIcon className="h-5"/>
                <p>Next</p>
            </div>
        </Link>
    </div>
  )
}

export default PaginationButtons