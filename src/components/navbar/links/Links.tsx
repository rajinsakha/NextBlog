import Link from "next/link"
import { usePathname } from "next/navigation";

interface ILink{
    title:string;
    path:string;
}


const Links = () => {

    const pathName = usePathname();


    const session = true;
    const isAdmin = true;


    const links:ILink[] = [
        {
            title:'Home',
            path:'/',
        },
        {
            title:'About',
            path:'/about',
        },
        {
            title:'Contact',
            path:'/contact',
        },
        {
            title:'Blog',
            path:'/blog',
        },
    ]

  return (
    <div className="flex items-center justify-between gap-12 max-lg:flex-col max-lg:flex-1 max-lg:px-8 max-lg:py-4 max-lg:mt-16">
        {links.map((link)=>(
            <Link href={link.path} key={link.title} className={pathName === link.path ? 'active-link':'link'}>{link.title}</Link>
        ))}
        {session &&(
            <>
            {isAdmin && <Link href="/admin" className={pathName === "/admin" ? 'active-link':'link'}>Admin</Link>}
            </>
        
        )}


    </div>
  )
}

export default Links