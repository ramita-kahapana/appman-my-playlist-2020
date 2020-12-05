import React ,{useState} from 'react'
import Sign from "../components/SignStyle"
// import styled from "styled-components";
// import { fetchLogin } from '../services/fetchData'

// const Conatiner = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
function Login () {
    // const [ stateUser ,setStateUser ] = useState('')
    // const [ statePass ,setStatePass ] = useState('')
    // // const [token, setToken] = useState('')
    // const handleOnChangeUser = (event) => {
    //     setStateUser(event.target.value)
    //   }
    //   const handleOnChangePassword = event => {
    //     setStatePass(event.target.value)
    //   }
    //   const handleOnSubmit = async event => {
    //     if (stateUser!== '' && statePass !== '') {
    //       await fetchLogin(stateUser, statePass).then(response => console.log(response))
    //     }
    //   }
    //   const handleKeyPress = event => {
    //     if (event.keyCode === 13) {
    //       handleOnSubmit()
    //     }
    //   }
  return (
  <>

  <Sign/>
  </>
  )
}
export default Login
