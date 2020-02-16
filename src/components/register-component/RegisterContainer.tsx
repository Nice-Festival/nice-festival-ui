import { connect } from "react-redux";
import { IRegisterState } from "../reducers";
import {RegisterComponent} from "./RegisterComponent";
import { registerUser } from '../action-mapper/register-action'


const mapStateToProps = (state:IRegisterState) => {
    return {
        message:state.message
    }
}


const mapDispatchToProps = {
    registerUser
}

export default connect(mapStateToProps,mapDispatchToProps)(RegisterComponent)