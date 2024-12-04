import { list } from "postcss";
import Link from "./Link";


const CreateNav = () => {

    const routesData = [
        {
          id: 1,
          path: "/",
          name: "Home",
          component: "HomeComponent",
          description: "This is the homepage for our app.",
        },
        {
          id: 2,
          path: "/services",
          name: "Services",
          component: "ServicesComponent",
          description: "Explore the services we offer.",
        },
        {
          id: 3,
          path: "/users/:id",
          name: "User Profile",
          component: "UserProfileComponent",
          description: "View profile information of a user by ID.",
        },
        {
          id: 4,
          path: "/blog/:id",
          name: "Blog Details",
          component: "BlogDetailsComponent",
          description: "Read a detailed blog post using its ID.",
        },
        {
          id: 5,
          path: "/settings",
          name: "Settings",
          component: "SettingsComponent",
          description: "Manage your account settings.",
        },
      ];
      



  return (
    <div>
      
           <nav>
            
            
                       <ul>

                              {

                                            //  step1:create a map for inditual data 
                                            //  step2:kisher upor bitti kore data dekhabe she dekhate hobe 
                                            //  step3:path silect korte hobe link sourcer upor 
                                            //  step4:display te ki dekhate hbe ta dite hobe 
                                 routesData.map(route => <Link key={route.id} route={route}></Link>)


                              }

                       </ul>
            
             
            </nav>       

    </div>
  )
}

export default CreateNav
