import supabase from "@/lib/supabase";

export default function SignupForm() {
    return (
        <div> Sign Up form </div>
    )
}

export async function loader() {

    const {data} = await supabase.auth.getUser();
    console.log(data)
    return data
}