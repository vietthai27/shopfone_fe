import Login from "./pages/Login";
import PhoneModel from "./pages/PhoneModel";
import PhoneModelAdd from "./pages/PhoneModelAdd";
import PhoneModelEdit from "./pages/PhoneModelEdit";
import PhoneModelInfo from "./pages/PhoneModelInfo";
import SignUp from "./pages/SignUp";

const routes = [
    {
        path: "/",
        element: <PhoneModel />
    },
    {
        path: "/addPhoneModel",
        element: <PhoneModelAdd />
    },
    {
        path: "/infoPhoneModel/:modelId",
        element: <PhoneModelInfo/>
    },
    {
        path: "/editPhoneModel/:phoneId",
        element: <PhoneModelEdit/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/signUp",
        element: <SignUp/>
    }
]

export default routes

