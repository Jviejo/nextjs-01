import { Pool } from 'pg'
import { BeakerIcon } from '@heroicons/react/24/solid'

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
})

export default async function Home() {

    const response = await fetch("http://localhost:3000/api")
    const data = await response.json()



    return <>
        {/* <h1 className="text-3xl font-bold underline">
            Hello world!
            <ul>
            {
                data.data.map(i=> (<li key={i.id}>{i.company_name}</li>))
            }
        </ul>
        </h1> */}

        {/* <div className='flex justify-evenly'>
            <div className="m-1 text-center w-full bg-black text-white p-4">1</div>
            <div className="m-1 text-center w-full bg-black text-white p-4">1</div>
            <div className="m-1 text-center w-full bg-black text-white p-4">1</div>
        </div> */}

        <div class="grid grid-rows-3 grid-flow-col h-screen gap-4 ">
            <div class="relative  row-span-3 p-4 bg-red-100 ">
                <div className='absolute bottom-6 right-3'>
                    <BeakerIcon className="h-16 w-16 text-blue-500" />
                </div>
                01</div>
            <div class="col-span-2 p-4 bg-red-100">02</div>
            <div class="row-span-2 p-4 bg-red-500 col-span-2">03</div>
        </div>

    </>

}