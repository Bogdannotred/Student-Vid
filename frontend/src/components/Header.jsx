import React from "react";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export default function Header() {

        
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const [data, setData] = useState(null);

    useEffect(() => {
        const FetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            setData(user);
        };
        FetchUser();
    }, []);


  return (
    <div className="relative bg-gray-100 pb-24"> 
      <header className="bg-blue-600 text-white p-4 shadow-md w-full flex justify-start items-start absolute top-0 left-0 right-0 z-10">
        <h1 className="text-3xl font-bold">Student Vid</h1>
        <div className="absolute left-1/2 bottom-0 w-24 h-24 bg-white rounded-full transform -translate-x-1/2 translate-y-1/2 flex items-center justify-center shadow-lg text-blue-600 font-bold border-4 border-blue-600">
            {data?.user_metadata?.avatar_url ? (
                <img src={data.user_metadata.avatar_url} alt="User Avatar" className="rounded-full w-20 h-20" />
            ) : data?.email ? data.email.charAt(0).toUpperCase() : null}
        </div>
      </header>
    </div>
  );
}