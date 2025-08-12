import { GoogleLogin } from "@react-oauth/google";
import {jwt} from "jwt-decode";
export function Landing(){
    return (
        <>
            <GoogleLogin onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
                const decoded = jwt(credentialResponse.credential);
                console.log(decoded);
            }}
            onError={(error) => {
                console.log(error);
            }}
            />
        </>
    )
}